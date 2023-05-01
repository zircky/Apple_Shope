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
import { DiagonalService } from './diagonal.service'
import { DiagonalDto } from './dto/diagonal.dto'
import { Auth } from '../auth/decorators/auth.decorator'

@Controller('diagonal')
export class DiagonalController {
	constructor(private readonly diagonalService: DiagonalService) {}

	@Get()
	async getAll() {
		return this.diagonalService.getAll()
	}

	@Get('by-slug/:slug')
	async getBySlug(@Param('slug') slug: string) {
		return this.diagonalService.bySlug(slug)
	}

	@Get(':id')
	@Auth()
	async getById(@Param('id') id: string) {
		return this.diagonalService.byId(+id)
	}

	@HttpCode(200)
	@Auth()
	@Post()
	async create() {
		return this.diagonalService.create()
	}

	@UsePipes(new ValidationPipe())
	@HttpCode(200)
	@Auth()
	@Put(':id')
	async update(@Param('id') id: string, @Body() dto: DiagonalDto) {
		return this.diagonalService.update(+id, dto)
	}

	@HttpCode(200)
	@Auth()
	@Delete(':id')
	async delete(@Param('id') id: string) {
		return this.diagonalService.delete(+id)
	}
}
