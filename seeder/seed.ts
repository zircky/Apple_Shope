import { PrismaClient } from '@prisma/client'
import { ramData } from './ram.data'

const prisma = new PrismaClient()
async function main() {
	// await prisma.category.createMany({
	// 	data: categoryData
	// })
	// await prisma.product.createMany({
	// 	data: product_iPhone
	// })
	// await prisma.storageCapacity.createMany({
	// 	data: storageCapacityData
	// })
	// await prisma.colors.createMany({
	// 	data: colorsData
	// })
	// await prisma.communicationOptions.createMany({
	// 	data: communicationOptionsData
	// })
	// await prisma.cPU.createMany({
	// 	data: cpuData
	// })
	// await prisma.diagonal.createMany({
	// 	data: diagonalData
	// })
	// await prisma.gPU.createMany({
	// 	data: gpuData
	// })
	await prisma.rAM.createMany({
		data: ramData
	})
	// await prisma.models.createMany({
	// 	data: modelsData
	// })
	// await prisma.size.createMany({
	// 	data: sizeData
	// })
	// await prisma.strapType.createMany({
	// 	data: strapTypeData
	// })
}

main()
	.catch(e => {
		// eslint-disable-next-line no-console
		console.error(e)
	})
	.finally(async () => {
		await prisma.$disconnect()
	})
