import { IsEmail, MinLength, IsString, IsOptional } from 'class-validator'

export class  AuthDto {
    @IsEmail()
    email: string

    @MinLength(6, {
        message: 'Password must be at least 6 characters long',
    })
    @IsString()
    password: string

    @IsOptional()
    @IsString()
    avatarPath?:string
}