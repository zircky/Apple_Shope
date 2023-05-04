import { Injectable, NotFoundException } from '@nestjs/common'
import { PrismaService } from '../prisma.service'
import { generateSlug } from '../utils/generate-slug'
import { returnStrapTypeObject } from './return-strapType.object'
import { StrapTypeDto } from './dto/strap-type.dto'

@Injectable()
export class StrapTypeService {
	constructor(private prisma: PrismaService) {}

	async byId(id: number) {
		const strapType = await this.prisma.storageCapacity.findUnique({
			where: { id },
			select: returnStrapTypeObject
		})
		if (!strapType) {
			throw new NotFoundException('storageCapacity not found')
		}
		return strapType
	}
	async bySlug(slug: string) {
		const strapType = await this.prisma.storageCapacity.findUnique({
			where: {
				slug
			},
			select: returnStrapTypeObject
		})
		if (!strapType) {
			throw new NotFoundException('storage capacity not found')
		}
		return strapType
	}
	async getAll() {
		return this.prisma.storageCapacity.findMany({
			select: returnStrapTypeObject
		})
	}
	async create() {
		return this.prisma.storageCapacity.create({
			data: {
				name: '',
				slug: ''
			}
		})
	}
	async update(id: number, dto: StrapTypeDto) {
		return this.prisma.storageCapacity.update({
			where: { id },
			data: {
				name: dto.name,
				slug: generateSlug(dto.name)
			}
		})
	}

	async delete(id: number) {
		return this.prisma.storageCapacity.delete({
			where: { id }
		})
	}
}
