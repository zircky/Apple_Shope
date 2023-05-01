import { Prisma } from '@prisma/client'

export const returnGPUObject: Prisma.CategorySelect = {
	id: true,
	name: true,
	slug: true
}
