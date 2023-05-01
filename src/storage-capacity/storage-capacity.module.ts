import { Module } from '@nestjs/common'
import { StorageCapacityService } from './storage-capacity.service'
import { StorageCapacityController } from './storage-capacity.controller'
import { PrismaService } from '../prisma.service'

@Module({
	controllers: [StorageCapacityController],
	providers: [StorageCapacityService, PrismaService]
})
export class StorageCapacityModule {}
