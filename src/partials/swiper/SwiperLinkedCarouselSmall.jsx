import React, { useContext, useEffect, useRef } from "react";
import { GlobalContext } from "../../GlobalContext";
import { ListingCard } from "../category/listing-cards/ListingCard";

export const SwiperLinkedCarouselSmall = ({ swiper_container_ref }) => {
	var { products } = useContext(GlobalContext).global_context_state;

	return (
		<swiper-container
			init="false"
			ref={swiper_container_ref}
			class="swiper-container swiper-linked-carousel-small"
		>
			<div className="swiper-pagination-blocks mb-4">
				<div className="swiper-pagination-custom"></div>
			</div>
			{[1, 2, 3].map((i) => (
				<swiper-slide key={i} className="swiper-slide overflow-hidden">
					{products.length !== 0 && <ListingCard {...products[0]} />}
				</swiper-slide>
			))}
		</swiper-container>
	);
};
