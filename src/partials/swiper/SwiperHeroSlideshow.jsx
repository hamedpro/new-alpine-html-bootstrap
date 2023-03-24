import React from "react";

export const SwiperHeroSlideshow = () => {
	return (
		<swiper-container
			slides-per-view="1"
			speed="1500"
			loop="true"
			effect="fade"
			autoplay-delay="5000"
			class="overflow-hidden bg-light w-100 h-100 swiper-container"
		>
			<div className="swiper-wrapper">
				<swiper-slide class="position-relative swiper-slide">
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
				</swiper-slide>

				<swiper-slide class="swiper-slide position-relative">
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
				</swiper-slide>

				<swiper-slide class="swiper-slide position-relative">
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
				</swiper-slide>
			</div>
		</swiper-container>
	);
};
