import React, { useEffect } from "react";
import mediumZoom from "medium-zoom";
export const InstagramPhotos = () => {
	useEffect(() => {
		function init_medium_zoom() {
			const zoomImgs = document.querySelectorAll("[data-zoomable]") || [];

			zoomImgs.forEach((img) => {
				const zoom = new mediumZoom(img, {
					margin: 30,
				});
			});
		}
		init_medium_zoom(); //make sure to destroy medium zoom instance at correct time
	}, []);
	return (
		<div className="row g-2">
			<div className="d-none d-md-block col-md-4" data-aos="fade-in" data-aos-delay="150">
				<picture>
					<img
						className="img-fluid"
						src={
							new URL(`/static/assets/images/instagram/instagram-1.jpg`, api_endpoint)
								.href
						}
						data-zoomable
					/>
				</picture>
			</div>
			<div className="col-12 col-md-8" data-aos="fade-in" data-aos-delay="300">
				<div className="row g-2">
					<div className="col-3">
						<picture>
							<img
								className="img-fluid"
								src={
									new URL(
										`/static/assets/images/instagram/instagram-2.jpg`,
										api_endpoint
									).href
								}
								data-zoomable
							/>
						</picture>
					</div>
					<div className="col-3">
						<picture>
							<img
								className="img-fluid"
								src={
									new URL(
										`/static/assets/images/instagram/instagram-3.jpg`,
										api_endpoint
									).href
								}
								data-zoomable
							/>
						</picture>
					</div>
					<div className="col-3">
						<picture>
							<img
								className="img-fluid"
								src={
									new URL(
										`/static/assets/images/instagram/instagram-4.jpg`,
										api_endpoint
									).href
								}
								data-zoomable
							/>
						</picture>
					</div>
					<div className="col-3">
						<picture>
							<img
								className="img-fluid"
								src={
									new URL(
										`/static/assets/images/instagram/instagram-5.jpg`,
										api_endpoint
									).href
								}
								data-zoomable
							/>
						</picture>
					</div>
					<div className="col-3">
						<picture>
							<img
								className="img-fluid"
								src={
									new URL(
										`/static/assets/images/instagram/instagram-6.jpg`,
										api_endpoint
									).href
								}
								data-zoomable
							/>
						</picture>
					</div>
					<div className="col-3">
						<picture>
							<img
								className="img-fluid"
								src={
									new URL(
										`/static/assets/images/instagram/instagram-7.jpg`,
										api_endpoint
									).href
								}
								data-zoomable
							/>
						</picture>
					</div>
					<div className="col-3">
						<picture>
							<img
								className="img-fluid"
								src={
									new URL(
										`/static/assets/images/instagram/instagram-8.jpg`,
										api_endpoint
									).href
								}
								data-zoomable
							/>
						</picture>
					</div>
					<div className="col-3">
						<picture>
							<img
								className="img-fluid"
								src={
									new URL(
										`/static/assets/images/instagram/instagram-9.jpg`,
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
};
