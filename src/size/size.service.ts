import { Injectable, NotFoundException } from '@nestjs/common'
import { SizeDto } from './dto/size.dto'
import { PrismaService } from '../prisma.service'

import { generateSlug } from '../utils/generate-slug'
import { returnSizeObject } from './return-size.object'

@Injectable()
export class SizeService {
	constructor(private prisma: PrismaService) {}

	async byId(id: number) {
		const storageCapacity = await this.prisma.storageCapacity.findUnique({
			where: { id },
			select: returnSizeObject
		})
		if (!storageCapacity) {
			throw new NotFoundException('storageCapacity not found')
		}
		return storageCapacity
	}
	async bySlug(slug: string) {
		const storageCapacity = await this.prisma.storageCapacity.findUnique({
			where: {
				slug
			},
			select: returnSizeObject
		})
		if (!storageCapacity) {
			throw new NotFoundException('storage capacity not found')
		}
		return storageCapacity
	}
	async getAll() {
		return this.prisma.storageCapacity.findMany({
			select: returnSizeObject
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
	async update(id: number, dto: SizeDto) {
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
