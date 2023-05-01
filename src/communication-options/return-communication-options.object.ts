import { Prisma } from '@prisma/client'

export const returnCommunicationOptionsObject: Prisma.CategorySelect = {
	id: true,
	name: true,
	slug: true
}
