import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import {PrismaService} from "./prisma.service";

import {ConfigModule} from "@nestjs/config";
import { UserModule } from './user/user.module';
import { ProductModule } from './product/product.module';
import { ReviewModule } from './review/review.module';
import { CategoryModule } from './category/category.module';
import { OrderModule } from './order/order.module';
import { StatisticsModule } from './statistics/statistics.module';
import { PaginationModule } from './pagination/pagination.module';
import { StorageCapacityModule } from './storage-capacity/storage-capacity.module';
import { ColorsModule } from './colors/colors.module';
import { ModelsModule } from './models/models.module';
import { CommunicationOptionsModule } from './communication-options/communication-options.module';
import { CpuModule } from './cpu/cpu.module';
import { GpuModule } from './gpu/gpu.module';
import { DiagonalModule } from './diagonal/diagonal.module';
import { SizeModule } from './size/size.module';
import { StrapTypeModule } from './strap-type/strap-type.module';


@Module({
  imports: [ConfigModule.forRoot(), AuthModule, UserModule, ProductModule, ReviewModule, CategoryModule, OrderModule, StatisticsModule, PaginationModule, StorageCapacityModule, ColorsModule, ModelsModule, CommunicationOptionsModule, CpuModule, GpuModule, DiagonalModule, SizeModule, StrapTypeModule],
  controllers: [],
  providers: [PrismaService],
})
export class AppModule {}
