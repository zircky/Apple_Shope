import { Prisma } from '@prisma/client'

export const returnRAMObject: Prisma.RAMSelect = {
	id: true,
	name: true,
	slug: true
}
