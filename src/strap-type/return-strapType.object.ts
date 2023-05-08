import { Prisma } from '@prisma/client'

export const returnStrapTypeObject: Prisma.StrapTypeSelect = {
	id: true,
	name: true,
	slug: true
}
