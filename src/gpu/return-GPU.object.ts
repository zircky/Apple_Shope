import { Prisma } from '@prisma/client'

export const returnGPUObject: Prisma.GPUSelect = {
	id: true,
	name: true,
	slug: true
}
