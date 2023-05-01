import { Prisma } from '@prisma/client'

export const returnStrapTypeObject: Prisma.CategorySelect = {
	id: true,
	name: true,
	slug: true
}
