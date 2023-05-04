import { Injectable, NotFoundException } from '@nestjs/common'
import { PrismaService } from '../prisma.service'
import { generateSlug } from '../utils/generate-slug'
import { returnCPUObject } from './return-CPU.object'
import { CpuDto } from './dto/cpu.dto'

@Injectable()
export class CpuService {
	constructor(private prisma: PrismaService) {}

	async byId(id: number) {
		const cpu = await this.prisma.storageCapacity.findUnique({
			where: { id },
			select: returnCPUObject
		})
		if (!cpu) {
			throw new NotFoundException('storageCapacity not found')
		}
		return cpu
	}
	async bySlug(slug: string) {
		const cpu = await this.prisma.storageCapacity.findUnique({
			where: {
				slug
			},
			select: returnCPUObject
		})
		if (!cpu) {
			throw new NotFoundException('storage capacity not found')
		}
		return cpu
	}
	async getAll() {
		return this.prisma.storageCapacity.findMany({
			select: returnCPUObject
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
	async update(id: number, dto: CpuDto) {
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
