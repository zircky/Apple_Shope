import {
	Body,
	Controller,
	Delete,
	Get,
	HttpCode,
	Param,
	Post,
	Put,
	UsePipes,
	ValidationPipe
} from '@nestjs/common'
import { GpuService } from './gpu.service'
import { Auth } from '../auth/decorators/auth.decorator'
import { GpuDto } from './dto/gpu.dto'

@Controller('gpu')
export class GpuController {
	constructor(private readonly gpuService: GpuService) {}

	@Get()
	async getAll() {
		return this.gpuService.getAll()
	}

	@Get('by-slug/:slug')
	async getBySlug(@Param('slug') slug: string) {
		return this.gpuService.bySlug(slug)
	}

	@Get(':id')
	@Auth()
	async getById(@Param('id') id: string) {
		return this.gpuService.byId(+id)
	}

	@HttpCode(200)
	@Auth()
	@Post()
	async create() {
		return this.gpuService.create()
	}

	@UsePipes(new ValidationPipe())
	@HttpCode(200)
	@Auth()
	@Put(':id')
	async update(@Param('id') id: string, @Body() dto: GpuDto) {
		return this.gpuService.update(+id, dto)
	}

	@HttpCode(200)
	@Auth()
	@Delete(':id')
	async delete(@Param('id') id: string) {
		return this.gpuService.delete(+id)
	}
}
