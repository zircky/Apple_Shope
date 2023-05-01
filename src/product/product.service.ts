import { Injectable, NotFoundException } from '@nestjs/common'
import { PrismaService } from 'src/prisma.service'
import {
	productReturn0bject,
	productReturn0bjectFullest
} from '../product/return-product.object'
import { ProductDto } from './dto/product.dto'
import { generateSlug } from 'src/utils/generate-slug'
import { EnumProductSort, GetAllProductDto } from './dto/get-all.product.dto'
import { PaginationService } from '../pagination/pagination.service'
import { Prisma } from '@prisma/client'

@Injectable()
export class ProductService {
	constructor(
		private prisma: PrismaService,
		private paginotionService: PaginationService
	) {}

	async getAll(dto: GetAllProductDto = {}) {
		const { sort, searchTerm } = dto

		const prismaSort: Prisma.ProductOrderByWithRelationInput[] = []

		if (sort === EnumProductSort.LOW_PRICE) {
			prismaSort.push({ price: 'asc' })
		} else if (sort === EnumProductSort.HIGH_PRICE) {
			prismaSort.push({ price: 'desc' })
		} else if (sort === EnumProductSort.OLDEST) {
			prismaSort.push({ createdAt: 'asc' })
		} else {
			prismaSort.push({ createdAt: 'desc' })
		}

		const prismaSearchTermFillter: Prisma.ProductWhereInput = searchTerm
			? {
					OR: [
						{
							category: {
								name: {
									contains: searchTerm,
									mode: 'insensitive'
								}
							},
							name: {
								contains: searchTerm,
								mode: 'insensitive'
							},
							description: {
								contains: searchTerm,
								mode: 'insensitive'
							}
						}
					]
			  }
			: {}
		const { perPage, skip } = this.paginotionService.getPagination(dto)
		const products = await this.prisma.product.findMany({
			where: prismaSearchTermFillter,
			orderBy: prismaSort,
			skip,
			take: +perPage,
			select: productReturn0bject
		})
		return {
			products,
			length: await this.prisma.product.count({
				where: prismaSearchTermFillter
			})
		}
	}

	async byId(id: number) {
		const product = await this.prisma.product.findUnique({
			where: {
				id
			},
			select: productReturn0bjectFullest
		})
		if (!product) {
			throw new NotFoundException('product not found')
		}
		return product
	}
	async bySlug(slug: string) {
		const product = await this.prisma.product.findUnique({
			where: {
				slug
			},
			select: productReturn0bjectFullest
		})
		if (!product) {
			throw new NotFoundException('product not found')
		}
		return product
	}
	async byCategory(categorySlug: string) {
		const products = await this.prisma.product.findMany({
			where: {
				category: {
					slug: categorySlug
				}
			},
			select: productReturn0bjectFullest
		})
		if (!products) throw new NotFoundException('products not found')
		return products
	}

	async byStorageCapacity(storageCapacitySlug: string) {
		const products = await this.prisma.product.findMany({
			where: {
				storageCapacity: { slug: storageCapacitySlug }
			},
			select: productReturn0bjectFullest
		})
		if (!products) throw new NotFoundException('products not found')
		return products
	}
	async byColors(colorsSlug: string) {
		const products = await this.prisma.product.findMany({
			where: {
				colors: { slug: colorsSlug }
			},
			select: productReturn0bjectFullest
		})
		if (!products) throw new NotFoundException('products not found')
		return products
	}
	async byModels(modelsSlug: string) {
		const products = await this.prisma.product.findMany({
			where: {
				models: { slug: modelsSlug }
			},
			select: productReturn0bjectFullest
		})
		if (!products) throw new NotFoundException('products not found')
		return products
	}
	async byCommunicationOptions(communicationOptionsSlug: string) {
		const products = await this.prisma.product.findMany({
			where: {
				communicationOptions: { slug: communicationOptionsSlug }
			},
			select: productReturn0bjectFullest
		})
		if (!products) throw new NotFoundException('products not found')
		return products
	}
	async byCPU(cpuSlug: string) {
		const products = await this.prisma.product.findMany({
			where: {
				cpu: { slug: cpuSlug }
			},
			select: productReturn0bjectFullest
		})
		if (!products) throw new NotFoundException('products not found')
		return products
	}
	async byGPU(gpuSlug: string) {
		const products = await this.prisma.product.findMany({
			where: {
				gpu: { slug: gpuSlug }
			},
			select: productReturn0bjectFullest
		})
		if (!products) throw new NotFoundException('products not found')
		return products
	}
	async byDiagonal(diagonalSlug: string) {
		const products = await this.prisma.product.findMany({
			where: {
				diagonal: { slug: diagonalSlug }
			},
			select: productReturn0bjectFullest
		})
		if (!products) throw new NotFoundException('products not found')
		return products
	}
	async bySize(sizeSlug: string) {
		const products = await this.prisma.product.findMany({
			where: {
				size: { slug: sizeSlug }
			},
			select: productReturn0bjectFullest
		})
		if (!products) throw new NotFoundException('products not found')
		return products
	}
	async byStrapType(strapTypeSlug: string) {
		const products = await this.prisma.product.findMany({
			where: {
				strapType: { slug: strapTypeSlug }
			},
			select: productReturn0bjectFullest
		})
		if (!products) throw new NotFoundException('products not found')
		return products
	}

	async getSimilar(id: number) {
		const currentProduct = await this.byId(id)

		if (!currentProduct)
			throw new NotFoundException('Current product not found!')

		const products = await this.prisma.product.findMany({
			where: {
				category: {
					name: currentProduct.category.name
				},
				NOT: {
					id: currentProduct.id
				}
			},
			orderBy: {
				createdAt: 'desc'
			},
			select: productReturn0bject
		})
		return products
	}

	async create() {
		const product = await this.prisma.product.create({
			data: {
				description: '',
				name: '',
				price: 0,
				slug: ''
			}
		})
		return product.id
	}

	async update(id: number, dto: ProductDto) {
		const { description, images, price, name, categoryId } = dto

		return this.prisma.product.update({
			where: { id },
			data: {
				description,
				images,
				price,
				name,
				slug: generateSlug(dto.name),
				category: {
					connect: {
						id: categoryId
					}
				}
			}
		})
	}

	async delete(id: number) {
		return this.prisma.product.delete({
			where: { id }
		})
	}
}
