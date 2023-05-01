import { IsString } from 'class-validator'

export class DiagonalDto {
	@IsString()
	name: string
}
