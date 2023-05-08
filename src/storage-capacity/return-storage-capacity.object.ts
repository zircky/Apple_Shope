import { Prisma } from '@prisma/client'

export const returnStorageCapacityObject: Prisma.StorageCapacitySelect = {
	id: true,
	name: true,
	slug: true
}
