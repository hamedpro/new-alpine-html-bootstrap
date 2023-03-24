import React, { useRef } from "react";
import mediumZoom from "medium-zoom";
import { useEffect } from "react";
export const ImagesSlideshowVertical = ({ product_document }) => {
	var gallery_thumbs_vertical_swiper_container = useRef();
	var gallery_top_vertical_swiper_container = useRef();
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
	useEffect(() => {
		var options = {
			spaceBetween: 5,
			slidesPerView: "auto",
			direction: "vertical",
		};
		Object.assign(gallery_thumbs_vertical_swiper_container.current, options);
		gallery_thumbs_vertical_swiper_container.current.initialize();

		options = {
			spaceBetween: 0,
			effect: "fade",
			thumbs: {
				swiper: galleryThumbs,
			},
		};
		Object.assign(gallery_top_vertical_swiper_container.current, options);
		gallery_top_vertical_swiper_container.current.initialize();
	}, []);
	return (
		<div className="row g-1">
			<swiper-container
				init="false"
				ref={gallery_thumbs_vertical_swiper_container}
				class="gallery-thumbs-vertical swiper-container col-2 pb-4"
			>
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
			</swiper-container>

			<swiper-container
				init="false"
				ref={gallery_top_vertical_swiper_container}
				class="swiper-container gallery-top-vertical col-10"
			>
				<div className="swiper-wrapper">
					{product_document.image_files_ids.map((i) => (
						<swiper-slide class="swiper-slide bg-white h-auto" key={i}>
							<picture>
								<img
									className="img-fluid d-table mx-auto"
									src={new URL(`/files/${i}`, api_endpoint).href}
									data-zoomable
								/>
							</picture>
						</swiper-slide>
					))}
				</div>
			</swiper-container>
		</div>
	);
};
