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
import { ModelsService } from './models.service'
import { Auth } from '../auth/decorators/auth.decorator'
import { ModelDto } from './dto/model.dto'

@Controller('models')
export class ModelsController {
	constructor(private readonly modelsService: ModelsService) {}

	@Get()
	async getAll() {
		return this.modelsService.getAll()
	}

	@Get('by-slug/:slug')
	async getBySlug(@Param('slug') slug: string) {
		return this.modelsService.bySlug(slug)
	}
	@Get('by-slugAll/:slugAll')
	async getBySlugAll(@Param('slugAll') slugAll: string) {
		return this.modelsService.bySlugAll(slugAll)
	}

	@Get(':id')
	@Auth()
	async getById(@Param('id') id: string) {
		return this.modelsService.byId(+id)
	}

	@HttpCode(200)
	@Auth()
	@Post()
	async create() {
		return this.modelsService.create()
	}

	@UsePipes(new ValidationPipe())
	@HttpCode(200)
	@Auth()
	@Put(':id')
	async update(@Param('id') id: string, @Body() dto: ModelDto) {
		return this.modelsService.update(+id, dto)
	}

	@HttpCode(200)
	@Auth()
	@Delete(':id')
	async delete(@Param('id') id: string) {
		return this.modelsService.delete(+id)
	}
}
