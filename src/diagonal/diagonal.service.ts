import { Injectable, NotFoundException } from '@nestjs/common'
import { DiagonalDto } from './dto/diagonal.dto'
import { PrismaService } from '../prisma.service'
import { generateSlug } from '../utils/generate-slug'
import { returnDiagonalObject } from './return-diagonal.object'

@Injectable()
export class DiagonalService {
	constructor(private prisma: PrismaService) {}

	async byId(id: number) {
		const diagonal = await this.prisma.diagonal.findUnique({
			where: { id },
			select: returnDiagonalObject
		})
		if (!diagonal) {
			throw new NotFoundException('diagonal not found')
		}
		return diagonal
	}
	async bySlug(slug: string) {
		const diagonal = await this.prisma.diagonal.findUnique({
			where: {
				slug
			},
			select: returnDiagonalObject
		})
		if (!diagonal) {
			throw new NotFoundException('diagonal not found')
		}
		return diagonal
	}
	async getAll() {
		return this.prisma.diagonal.findMany({
			select: returnDiagonalObject
		})
	}
	async create() {
		return this.prisma.diagonal.create({
			data: {
				name: '',
				slug: ''
			}
		})
	}
	async update(id: number, dto: DiagonalDto) {
		return this.prisma.diagonal.update({
			where: { id },
			data: {
				name: dto.name,
				slug: generateSlug(dto.name)
			}
		})
	}

	async delete(id: number) {
		return this.prisma.diagonal.delete({
			where: { id }
		})
	}
}
