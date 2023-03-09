import React from 'react'

export const ImagesSlideshowVertical = () => {
  return (
		<div class="row g-1">
			<div class="swiper-container gallery-thumbs-vertical col-2 pb-4">
				<div class="swiper-wrapper">
					<div class="swiper-slide bg-light bg-light h-auto">
						<picture>
							<img
								class="img-fluid mx-auto d-table"
								src="{{webRoot}}/assets/images/products/product-5.jpg"
								alt="{{config.defaultImgAlt}}"
							/>
						</picture>
					</div>
					<div class="swiper-slide bg-light bg-light h-auto">
						<picture>
							<img
								class="img-fluid mx-auto d-table"
								src="{{webRoot}}/assets/images/products/product-5b.jpg"
								alt="{{config.defaultImgAlt}}"
							/>
						</picture>
					</div>
					<div class="swiper-slide bg-light bg-light h-auto">
						<picture>
							<img
								class="img-fluid mx-auto d-table"
								src="{{webRoot}}/assets/images/products/product-5c.jpg"
								alt="{{config.defaultImgAlt}}"
							/>
						</picture>
					</div>
				</div>
			</div>
			<div class="swiper-container gallery-top-vertical col-10">
				<div class="swiper-wrapper">
					<div class="swiper-slide bg-white h-auto">
						<picture>
							<img
								class="img-fluid d-table mx-auto"
								src="{{webRoot}}/assets/images/products/product-5.jpg"
								alt="{{config.defaultImgAlt}}"
								data-zoomable
							/>
						</picture>
					</div>
					<div class="swiper-slide bg-white h-auto">
						<picture>
							<img
								class="img-fluid d-table mx-auto"
								src="{{webRoot}}/assets/images/products/product-5b.jpg"
								alt="{{config.defaultImgAlt}}"
								data-zoomable
							/>
						</picture>
					</div>
					<div class="swiper-slide bg-white h-auto">
						<picture>
							<img
								class="img-fluid d-table mx-auto"
								src="{{webRoot}}/assets/images/products/product-5c.jpg"
								alt="{{config.defaultImgAlt}}"
								data-zoomable
							/>
						</picture>
					</div>
				</div>
			</div>
		</div>
  );
}
