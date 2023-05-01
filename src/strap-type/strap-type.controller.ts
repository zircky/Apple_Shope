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
import { StrapTypeService } from './strap-type.service'
import { Auth } from '../auth/decorators/auth.decorator'
import { StrapTypeDto } from './dto/strap-type.dto'

@Controller('strap-type')
export class StrapTypeController {
	constructor(private readonly strapTypeService: StrapTypeService) {}

	@Get()
	async getAll() {
		return this.strapTypeService.getAll()
	}

	@Get('by-slug/:slug')
	async getBySlug(@Param('slug') slug: string) {
		return this.strapTypeService.bySlug(slug)
	}

	@Get(':id')
	@Auth()
	async getById(@Param('id') id: string) {
		return this.strapTypeService.byId(+id)
	}

	@HttpCode(200)
	@Auth()
	@Post()
	async create() {
		return this.strapTypeService.create()
	}

	@UsePipes(new ValidationPipe())
	@HttpCode(200)
	@Auth()
	@Put(':id')
	async update(@Param('id') id: string, @Body() dto: StrapTypeDto) {
		return this.strapTypeService.update(+id, dto)
	}

	@HttpCode(200)
	@Auth()
	@Delete(':id')
	async delete(@Param('id') id: string) {
		return this.strapTypeService.delete(+id)
	}
}
