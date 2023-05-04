import { Module } from '@nestjs/common'
import { StrapTypeService } from './strap-type.service'
import { StrapTypeController } from './strap-type.controller'
import { PrismaService } from '../prisma.service'

@Module({
	controllers: [StrapTypeController],
	providers: [StrapTypeService, PrismaService]
})
export class StrapTypeModule {}
