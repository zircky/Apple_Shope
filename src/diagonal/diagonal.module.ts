import { Module } from '@nestjs/common'
import { DiagonalService } from './diagonal.service'
import { DiagonalController } from './diagonal.controller'
import { PrismaService } from '../prisma.service'

@Module({
	controllers: [DiagonalController],
	providers: [DiagonalService, PrismaService]
})
export class DiagonalModule {}
