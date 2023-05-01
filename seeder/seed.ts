import { PrismaClient } from '@prisma/client'
import { product_iPhone } from './product.data'

const prisma = new PrismaClient()
async function main() {
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
