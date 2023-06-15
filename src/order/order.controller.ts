import { Controller, Get } from '@nestjs/common'
import { OrderService } from './order.service'
import { CurrentUser } from '../auth/decorators/user.decorator'
import { Auth } from '../auth/decorators/auth.decorator'

@Controller('orders')
export class OrderController {
	constructor(private readonly orderService: OrderService) {}

	@Get()
	@Auth('admin')
	getAll() {
		return this.orderService.getAll()
	}
	@Get('by-user')
	@Auth()
	getByUserId(@CurrentUser('id') userId: number) {
		return this.orderService.getByUserId(userId)
	}

	// @UsePipes(new ValidationPipe())
	// @HttpCode(200)
	// @Post()
	// @Auth()
	// placeOrder(@Body() dto: OrderDto, @CurrentUser('id') userId: number) {
	// 	return this.orderService.placeOrder(dto, userId)
	// }
}
