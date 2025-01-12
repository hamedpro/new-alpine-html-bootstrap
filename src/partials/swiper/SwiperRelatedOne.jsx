import React, { useContext, useEffect, useRef } from "react";
import { GlobalContext } from "../../GlobalContext";
import { ListingCardFive } from "../category/listing-cards/ListingCardFive";
//this component has not been used anywhere so make
//it work when you want to use it for the first time
export const SwiperRelatedOne = ({ shoes }) => {
	var CategoryFour = useContext(GlobalContext).global_context_state.category_four;
	var swiper_container = useRef();
	useEffect(() => {
		var options = {
			spaceBetween: 10,
			loop: true,
			navigation: {
				nextEl: ".swiper-next",
				prevEl: ".swiper-prev",
			},
			pagination: {
				el: ".swiper-pagination",
				clickable: true,
			},
			breakpoints: {
				300: {
					slidesPerView: 2,
				},
				700: {
					slidesPerView: 3,
				},
				999: {
					slidesPerView: 4,
				},
				1024: {
					slidesPerView: 5,
				},
			},
		};
		Object.assign(swiper_container.current, options);
		swiper_container.current.initialize();
	}, []);
	return (
		<swiper-container class="swiper-container" ref={swiper_container}>
			<div className="swiper-wrapper mb-5">
				{CategoryFour &&
					shoes.entries.map((i) => (
						<swiper-slide class="swiper-slide align-self-stretch bg-transparent h-auto">
							<ListingCardFive {...i} />
						</swiper-slide>
					))}
			</div>

			<div className="swiper-pagination bottom-0"></div>

			<div className="swiper-prev top-50  start-0 z-index-30 cursor-pointer transition-all bg-white px-3 py-4 position-absolute z-index-30 top-50 start-0 mt-n8 d-flex justify-content-center align-items-center opacity-50-hover">
				<i className="ri-arrow-left-s-line ri-lg"></i>
			</div>
			<div className="swiper-next top-50 end-0 z-index-30 cursor-pointer transition-all bg-white px-3 py-4 position-absolute z-index-30 top-50 end-0 mt-n8 d-flex justify-content-center align-items-center opacity-50-hover">
				<i className="ri-arrow-right-s-line ri-lg"></i>
			</div>
		</swiper-container>
	);
};
