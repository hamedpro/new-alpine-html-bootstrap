import React from "react";
import { ListingCard } from "../category/listing-cards/ListingCard";

export const SwiperLinkedCarouselSmall = () => {
	return (
		<div className="swiper-container swiper-linked-carousel-small">
			<div className="swiper-pagination-blocks mb-4">
				<div className="swiper-pagination-custom"></div>
			</div>

			<div className="swiper-wrapper">
				<div className="swiper-slide overflow-hidden">
					<ListingCard
						{...{
							_id: "640d8126eef774a41003d931",
							title: "Mens Sherpa Hoodie",
							brand: "Timberland",
							price: "150.00",
							currency: "$",
							options: "Availble in 4 colours, 7 sizes",
							"sale-price": "599.55",
							"discount-percentage": "-25%",
							"review-count": "4.4 (1289)",
							"review-width": "60%",
							image_file_id: "16785602512517061",
							hover_image_file_id: "16785602512517061",
						}}
					/>
				</div>

				<div className="swiper-slide overflow-hidden">
					<ListingCard
						{...{
							_id: "640d8126eef774a41003d931",
							title: "Mens Sherpa Hoodie",
							brand: "Timberland",
							price: "150.00",
							currency: "$",
							options: "Availble in 4 colours, 7 sizes",
							"sale-price": "599.55",
							"discount-percentage": "-25%",
							"review-count": "4.4 (1289)",
							"review-width": "60%",
							image_file_id: "16785602512517061",
							hover_image_file_id: "16785602512517061",
						}}
					/>
				</div>

				<div className="swiper-slide overflow-hidden">
					<ListingCard
						{...{
							_id: "640d8126eef774a41003d931",
							title: "Mens Sherpa Hoodie",
							brand: "Timberland",
							price: "150.00",
							currency: "$",
							options: "Availble in 4 colours, 7 sizes",
							"sale-price": "599.55",
							"discount-percentage": "-25%",
							"review-count": "4.4 (1289)",
							"review-width": "60%",
							image_file_id: "16785602512517061",
							hover_image_file_id: "16785602512517061",
						}}
					/>
				</div>
			</div>
		</div>
	);
};
