import { Prisma } from '@prisma/client'
import { returnCategoryObject } from 'src/category/return-category.object'
import { returnReviewObject } from 'src/review/return-review.object'
import { returnStorageCapacityObject } from 'src/storage-capacity/return-storage-capacity.object'
import { returnColorsObject } from 'src/colors/return-colors.object'
import { returnModelsObject } from 'src/models/return-models.object'
import { returnCommunicationOptionsObject } from 'src/communication-options/return-communication-options.object'
import { returnCPUObject } from 'src/cpu/return-CPU.object'
import { returnGPUObject } from 'src/gpu/return-GPU.object'
import { returnDiagonalObject } from 'src/diagonal/return-diagonal.object'
import { returnSizeObject } from 'src/size/return-size.object'
import { returnStrapTypeObject } from 'src/strap-type/return-strapType.object'

export const productReturn0bject: Prisma.ProductSelect = {
	images: true,
	description: true,
	id: true,
	name: true,
	price: true,
	createdAt: true,
	slug: true,
	category: { select: returnCategoryObject },
	storageCapacity: { select: returnStorageCapacityObject },
	colors: { select: returnColorsObject },
	models: { select: returnModelsObject },
	communicationOptions: { select: returnCommunicationOptionsObject },
	cpu: { select: returnCPUObject },
	gpu: { select: returnGPUObject },
	diagonal: { select: returnDiagonalObject },
	size: { select: returnSizeObject },
	strapType: { select: returnStrapTypeObject },
	reviews: {
		select: returnReviewObject,
		orderBy: {
			createdAt: 'desc'
		}
	}
}
export const productReturn0bjectFullest: Prisma.ProductSelect = {
	...productReturn0bject
}
