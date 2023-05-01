import { IsString } from 'class-validator'

export class StrapTypeDto {
	@IsString()
	name: string
}
