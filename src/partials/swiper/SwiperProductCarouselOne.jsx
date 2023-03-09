import React from 'react'
import { ListingCard } from "../category/listing-cards/ListingCard";

export const SwiperProductCarouselOne = ({ entries }) => {
	return (
		<div
			class="swiper-container overflow-visible"
			data-swiper
			data-options='{
    "spaceBetween": 25,
    "cssMode": true,
    "navigation": {
      "nextEl": ".swiper-next",
      "prevEl": ".swiper-prev"
    },  
    "breakpoints": {
      "576": {
        "slidesPerView": 1
      },
      "768": {
        "slidesPerView": 2
      },
      "992": {
        "slidesPerView": 3
      },
      "1200": {
        "slidesPerView": 4
      }            
    }
  }'
		>
			<div class="swiper-wrapper pb-1 pe-1">
				{entries.map((i) => (
					<div class="swiper-slide d-flex h-auto">
						<ListingCard {...i} />
					</div>
				))}

				<div class="swiper-slide d-flex h-auto justify-content-center align-items-center">
					<a
						href="{{webRoot}}/category.html"
						class="d-flex text-decoration-none flex-column justify-content-center align-items-center"
					>
						<span class="btn btn-dark btn-icon mb-3">
							<i class="ri-arrow-right-line ri-lg lh-1"></i>
						</span>
						<span class="lead fw-bolder">See All</span>
					</a>
				</div>
			</div>

			<div class="swiper-btn swiper-disabled-hide swiper-prev swiper-btn-side btn-icon bg-dark text-white ms-3 shadow-lg ms-n3">
				<i class="ri-arrow-left-s-line ri-lg"></i>
			</div>
			<div class="swiper-btn swiper-disabled-hide swiper-next swiper-btn-side swiper-btn-side-right btn-icon bg-dark text-white me-n3 shadow-lg">
				<i class="ri-arrow-right-s-line ri-lg"></i>
			</div>
		</div>
	);
};
