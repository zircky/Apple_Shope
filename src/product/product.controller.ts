import {
	Body,
	Controller,
	Delete,
	Get,
	HttpCode,
	Param,
	Post,
	Put,
	Query,
	UsePipes,
	ValidationPipe
} from '@nestjs/common'
import { ProductService } from './product.service'
import { GetAllProductDto } from './dto/get-all.product.dto'
import { Auth } from '../auth/decorators/auth.decorator'
import { ProductDto } from './dto/product.dto'

@Controller('products')
export class ProductController {
	constructor(private readonly productService: ProductService) {}

	@UsePipes(new ValidationPipe())
	@Get()
	async getAll(@Query() queryDto: GetAllProductDto) {
		return this.productService.getAll(queryDto)
	}
	@Get('/similar/:id')
	async getSimilar(@Param('id') id: string) {
		return this.productService.getSimilar(+id)
	}

	@Get('by-slug/:slug')
	async getProductBySlug(@Param('slug') slug: string) {
		return this.productService.bySlug(slug)
	}
	@Get('by-category/:categorySlug')
	async getProductByCategory(@Param('categorySlug') categorySlug: string) {
		return this.productService.byCategory(categorySlug)
	}
	@Get('by-storageCapacity/:storageCapacitySlug')
	async getProductByStorageCapacitySlug(
		@Param('storageCapacitySlug') storageCapacitySlug: string
	) {
		return this.productService.byStorageCapacity(storageCapacitySlug)
	}
	@Get('by-colors/:colorsSlug')
	async getProductByColorsSlug(@Param('colorsSlug') colorsSlug: string) {
		return this.productService.byColors(colorsSlug)
	}
	@Get('by-models/:modelsSlug')
	async getProductByModelsSlug(@Param('modelsSlug') modelsSlug: string) {
		return this.productService.byModels(modelsSlug)
	}
	@Get('by-communicationOptions/:communicationOptionsSlug')
	async getProductByCommunicationOptionsSlug(
		@Param('communicationOptionsSlug') communicationOptionsSlug: string
	) {
		return this.productService.byCommunicationOptions(communicationOptionsSlug)
	}
	@Get('by-cpu/:cpuSlug')
	async getProductByCPUSlug(@Param('cpuSlug') cpuSlug: string) {
		return this.productService.byCPU(cpuSlug)
	}
	@Get('by-gpu/:gpuSlug')
	async getProductByGPUSlug(@Param('gpuSlug') gpuSlug: string) {
		return this.productService.byGPU(gpuSlug)
	}
	@Get('by-diagonal/:diagonalSlug')
	async getProductByDiagonalSlug(@Param('diagonalSlug') diagonalSlug: string) {
		return this.productService.byDiagonal(diagonalSlug)
	}
	@Get('by-size/:sizeSlug')
	async getProductBySizeSlug(@Param('sizeSlug') sizeSlug: string) {
		return this.productService.bySize(sizeSlug)
	}
	@Get('by-strapType/:strapTypeSlug')
	async getProductByStrapTypeSlug(
		@Param('strapTypeSlug') strapTypeSlug: string
	) {
		return this.productService.byStrapType(strapTypeSlug)
	}

	@UsePipes(new ValidationPipe())
	@HttpCode(200)
	@Auth('admin')
	@Post()
	async createProduct() {
		return this.productService.create()
	}

	@UsePipes(new ValidationPipe())
	@HttpCode(200)
	@Put(':id')
	@Auth('admin')
	async updateProduct(@Param('id') id: string, @Body() dto: ProductDto) {
		return this.productService.update(+id, dto)
	}

	@HttpCode(200)
	@Delete(':id')
	@Auth('admin')
	async deleteProduct(@Param('id') id: string) {
		return this.productService.delete(+id)
	}

	@Get(':id')
	@Auth('admin')
	async getProduct(@Param('id') id: string) {
		return this.productService.byId(+id)
	}
}
