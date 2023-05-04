import { IsString } from 'class-validator'

export class RamDto {
	@IsString()
	name: string
}
