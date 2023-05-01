import { Module } from '@nestjs/common';
import { StrapTypeService } from './strap-type.service';
import { StrapTypeController } from './strap-type.controller';

@Module({
  controllers: [StrapTypeController],
  providers: [StrapTypeService]
})
export class StrapTypeModule {}
