import { Module } from '@nestjs/common'
import { CommunicationOptionsService } from './communication-options.service'
import { CommunicationOptionsController } from './communication-options.controller'
import { PrismaService } from '../prisma.service'

@Module({
	controllers: [CommunicationOptionsController],
	providers: [CommunicationOptionsService, PrismaService]
})
export class CommunicationOptionsModule {}
