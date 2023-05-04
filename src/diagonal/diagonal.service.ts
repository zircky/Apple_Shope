import { Injectable, NotFoundException } from '@nestjs/common'
import { DiagonalDto } from './dto/diagonal.dto'
import { PrismaService } from '../prisma.service'
import { generateSlug } from '../utils/generate-slug'
import { returnDiagonalObject } from './return-diagonal.object'

@Injectable()
export class DiagonalService {
	constructor(private prisma: PrismaService) {}

	async byId(id: number) {
		const diagonal = await this.prisma.storageCapacity.findUnique({
			where: { id },
			select: returnDiagonalObject
		})
		if (!diagonal) {
			throw new NotFoundException('storageCapacity not found')
		}
		return diagonal
	}
	async bySlug(slug: string) {
		const diagonal = await this.prisma.storageCapacity.findUnique({
			where: {
				slug
			},
			select: returnDiagonalObject
		})
		if (!diagonal) {
			throw new NotFoundException('storage capacity not found')
		}
		return diagonal
	}
	async getAll() {
		return this.prisma.storageCapacity.findMany({
			select: returnDiagonalObject
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
	async update(id: number, dto: DiagonalDto) {
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
