import { IsString } from 'class-validator'

export class StorageCapacityDto {
	@IsString()
	name: string
}
