import { Injectable, NotFoundException } from '@nestjs/common'
import { PrismaService } from '../prisma.service'
import { generateSlug } from '../utils/generate-slug'
import { returnCommunicationOptionsObject } from './return-communication-options.object'
import { CommunicationOptionDto } from './dto/communication-option.dto'

@Injectable()
export class CommunicationOptionsService {
	constructor(private prisma: PrismaService) {}

	async byId(id: number) {
		const storageCapacity = await this.prisma.storageCapacity.findUnique({
			where: { id },
			select: returnCommunicationOptionsObject
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
			select: returnCommunicationOptionsObject
		})
		if (!storageCapacity) {
			throw new NotFoundException('storage capacity not found')
		}
		return storageCapacity
	}
	async getAll() {
		return this.prisma.storageCapacity.findMany({
			select: returnCommunicationOptionsObject
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
	async update(id: number, dto: CommunicationOptionDto) {
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