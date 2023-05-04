import { Injectable, NotFoundException } from '@nestjs/common'
import { PrismaService } from '../prisma.service'
import { generateSlug } from '../utils/generate-slug'
import { RamDto } from './dto/ram.dto'
import { returnRAMObject } from './return-RAM.object'

@Injectable()
export class RamService {
	constructor(private prisma: PrismaService) {}

	async byId(id: number) {
		const ram = await this.prisma.storageCapacity.findUnique({
			where: { id },
			select: returnRAMObject
		})
		if (!ram) {
			throw new NotFoundException('storageCapacity not found')
		}
		return ram
	}
	async bySlug(slug: string) {
		const ram = await this.prisma.storageCapacity.findUnique({
			where: {
				slug
			},
			select: returnRAMObject
		})
		if (!ram) {
			throw new NotFoundException('storage capacity not found')
		}
		return ram
	}
	async getAll() {
		return this.prisma.storageCapacity.findMany({
			select: returnRAMObject
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
	async update(id: number, dto: RamDto) {
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
