import { Prisma } from '@prisma/client'

export const returnSizeObject: Prisma.SizeSelect = {
	id: true,
	name: true,
	slug: true
}
