import React from 'react'

export const ImagesSlideshowVertical = () => {
  return (
		<div className="row g-1">
			<div className="swiper-container gallery-thumbs-vertical col-2 pb-4">
				<div className="swiper-wrapper">
					<div className="swiper-slide bg-light bg-light h-auto">
						<picture>
							<img
								className="img-fluid mx-auto d-table"
								src={
									new URL(
										`/static/assets/images/products/product-5.jpg`,
										api_endpoint
									).href
								}
							/>
						</picture>
					</div>
					<div className="swiper-slide bg-light bg-light h-auto">
						<picture>
							<img
								className="img-fluid mx-auto d-table"
								src={
									new URL(
										`/static/assets/images/products/product-5b.jpg`,
										api_endpoint
									).href
								}
							/>
						</picture>
					</div>
					<div className="swiper-slide bg-light bg-light h-auto">
						<picture>
							<img
								className="img-fluid mx-auto d-table"
								src={
									new URL(
										`/static/assets/images/products/product-5c.jpg`,
										api_endpoint
									).href
								}
							/>
						</picture>
					</div>
				</div>
			</div>
			<div className="swiper-container gallery-top-vertical col-10">
				<div className="swiper-wrapper">
					<div className="swiper-slide bg-white h-auto">
						<picture>
							<img
								className="img-fluid d-table mx-auto"
								src={
									new URL(
										`/static/assets/images/products/product-5.jpg`,
										api_endpoint
									).href
								}
								data-zoomable
							/>
						</picture>
					</div>
					<div className="swiper-slide bg-white h-auto">
						<picture>
							<img
								className="img-fluid d-table mx-auto"
								src={
									new URL(
										`/static/assets/images/products/product-5b.jpg`,
										api_endpoint
									).href
								}
								data-zoomable
							/>
						</picture>
					</div>
					<div className="swiper-slide bg-white h-auto">
						<picture>
							<img
								className="img-fluid d-table mx-auto"
								src={
									new URL(
										`/static/assets/images/products/product-5c.jpg`,
										api_endpoint
									).href
								}
								data-zoomable
							/>
						</picture>
					</div>
				</div>
			</div>
		</div>
  );
}
