import { Injectable, NotFoundException } from '@nestjs/common'
import { ColorsDto } from './dto/color.dto'
import { PrismaService } from '../prisma.service'
import { generateSlug } from '../utils/generate-slug'
import { returnColorsObject } from './return-colors.object'

@Injectable()
export class ColorsService {
	constructor(private prisma: PrismaService) {}

	async byId(id: number) {
		const color = await this.prisma.colors.findUnique({
			where: { id },
			select: returnColorsObject
		})
		if (!color) {
			throw new NotFoundException('colors not found')
		}
		return color
	}

	// async byColorCod(codCod: string) {
	// 	const color = await this.prisma.colors.findUnique({
	// 		where: {
	// 			codCod
	// 		},
	// 		select: returnColorsObject
	// 	})
	// 	if (!color) {
	// 		throw new NotFoundException('colors not found')
	// 	}
	// 	return color
	// }

	async bySlug(slug: string) {
		const color = await this.prisma.colors.findUnique({
			where: {
				slug
			},
			select: returnColorsObject
		})
		if (!color) {
			throw new NotFoundException('colors not found')
		}
		return color
	}

	async getAll() {
		return this.prisma.colors.findMany({
			select: returnColorsObject
		})
	}
	async create() {
		return this.prisma.colors.create({
			data: {
				name: '',
				slug: '',
				colorCod: ''
			}
		})
	}
	async update(id: number, dto: ColorsDto) {
		return this.prisma.colors.update({
			where: { id },
			data: {
				name: dto.name,
				slug: generateSlug(dto.name),
				colorCod: dto.colorCod
			}
		})
	}

	async delete(id: number) {
		return this.prisma.colors.delete({
			where: { id }
		})
	}
}
