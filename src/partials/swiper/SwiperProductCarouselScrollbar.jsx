import React, { Fragment, useEffect, useRef } from "react";
import { ListingCard } from "../category/listing-cards/ListingCard";

export const SwiperProductCarouselScrollbar = ({ products }) => {
	var swiper_container = useRef();
	useEffect(() => {
		var options = {
			spaceBetween: 25,
			cssMode: true,
			roundLengths: true,
			scrollbar: {
				el: ".swiper-scrollbar",
				hide: false,
				draggable: true,
			},
			navigation: {
				nextEl: ".swiper-next",
				prevEl: ".swiper-prev",
			},
			breakpoints: {
				576: {
					slidesPerView: 1,
				},
				768: {
					slidesPerView: 2,
				},
				992: {
					slidesPerView: 3,
				},
				1200: {
					slidesPerView: 4,
				},
			},
		};
		Object.assign(swiper_container.current, options);
		swiper_container.current.initialize();
	}, []);
	return (
		<swiper-container
			class="swiper-container overflow-visible"
			init="false"
			ref={swiper_container}
		>
			<div className="swiper-wrapper pb-5 pe-1">
				{products.map((i) => (
					<Fragment key={i._id}>
						<swiper-slide class="d-flex h-auto swiper-slide">
							<ListingCard {...i} />
						</swiper-slide>
					</Fragment>
				))}
				<swiper-slide class="swiper-slide d-flex h-auto justify-content-center align-items-center">
					<a
						href="/category"
						className="d-flex text-decoration-none flex-column justify-content-center align-items-center"
					>
						<span className="btn btn-dark btn-icon mb-3">
							<i className="ri-arrow-right-line ri-lg lh-1"></i>
						</span>
						<span className="lead fw-bolder">See All</span>
					</a>
				</swiper-slide>
			</div>

			<div className="swiper-btn  swiper-prev swiper-btn-side btn-icon bg-dark text-white ms-3 shadow-lg mt-n5 ms-n4">
				<i className="ri-arrow-left-s-line ri-lg"></i>
			</div>
			<div className="swiper-btn  swiper-next swiper-btn-side swiper-btn-side-right btn-icon bg-dark text-white me-n4 shadow-lg mt-n5">
				<i className="ri-arrow-right-s-line ri-lg"></i>
			</div>

			<div className="swiper-scrollbar"></div>
		</swiper-container>
	);
};
