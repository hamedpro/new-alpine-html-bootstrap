import React from 'react'
import CategoryFour from "../../data/category-four.json";
import { ListingCardFive } from "../category/listing-cards/ListingCardFive";
export const SwiperRelatedOne = ({ shoes }) => {
	return (
		<div
			class="swiper-container"
			data-swiper
			data-options='{
    "spaceBetween": 10,
    "loop": true,
    "navigation": {
      "nextEl": ".swiper-next",
      "prevEl": ".swiper-prev"
    },
    "pagination": {
      "el": ".swiper-pagination",
      "clickable": true
    },    
    "breakpoints": {
      "300": {
        "slidesPerView": 2
      },
      "700": {
        "slidesPerView": 3
      },       
      "999": {
        "slidesPerView": 4
      },
      "1024": {
        "slidesPerView": 5
      }
    }
  }'
		>
			<div class="swiper-wrapper mb-5">
				{CategoryFour &&
					shoes.entries.map((i) => (
						<div class="swiper-slide align-self-stretch bg-transparent h-auto">
							<ListingCardFive {...i} />
						</div>
					))}
			</div>

			<div class="swiper-pagination bottom-0"></div>

			<div class="swiper-prev top-50  start-0 z-index-30 cursor-pointer transition-all bg-white px-3 py-4 position-absolute z-index-30 top-50 start-0 mt-n8 d-flex justify-content-center align-items-center opacity-50-hover">
				<i class="ri-arrow-left-s-line ri-lg"></i>
			</div>
			<div class="swiper-next top-50 end-0 z-index-30 cursor-pointer transition-all bg-white px-3 py-4 position-absolute z-index-30 top-50 end-0 mt-n8 d-flex justify-content-center align-items-center opacity-50-hover">
				<i class="ri-arrow-right-s-line ri-lg"></i>
			</div>
		</div>
	);
};
