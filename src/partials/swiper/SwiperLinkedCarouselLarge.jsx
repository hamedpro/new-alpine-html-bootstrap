import React, { useContext, useEffect, useRef } from "react";
import { GlobalContext } from "../../GlobalContext";
import { ListingCard } from "../category/listing-cards/ListingCard";
export const SwiperLinkedCarouselLarge = ({ swiper_container_ref }) => {
	var { products } = useContext(GlobalContext).global_context_state;

	return (
		<swiper-container
			init="false"
			ref={swiper_container_ref}
			class="swiper-container h-100 swiper-linked-carousel-large"
		>
			<swiper-slide className="swiper-slide">
				<div className="row g-3">
					{[1, 2, 3, 4].map((i) => (
						<div key={i} className="col-12 col-md-6">
							{products.length !== 0 && <ListingCard {...products[0]} />}
						</div>
					))}
				</div>
			</swiper-slide>

			<swiper-slide className="swiper-slide">
				<div className="row g-3">
					{[1, 2, 3, 4].map((i) => (
						<div key={i} className="col-12 col-md-6">
							{products.length !== 0 && <ListingCard {...products[0]} />}
						</div>
					))}
				</div>
			</swiper-slide>

			<swiper-slide className="swiper-slide">
				<div className="row g-3">
					{[1, 2, 3, 4].map((i) => (
						<div key={i} className="col-12 col-md-6">
							{products.length !== 0 && <ListingCard {...products[0]} />}
						</div>
					))}
				</div>
			</swiper-slide>
		</swiper-container>
	);
};
