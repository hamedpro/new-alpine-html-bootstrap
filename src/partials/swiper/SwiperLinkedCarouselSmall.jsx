import React from "react";
import { ListingCard } from "../category/listing-cards/ListingCard";

export const SwiperLinkedCarouselSmall = () => {
	return (
		<div class="swiper-container swiper-linked-carousel-small">
			<div class="swiper-pagination-blocks mb-4">
				<div class="swiper-pagination-custom"></div>
			</div>

			<div class="swiper-wrapper">
				<div class="swiper-slide overflow-hidden">
					<ListingCard
						img="{{webRoot}}/assets/images/products/product-12.jpg"
						title="Mens Outdoors T-Shirt"
						options="Availble in 4 colours, 7 sizes"
						currency="$"
						price="1699.87"
						review-width="80%"
						review-count="4.7 (1669)"
					/>
				</div>

				<div class="swiper-slide overflow-hidden">
					<ListingCard
						img="{{webRoot}}/assets/images/products/product-1.jpg"
						title="Mens Flyroam Sneakers"
						options="Availble in 4 colours, 7 sizes"
						currency="$"
						price="1699.87"
						review-width="80%"
						review-count="4.7 (1669)"
					/>
				</div>

				<div class="swiper-slide overflow-hidden">
					<ListingCard
						img="{{webRoot}}/assets/images/products/product-13.jpg"
						title="Mens Flyroam Sneakers"
						options="Availble in 4 colours, 7 sizes"
						currency="$"
						price="1699.87"
						review-width="80%"
						review-count="4.7 (1669)"
					/>
				</div>
			</div>
		</div>
	);
};
