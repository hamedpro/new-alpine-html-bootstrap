import React, { useContext, useEffect, useRef } from "react";
import { GlobalContext } from "../../GlobalContext";
import { ListingCard } from "../category/listing-cards/ListingCard";
import { SwiperLinkedCarouselLarge } from "./SwiperLinkedCarouselLarge";

export const SwiperLinkedCarouselSmall = () => {
	var { products } = useContext(GlobalContext).global_context_state;
	var swiper_linked_carousel_small_swiper_container = useRef();
	useEffect(() => {
		var options = {
			spaceBetween: 0,
			slidesPerView: 1,
			roundLengths: true,
			loop: true,
			navigation: {
				nextEl: ".swiper-next-linked",
				prevEl: ".swiper-prev-linked",
			},
			pagination: {
				el: ".swiper-pagination-custom",
			},
			controller: {
				control: SwiperLinkedCarouselLarge,
			},
		};
		Object.assign(swiper_linked_carousel_small_swiper_container.current, options);
		swiper_linked_carousel_small_swiper_container.current.initialize();
	}, []);
	if (products === undefined) return <h1>در حال بارگذاری محصولات ...</h1>;
	return (
		<swiper-container
			init="false"
			ref={swiper_linked_carousel_small_swiper_container}
			class="swiper-container swiper-linked-carousel-small"
		>
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
		</swiper-container>
	);
};
