import { IsString } from 'class-validator'

export class ColorsDto {
	@IsString()
	name: string

	@IsString()
	colorCod: string
}
