import { ArrayMinSize, IsNumber, IsOptional, IsString } from 'class-validator'
import { Prisma } from '@prisma/client'

export class ProductDto implements Prisma.ProductUpdateInput {
	@IsString()
	name: string

	@IsNumber()
	price: number

	@IsOptional()
	@IsString()
	description: string

	@IsString({ each: true })
	@ArrayMinSize(1)
	images: string[]

	@IsNumber()
	categoryId: number

	@IsOptional()
	@IsNumber()
	storageCapacityId: number

	@IsOptional()
	@IsNumber()
	colorsId: number

	@IsOptional()
	@IsNumber()
	modelsId: number

	@IsOptional()
	@IsNumber()
	communicationOptionsId: number

	@IsOptional()
	@IsNumber()
	cpuId: number

	@IsOptional()
	@IsNumber()
	gpuId: number

	@IsOptional()
	@IsNumber()
	diagonalId: number

	@IsOptional()
	@IsNumber()
	sizeId: number

	@IsOptional()
	@IsNumber()
	strapTypeId: number
}
