export interface IProduct {
	name: string
	slug: string
	description: string
	price: number
	images?: string[]
	categoryId?: number | null
	storageCapacityId?: number | null
	colorsId?: number | null
	modelsId?: number | null
	communicationOptionsId?: number | null
	cpuId?: number | null
	gpuId?: number | null
	ramId?: number | null
	diagonalId?: number | null
	sizeId?: number | null
	strapTypeId?: number | null
	userId?: number | null
}
