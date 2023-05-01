import { IsString } from 'class-validator'

export class CpuDto {
	@IsString()
	name: string
}
