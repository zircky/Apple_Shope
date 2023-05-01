import { Prisma } from '@prisma/client'

export const returnSizeObject: Prisma.CategorySelect = {
	id: true,
	name: true,
	slug: true
}
