import { Prisma } from '@prisma/client'

export const returnCPUObject: Prisma.CategorySelect = {
	id: true,
	name: true,
	slug: true
}
