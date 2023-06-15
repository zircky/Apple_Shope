import { applyDecorators, UseGuards } from '@nestjs/common'
import { TypeRole } from '../auth.interface'
import { JwtAuthGuard } from '../guards/jwt_guard'
import { OnlyAdminGuard } from '../guards/admin.guard'

export const Auth = (rols: TypeRole = 'user') =>
	applyDecorators(rols === 'admin'
		? UseGuards(JwtAuthGuard, OnlyAdminGuard)
		: UseGuards(JwtAuthGuard))

