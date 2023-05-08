import { Injectable, NotFoundException } from '@nestjs/common'
import { PrismaService } from '../prisma.service'
import { generateSlug } from '../utils/generate-slug'
import { returnCPUObject } from './return-CPU.object'
import { CpuDto } from './dto/cpu.dto'

@Injectable()
export class CpuService {
	constructor(private prisma: PrismaService) {}

	async byId(id: number) {
		const cpu = await this.prisma.cPU.findUnique({
			where: { id },
			select: returnCPUObject
		})
		if (!cpu) {
			throw new NotFoundException('cPU not found')
		}
		return cpu
	}
	async bySlug(slug: string) {
		const cpu = await this.prisma.cPU.findUnique({
			where: {
				slug
			},
			select: returnCPUObject
		})
		if (!cpu) {
			throw new NotFoundException('cPU not found')
		}
		return cpu
	}
	async getAll() {
		return this.prisma.cPU.findMany({
			select: returnCPUObject
		})
	}
	async create() {
		return this.prisma.cPU.create({
			data: {
				name: '',
				slug: ''
			}
		})
	}
	async update(id: number, dto: CpuDto) {
		return this.prisma.cPU.update({
			where: { id },
			data: {
				name: dto.name,
				slug: generateSlug(dto.name)
			}
		})
	}

	async delete(id: number) {
		return this.prisma.cPU.delete({
			where: { id }
		})
	}
}
