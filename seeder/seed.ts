import { PrismaClient } from '@prisma/client'
import { ramData } from './ram.data'
import { categoryData } from './category.data'
import { storageCapacityData } from './storageCapacity.data'
import { colorsData } from './colors.data'
import { communicationOptionsData } from './communicationOptions.data'
import { cpuData } from './cpu.data'
import { diagonalData } from './diagonal.data'
import { gpuData } from './gpu.data'
import { modelsData } from './models.data'
import { sizeData } from './size.data'
import { strapTypeData } from './strapType.data'
import { product_iPhone } from './product.data'

const prisma = new PrismaClient()
async function main() {
	await prisma.category.createMany({
		data: categoryData
	})
	await prisma.storageCapacity.createMany({
		data: storageCapacityData
	})
	await prisma.colors.createMany({
		data: colorsData
	})
	await prisma.communicationOptions.createMany({
		data: communicationOptionsData
	})
	await prisma.cPU.createMany({
		data: cpuData
	})
	await prisma.diagonal.createMany({
		data: diagonalData
	})
	await prisma.gPU.createMany({
		data: gpuData
	})
	// await prisma.rAM.createMany({
	// 	data: ramData
	// })
	await prisma.models.createMany({
		data: modelsData
	})
	await prisma.size.createMany({
		data: sizeData
	})
	await prisma.strapType.createMany({
		data: strapTypeData
	})
	await prisma.product.createMany({
		data: product_iPhone
	})
}

main()
	.catch(e => {
		// eslint-disable-next-line no-console
		console.error(e)
	})
	.finally(async () => {
		await prisma.$disconnect()
	})
