import { Injectable, NotFoundException } from '@nestjs/common'
import { ColorsDto } from './dto/color.dto'
import { PrismaService } from '../prisma.service'
import { generateSlug } from '../utils/generate-slug'
import { returnColorsObject } from './return-colors.object'

@Injectable()
export class ColorsService {
	constructor(private prisma: PrismaService) {}

	async byId(id: number) {
		const color = await this.prisma.storageCapacity.findUnique({
			where: { id },
			select: returnColorsObject
		})
		if (!color) {
			throw new NotFoundException('storageCapacity not found')
		}
		return color
	}
	async bySlug(slug: string) {
		const color = await this.prisma.storageCapacity.findUnique({
			where: {
				slug
			},
			select: returnColorsObject
		})
		if (!color) {
			throw new NotFoundException('storage capacity not found')
		}
		return color
	}
	async getAll() {
		return this.prisma.storageCapacity.findMany({
			select: returnColorsObject
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
	async update(id: number, dto: ColorsDto) {
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
