import { Module } from '@nestjs/common'
import { ProductService } from './product.service'
import { ProductController } from './product.controller'
import { PrismaService } from '../prisma.service'
import { PaginationService } from '../pagination/pagination.service'
import { PaginationModule } from '../pagination/pagination.module'
import { CategoryModule } from '../category/category.module'

@Module({
	controllers: [ProductController],
	imports: [PaginationModule, CategoryModule],
	providers: [ProductService, PrismaService, PaginationService]
})
export class ProductModule {}
