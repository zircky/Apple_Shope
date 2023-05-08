import { IsNumber, IsString } from 'class-validator'

export class ModelDto {
	@IsString()
	name: string

	@IsNumber()
	categoryId: number
}
