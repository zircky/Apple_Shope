import { IsString } from 'class-validator'

export class GpuDto {
	@IsString()
	name: string
}
