import React, { useContext, useEffect, useRef } from "react";
import { GlobalContext } from "../../GlobalContext";
import { ListingCard } from "../category/listing-cards/ListingCard";
import { SwiperLinkedCarouselSmall } from "./SwiperLinkedCarouselSmall";
export const SwiperLinkedCarouselLarge = () => {
	var { products } = useContext(GlobalContext).global_context_state;
	var swiper_linked_carousel_large = useRef();
	useEffect(() => {
		var options = {
			spaceBetween: 0,
			slidesPerView: 1,
			roundLengths: true,
			loop: true,
			controller: {
				control: SwiperLinkedCarouselSmall,
			},
		};
		Object.assign(swiper_linked_carousel_large.current, options);
		swiper_linked_carousel_large.current.initialize();
	}, []);

	return (
		<swiper-container
			init="false"
			ref={swiper_linked_carousel_large}
			class="swiper-container h-100 swiper-linked-carousel-large"
		>
			<div className="swiper-wrapper h-100">
				<div className="swiper-slide">
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
				</div>

				<div className="swiper-slide">
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
				</div>

				<div className="swiper-slide">
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
				</div>
			</div>
		</swiper-container>
	);
};
