import { Prisma } from '@prisma/client'

export const returnDiagonalObject: Prisma.CategorySelect = {
	id: true,
	name: true,
	slug: true
}
