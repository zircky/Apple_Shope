import { Module } from '@nestjs/common';
import { DiagonalService } from './diagonal.service';
import { DiagonalController } from './diagonal.controller';

@Module({
  controllers: [DiagonalController],
  providers: [DiagonalService]
})
export class DiagonalModule {}
