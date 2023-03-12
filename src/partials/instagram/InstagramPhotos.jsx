import React from "react";

export const InstagramPhotos = () => {
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
