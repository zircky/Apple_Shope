import { Injectable, NotFoundException } from '@nestjs/common'
import { PrismaService } from '../prisma.service'
import { generateSlug } from '../utils/generate-slug'
import { returnStrapTypeObject } from './return-strapType.object'
import { StrapTypeDto } from './dto/strap-type.dto'

@Injectable()
export class StrapTypeService {
	constructor(private prisma: PrismaService) {}

	async byId(id: number) {
		const strapType = await this.prisma.strapType.findUnique({
			where: { id },
			select: returnStrapTypeObject
		})
		if (!strapType) {
			throw new NotFoundException('strapType not found')
		}
		return strapType
	}
	async bySlug(slug: string) {
		const strapType = await this.prisma.strapType.findUnique({
			where: {
				slug
			},
			select: returnStrapTypeObject
		})
		if (!strapType) {
			throw new NotFoundException('strapType not found')
		}
		return strapType
	}
	async getAll() {
		return this.prisma.strapType.findMany({
			select: returnStrapTypeObject
		})
	}
	async create() {
		return this.prisma.strapType.create({
			data: {
				name: '',
				slug: ''
			}
		})
	}
	async update(id: number, dto: StrapTypeDto) {
		return this.prisma.strapType.update({
			where: { id },
			data: {
				name: dto.name,
				slug: generateSlug(dto.name)
			}
		})
	}

	async delete(id: number) {
		return this.prisma.strapType.delete({
			where: { id }
		})
	}
}
