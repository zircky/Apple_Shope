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
import { ColorsService } from './colors.service'
import { Auth } from '../auth/decorators/auth.decorator'
import { ColorsDto } from './dto/color.dto'

@Controller('colors')
export class ColorsController {
	constructor(private readonly colorsService: ColorsService) {}
	@Get()
	async getAll() {
		return this.colorsService.getAll()
	}

	@Get('by-slug/:slug')
	async getBySlug(@Param('slug') slug: string) {
		return this.colorsService.bySlug(slug)
	}

	// @Get('by-colorCod/:colorCod')
	// async getByColorCod(@Param('colorCod') colorCod: string) {
	// 	return this.colorsService.byColorCod(colorCod)
	// }

	@Get(':id')
	@Auth()
	async getById(@Param('id') id: string) {
		return this.colorsService.byId(+id)
	}

	@HttpCode(200)
	@Auth()
	@Post()
	async create() {
		return this.colorsService.create()
	}

	@UsePipes(new ValidationPipe())
	@HttpCode(200)
	@Auth()
	@Put(':id')
	async update(@Param('id') id: string, @Body() dto: ColorsDto) {
		return this.colorsService.update(+id, dto)
	}

	@HttpCode(200)
	@Auth()
	@Delete(':id')
	async delete(@Param('id') id: string) {
		return this.colorsService.delete(+id)
	}
}
