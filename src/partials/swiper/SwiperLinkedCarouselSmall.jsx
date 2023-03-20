import React, { useContext } from "react";
import { GlobalContext } from "../../GlobalContext";
import { ListingCard } from "../category/listing-cards/ListingCard";

export const SwiperLinkedCarouselSmall = () => {
	var { products } = useContext(GlobalContext).global_context_state;
	if (products === undefined) return <h1>loading products ... </h1>;
	return (
		<div className="swiper-container swiper-linked-carousel-small">
			<div className="swiper-pagination-blocks mb-4">
				<div className="swiper-pagination-custom"></div>
			</div>

			<div className="swiper-wrapper">
				<div className="swiper-slide overflow-hidden">
					<ListingCard {...products[0]} />
				</div>

				<div className="swiper-slide overflow-hidden">
					<ListingCard {...products[0]} />
				</div>

				<div className="swiper-slide overflow-hidden">
					<ListingCard {...products[0]} />
				</div>
			</div>
		</div>
	);
};
