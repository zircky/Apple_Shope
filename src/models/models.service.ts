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
	async bySlugAll(name: string) {
		const model = await this.prisma.models.findUnique({
			where: {
				name
			},
			select: returnModelsObject
		})
		if (!model) {
			throw new NotFoundException('model not found')
		}
		return model
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
				slugAll: ''
			}
		})
	}
	async update(id: number, dto: ModelDto) {
		return this.prisma.models.update({
			where: { id },
			data: {
				name: dto.name,
				slug: generateSlug(dto.name),
				slugAll: dto.slugAll
			}
		})
	}

	async delete(id: number) {
		return this.prisma.models.delete({
			where: { id }
		})
	}
}
