import { Prisma } from '@prisma/client'

export const returnColorsObject: Prisma.ColorsSelect = {
	id: true,
	name: true,
	colorCod: true,
	slug: true
}
