import { IsString } from 'class-validator'

export class CommunicationOptionDto {
	@IsString()
	name: string
}
