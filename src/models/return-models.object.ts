import { Prisma } from '@prisma/client'

export const returnModelsObject: Prisma.CategorySelect = {
	id: true,
	name: true,
	slug: true
}
