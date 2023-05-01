import { Injectable, NotFoundException } from '@nestjs/common'
import { PrismaService } from 'src/prisma.service'
import { generateSlug } from 'src/utils/generate-slug'
import { returnStorageCapacityObject } from './return-storage-capacity.object'
import { StorageCapacityDto } from './dto/storage-capacity.dto'

@Injectable()
export class StorageCapacityService {
	constructor(private prisma: PrismaService) {}

	async byId(id: number) {
		const storageCapacity = await this.prisma.storageCapacity.findUnique({
			where: { id },
			select: returnStorageCapacityObject
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
			select: returnStorageCapacityObject
		})
		if (!storageCapacity) {
			throw new NotFoundException('storage capacity not found')
		}
		return storageCapacity
	}
	async getAll() {
		return this.prisma.storageCapacity.findMany({
			select: returnStorageCapacityObject
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
	async update(id: number, dto: StorageCapacityDto) {
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
