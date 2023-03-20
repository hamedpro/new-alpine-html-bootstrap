import React from "react";
import mediumZoom from "medium-zoom";
import { useEffect } from "react";
export const ImagesSlideshowVertical = ({ product_document }) => {
	useEffect(() => {
		function init_medium_zoom() {
			const zoomImgs = document.querySelectorAll("[data-zoomable]") || [];

			zoomImgs.forEach((img) => {
				const zoom = new mediumZoom(img, {
					margin: 30,
				});
			});
		}
		init_medium_zoom(); //todo make sure to destroy medium zoom instance at correct time
	}, []);
	return (
		<div className="row g-1">
			<div className="swiper-container gallery-thumbs-vertical col-2 pb-4">
				<div className="swiper-wrapper">
					{product_document.image_files_ids.map((i) => (
						<div className="swiper-slide bg-light bg-light h-auto" key={i}>
							<picture>
								<img
									className="img-fluid mx-auto d-table"
									src={new URL(`/files/${i}`, api_endpoint).href}
								/>
							</picture>
						</div>
					))}
				</div>
			</div>
			<div className="swiper-container gallery-top-vertical col-10">
				<div className="swiper-wrapper">
					{product_document.image_files_ids.map((i) => (
						<div className="swiper-slide bg-white h-auto" key={i}>
							<picture>
								<img
									className="img-fluid d-table mx-auto"
									src={new URL(`/files/${i}`, api_endpoint).href}
									data-zoomable
								/>
							</picture>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};
