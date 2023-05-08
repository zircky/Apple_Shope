import { Prisma } from '@prisma/client'

export const returnCommunicationOptionsObject: Prisma.CommunicationOptionsSelect = {
	id: true,
	name: true,
	slug: true
}
