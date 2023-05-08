import { Injectable, NotFoundException } from '@nestjs/common'
import { PrismaService } from '../prisma.service'
import { generateSlug } from '../utils/generate-slug'
import { returnModelsObject } from './return-models.object'
import { ModelDto } from './dto/model.dto'

@Injectable()
export class ModelsService {
	constructor(private prisma: PrismaService) {}

	async byId(id: number) {
		const model = await this.prisma.models.findUnique({
			where: { id },
			select: returnModelsObject
		})
		if (!model) {
			throw new NotFoundException('model not found')
		}
		return model
	}
	async bySlug(slug: string) {
		const model = await this.prisma.models.findUnique({
			where: {
				slug
			},
			select: returnModelsObject
		})
		if (!model) {
			throw new NotFoundException('model not found')
		}
		return model
	}
	
	async byCategory(categorySlug: string) {
		const products = await this.prisma.models.findMany({
			where: {
				category: {
					slug: categorySlug
				}
			},
			select: returnModelsObject
		})
		if (!products) throw new NotFoundException('products not found')
		return products
	}

	async getAll() {
		return this.prisma.models.findMany({
			select: returnModelsObject
		})
	}
	async create() {
		return this.prisma.models.create({
			data: {
				name: '',
				slug: '',
				
			}
		})
	}
	async update(id: number, dto: ModelDto) {
		const {categoryId} = dto
		return this.prisma.models.update({
			where: { id },
			data: {
				name: dto.name,
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
		return this.prisma.models.delete({
			where: { id }
		})
	}
}
