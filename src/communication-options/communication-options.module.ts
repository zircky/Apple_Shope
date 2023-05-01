import { Module } from '@nestjs/common';
import { CommunicationOptionsService } from './communication-options.service';
import { CommunicationOptionsController } from './communication-options.controller';

@Module({
  controllers: [CommunicationOptionsController],
  providers: [CommunicationOptionsService]
})
export class CommunicationOptionsModule {}
