import { Prisma } from '@prisma/client'

export const returnModelsObject: Prisma.ModelsSelect = {
	id: true,
	name: true,
	slug: true,
	slugAll: true
}
