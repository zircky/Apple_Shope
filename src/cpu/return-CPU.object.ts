import { Prisma } from '@prisma/client'

export const returnCPUObject: Prisma.CPUSelect = {
	id: true,
	name: true,
	slug: true
}
