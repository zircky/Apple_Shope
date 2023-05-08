import { Injectable, NotFoundException } from '@nestjs/common'
import { SizeDto } from './dto/size.dto'
import { PrismaService } from '../prisma.service'

import { generateSlug } from '../utils/generate-slug'
import { returnSizeObject } from './return-size.object'

@Injectable()
export class SizeService {
	constructor(private prisma: PrismaService) {}

	async byId(id: number) {
		const size = await this.prisma.size.findUnique({
			where: { id },
			select: returnSizeObject
		})
		if (!size) {
			throw new NotFoundException('size not found')
		}
		return size
	}
	async bySlug(slug: string) {
		const size = await this.prisma.size.findUnique({
			where: {
				slug
			},
			select: returnSizeObject
		})
		if (!size) {
			throw new NotFoundException('size not found')
		}
		return size
	}
	async getAll() {
		return this.prisma.size.findMany({
			select: returnSizeObject
		})
	}
	async create() {
		return this.prisma.size.create({
			data: {
				name: '',
				slug: ''
			}
		})
	}
	async update(id: number, dto: SizeDto) {
		return this.prisma.size.update({
			where: { id },
			data: {
				name: dto.name,
				slug: generateSlug(dto.name)
			}
		})
	}

	async delete(id: number) {
		return this.prisma.size.delete({
			where: { id }
		})
	}
}
