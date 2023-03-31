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
					<div className="col-12 col-md-6">
						<ListingCard {...products[0]} />
					</div>
					<div className="col-12 col-md-6">
						<ListingCard {...products[0]} />
					</div>
					<div className="col-12 col-md-6">
						<ListingCard {...products[0]} />
					</div>
					<div className="col-12 col-md-6">
						<ListingCard {...products[0]} />
					</div>
				</div>
			</swiper-slide>

			<swiper-slide className="swiper-slide">
				<div className="row g-3">
					<div className="col-12 col-md-6">
						<ListingCard {...products[0]} />
					</div>
					<div className="col-12 col-md-6">
						<ListingCard {...products[0]} />
					</div>
					<div className="col-12 col-md-6">
						<ListingCard {...products[0]} />
					</div>
					<div className="col-12 col-md-6">
						<ListingCard {...products[0]} />
					</div>
				</div>
			</swiper-slide>

			<swiper-slide className="swiper-slide">
				<div className="row g-3">
					<div className="col-12 col-md-6">
						<ListingCard {...products[0]} />
					</div>
					<div className="col-12 col-md-6">
						<ListingCard {...products[0]} />
					</div>
					<div className="col-12 col-md-6">
						<ListingCard {...products[0]} />
					</div>
					<div className="col-12 col-md-6">
						<ListingCard {...products[0]} />
					</div>
				</div>
			</swiper-slide>
		</swiper-container>
	);
};
