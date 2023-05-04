import { Injectable, NotFoundException } from '@nestjs/common'
import { PrismaService } from '../prisma.service'
import { generateSlug } from '../utils/generate-slug'
import { returnModelsObject } from './return-models.object'
import { ModelDto } from './dto/model.dto'

@Injectable()
export class ModelsService {
	constructor(private prisma: PrismaService) {}

	async byId(id: number) {
		const model = await this.prisma.storageCapacity.findUnique({
			where: { id },
			select: returnModelsObject
		})
		if (!model) {
			throw new NotFoundException('storageCapacity not found')
		}
		return model
	}
	async bySlug(slug: string) {
		const model = await this.prisma.storageCapacity.findUnique({
			where: {
				slug
			},
			select: returnModelsObject
		})
		if (!model) {
			throw new NotFoundException('storage capacity not found')
		}
		return model
	}
	async getAll() {
		return this.prisma.storageCapacity.findMany({
			select: returnModelsObject
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
	async update(id: number, dto: ModelDto) {
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
