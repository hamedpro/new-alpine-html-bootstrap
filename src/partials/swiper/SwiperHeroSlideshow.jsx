import React from "react";

export const SwiperHeroSlideshow = () => {
	return (
		<div
			className="swiper-container overflow-hidden bg-light w-100 h-100"
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
			<div className="swiper-wrapper">
				<div className="swiper-slide position-relative">
					<div
						className="w-100 h-100 bg-img-cover animation-move bg-pos-center-center"
						style={{
							backgroundImage: `url(${
								new URL(
									`/static/assets/images/slideshows/slideshow-1.jpg`,
									api_endpoint
								).href
							})`,
						}}
					></div>
				</div>
				<div className="swiper-slide position-relative">
					<div
						className="w-100 h-100 bg-img-cover animation-move bg-pos-center-center"
						style={{
							backgroundImage: `url(${
								new URL(
									`/static/assets/images/slideshows/slideshow-2.jpg`,
									api_endpoint
								).href
							})`,
						}}
					></div>
				</div>
				<div className="swiper-slide position-relative">
					<div
						className="w-100 h-100 bg-img-cover animation-move bg-pos-center-center"
						style={{
							backgroundImage: `url(${
								new URL(
									`/static/assets/images/slideshows/slideshow-3.jpg`,
									api_endpoint
								).href
							})`,
						}}
					></div>
				</div>
			</div>
		</div>
	);
};
