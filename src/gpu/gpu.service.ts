import { Injectable, NotFoundException } from '@nestjs/common'
import { PrismaService } from '../prisma.service'
import { generateSlug } from '../utils/generate-slug'
import { GpuDto } from './dto/gpu.dto'
import { returnGPUObject } from './return-GPU.object'

@Injectable()
export class GpuService {
	constructor(private prisma: PrismaService) {}

	async byId(id: number) {
		const gpu = await this.prisma.gPU.findUnique({
			where: { id },
			select: returnGPUObject
		})
		if (!gpu) {
			throw new NotFoundException('gpu not found')
		}
		return gpu
	}
	async bySlug(slug: string) {
		const gpu = await this.prisma.gPU.findUnique({
			where: {
				slug
			},
			select: returnGPUObject
		})
		if (!gpu) {
			throw new NotFoundException('gpu not found')
		}
		return gpu
	}
	async getAll() {
		return this.prisma.gPU.findMany({
			select: returnGPUObject
		})
	}
	async create() {
		return this.prisma.gPU.create({
			data: {
				name: '',
				slug: ''
			}
		})
	}
	async update(id: number, dto: GpuDto) {
		return this.prisma.gPU.update({
			where: { id },
			data: {
				name: dto.name,
				slug: generateSlug(dto.name)
			}
		})
	}

	async delete(id: number) {
		return this.prisma.gPU.delete({
			where: { id }
		})
	}
}
