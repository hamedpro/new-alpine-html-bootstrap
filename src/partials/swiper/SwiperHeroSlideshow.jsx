import React from "react";

export const SwiperHeroSlideshow = () => {
	return (
		<div
			class="swiper-container overflow-hidden bg-light w-100 h-100"
			data-swiper
			data-options='{
    "slidesPerView": 1,
    "speed": 1500,
    "loop": true,
    "effect": "fade",
    "autoplay": {
      "delay": 5000
    }
  }'
		>
			<div class="swiper-wrapper">
				<div class="swiper-slide position-relative">
					<div
						class="w-100 h-100 bg-img-cover animation-move bg-pos-center-center"
						style="background-image: url({{webRoot}}/assets/images/slideshows/slideshow-1.jpg);"
					></div>
				</div>
				<div class="swiper-slide position-relative">
					<div
						class="w-100 h-100 bg-img-cover animation-move bg-pos-center-center"
						style="background-image: url({{webRoot}}/assets/images/slideshows/slideshow-2.jpg);"
					></div>
				</div>
				<div class="swiper-slide position-relative">
					<div
						class="w-100 h-100 bg-img-cover animation-move bg-pos-center-center"
						style="background-image: url({{webRoot}}/assets/images/slideshows/slideshow-3.jpg);"
					></div>
				</div>
			</div>
		</div>
	);
};
