import { IsString } from 'class-validator'

export class ModelDto {
	@IsString()
	name: string
}
