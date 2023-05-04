import { Injectable, NotFoundException } from '@nestjs/common'
import { PrismaService } from '../prisma.service'
import { generateSlug } from '../utils/generate-slug'
import { GpuDto } from './dto/gpu.dto'
import { returnGPUObject } from './return-GPU.object'

@Injectable()
export class GpuService {
	constructor(private prisma: PrismaService) {}

	async byId(id: number) {
		const gpu = await this.prisma.storageCapacity.findUnique({
			where: { id },
			select: returnGPUObject
		})
		if (!gpu) {
			throw new NotFoundException('storageCapacity not found')
		}
		return gpu
	}
	async bySlug(slug: string) {
		const gpu = await this.prisma.storageCapacity.findUnique({
			where: {
				slug
			},
			select: returnGPUObject
		})
		if (!gpu) {
			throw new NotFoundException('storage capacity not found')
		}
		return gpu
	}
	async getAll() {
		return this.prisma.storageCapacity.findMany({
			select: returnGPUObject
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
	async update(id: number, dto: GpuDto) {
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
