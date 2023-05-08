import { Prisma } from '@prisma/client'
import { returnCategoryObject } from 'src/category/return-category.object'

export const returnModelsObject: Prisma.ModelsSelect = {
	id: true,
	name: true,
	slug: true,
	category: { select: returnCategoryObject }
}
