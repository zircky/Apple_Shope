import { IsString } from 'class-validator'

export class SizeDto {
	@IsString()
	name: string
}
