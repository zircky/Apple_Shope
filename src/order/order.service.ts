import { Injectable } from '@nestjs/common'
import { PrismaService } from '../prisma.service'
import { productReturn0bject } from '../product/return-product.object'

@Injectable()
export class OrderService {
	constructor(private prisma: PrismaService) {}

	async getAll() {
		return this.prisma.order.findMany({
			orderBy: { createdAt: 'desc' },
			include: {
				items: {
					include: {
						product: {
							select: productReturn0bject
						}
					}
				}
			}
		})
	}

	async getByUserId(userId: number) {
		return this.prisma.order.findMany({
			where: { userId },
			orderBy: { createdAt: 'desc' },
			include: {
				items: {
					include: {
						product: {
							select: productReturn0bject
						}
					}
				}
			}
		})
	}

	// async placeOrder(dto: OrderDto, userId: number){
	// 	const order = await this.prisma.order.create({
	// 		data: {
	// 			status: dto.status,
	// 			items: {
	// 				create: dto.items
	// 			},
	// 			user: {
	// 				connect: {
	// 					id: userId
	// 				}
	// 			}
	// 		}
	// 	})
	// 	return order
	// }
}
