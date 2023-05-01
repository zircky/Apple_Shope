import { Prisma } from '@prisma/client'

export const returnStorageCapacityObject: Prisma.CategorySelect = {
	id: true,
	name: true,
	slug: true
}
