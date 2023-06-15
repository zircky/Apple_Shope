import { EnumOrderStatus } from '@prisma/client'
import { ArrayMinSize, IsArray, IsEnum, IsNumber, IsOptional, ValidateNested } from 'class-validator'
import { Type } from 'class-transformer'

export class OrderDto {
	@IsOptional()
	@IsEnum(EnumOrderStatus)
	status: EnumOrderStatus

	@IsArray()
	@ValidateNested({each:true})
	@Type(()=>OrederItemDto)
	items: OrederItemDto[]
}

export class OrederItemDto{
	@IsNumber()
	quantity: number

	@IsNumber()
	price: number

	@IsNumber()
	productId: number
}