import { Prisma } from '@prisma/client'

export const returnRAMObject: Prisma.CategorySelect = {
	id: true,
	name: true,
	slug: true
}
