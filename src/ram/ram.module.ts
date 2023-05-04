import { Module } from '@nestjs/common'
import { RamService } from './ram.service'
import { RamController } from './ram.controller'
import { PrismaService } from '../prisma.service'

@Module({
	controllers: [RamController],
	providers: [RamService, PrismaService]
})
export class RamModule {}
