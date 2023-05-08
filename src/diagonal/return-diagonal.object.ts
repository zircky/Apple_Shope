import { Prisma } from '@prisma/client'

export const returnDiagonalObject: Prisma.DiagonalSelect = {
	id: true,
	name: true,
	slug: true
}
