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
import { CpuService } from './cpu.service'
import { Auth } from '../auth/decorators/auth.decorator'
import { CpuDto } from './dto/cpu.dto'

@Controller('cpu')
export class CpuController {
	constructor(private readonly cpuService: CpuService) {}

	@Get()
	async getAll() {
		return this.cpuService.getAll()
	}

	@Get('by-slug/:slug')
	async getBySlug(@Param('slug') slug: string) {
		return this.cpuService.bySlug(slug)
	}

	@Get(':id')
	@Auth()
	async getById(@Param('id') id: string) {
		return this.cpuService.byId(+id)
	}

	@HttpCode(200)
	@Auth()
	@Post()
	async create() {
		return this.cpuService.create()
	}

	@UsePipes(new ValidationPipe())
	@HttpCode(200)
	@Auth()
	@Put(':id')
	async update(@Param('id') id: string, @Body() dto: CpuDto) {
		return this.cpuService.update(+id, dto)
	}

	@HttpCode(200)
	@Auth()
	@Delete(':id')
	async delete(@Param('id') id: string) {
		return this.cpuService.delete(+id)
	}
}
