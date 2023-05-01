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
import { StorageCapacityService } from './storage-capacity.service'
import { Auth } from 'src/auth/decorators/auth.decorator'
import { StorageCapacityDto } from './dto/storage-capacity.dto'

@Controller('storage-capacity')
export class StorageCapacityController {
	constructor(
		private readonly storageCapacityService: StorageCapacityService
	) {}

	@Get()
	async getAll() {
		return this.storageCapacityService.getAll()
	}

	@Get('by-slug/:slug')
	async getBySlug(@Param('slug') slug: string) {
		return this.storageCapacityService.bySlug(slug)
	}

	@Get(':id')
	@Auth()
	async getById(@Param('id') id: string) {
		return this.storageCapacityService.byId(+id)
	}

	@HttpCode(200)
	@Auth()
	@Post()
	async create() {
		return this.storageCapacityService.create()
	}

	@UsePipes(new ValidationPipe())
	@HttpCode(200)
	@Auth()
	@Put(':id')
	async update(@Param('id') id: string, @Body() dto: StorageCapacityDto) {
		return this.storageCapacityService.update(+id, dto)
	}

	@HttpCode(200)
	@Auth()
	@Delete(':id')
	async delete(@Param('id') id: string) {
		return this.storageCapacityService.delete(+id)
	}
}
