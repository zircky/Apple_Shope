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
import { CommunicationOptionsService } from './communication-options.service'
import { Auth } from '../auth/decorators/auth.decorator'
import { StorageCapacityDto } from '../storage-capacity/dto/storage-capacity.dto'

@Controller('communication-options')
export class CommunicationOptionsController {
	constructor(
		private readonly communicationOptionsService: CommunicationOptionsService
	) {}

	@Get()
	async getAll() {
		return this.communicationOptionsService.getAll()
	}

	@Get('by-slug/:slug')
	async getBySlug(@Param('slug') slug: string) {
		return this.communicationOptionsService.bySlug(slug)
	}

	@Get(':id')
	@Auth()
	async getById(@Param('id') id: string) {
		return this.communicationOptionsService.byId(+id)
	}

	@HttpCode(200)
	@Auth()
	@Post()
	async create() {
		return this.communicationOptionsService.create()
	}

	@UsePipes(new ValidationPipe())
	@HttpCode(200)
	@Auth()
	@Put(':id')
	async update(@Param('id') id: string, @Body() dto: StorageCapacityDto) {
		return this.communicationOptionsService.update(+id, dto)
	}

	@HttpCode(200)
	@Auth()
	@Delete(':id')
	async delete(@Param('id') id: string) {
		return this.communicationOptionsService.delete(+id)
	}
}
