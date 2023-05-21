import { Prisma } from '@prisma/client'

export class ProductEntity implements Prisma.ProductCreateInput {
	id: number
	name: string
	price: number
	description: string
	images: string[]
	categoryId: number
	storageCapacityId: number
	colorsId: number
	modelsId: number
	communicationOptionsId: number
	cpuId: number
	gpuId: number
	diagonalId: number
	sizeId: number
	strapTypeId: number
}
