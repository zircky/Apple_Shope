import {
	BadRequestException,
	Injectable,
	NotFoundException
} from '@nestjs/common'
import { PrismaService } from '../prisma.service'
import { returnReviewObject } from '../review/return-review.object'
import { ReviewDto } from '../review/review.dto'
import { generateSlug } from '../utils/generate-slug'

@Injectable()
export class ReviewService {
	constructor(private prisma: PrismaService) {}
	async getAll() {
		return this.prisma.review.findMany({
			orderBy: {
				createdAt: 'desc'
			},
			select: returnReviewObject
		})}
	async create(userId: number, dto: ReviewDto, productId: number) {
		return this.prisma.review.create({
			data: {
				...dto,
				product: {
					connect: { id: productId }
				},
				rating: productId,
				user: {
					connect: {
						id: userId
					}
				}}})}
	async getAverageValueByProductId(productId: number) {
		return this.prisma.review
			.aggregate({
				where: { productId },
				_avg: { rating: true }
			})
			.then(data => data._avg)
	}
}
