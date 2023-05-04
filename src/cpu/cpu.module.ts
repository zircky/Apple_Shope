import { Module } from '@nestjs/common'
import { CpuService } from './cpu.service'
import { CpuController } from './cpu.controller'
import { PrismaService } from '../prisma.service'

@Module({
	controllers: [CpuController],
	providers: [CpuService, PrismaService]
})
export class CpuModule {}
