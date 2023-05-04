import { Module } from '@nestjs/common'
import { GpuService } from './gpu.service'
import { GpuController } from './gpu.controller'
import { PrismaService } from '../prisma.service'

@Module({
	controllers: [GpuController],
	providers: [GpuService, PrismaService]
})
export class GpuModule {}
