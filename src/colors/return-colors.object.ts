import { Prisma } from '@prisma/client'

export const returnColorsObject: Prisma.CategorySelect = {
	id: true,
	name: true,
	slug: true
}
