import { IsEmail, MinLength, IsString, IsNumber } from 'class-validator'

export class AuthDto {
	@IsEmail()
	email: string

	@MinLength(6, {
		message: 'Password must be at least 6 characters long'
	})
	@IsString()
	password: string

	@IsString()
	lastName: string

	@IsString()
	name: string

	@IsString()
	patronymic: string

	@IsString()
	avatarPath: string

	@IsNumber()
	phone: string
}
