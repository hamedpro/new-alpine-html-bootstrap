import React from "react";
import { ListingCard } from "../category/listing-cards/ListingCard";
export const SearchOverlay = () => {
	return (
		<section className="search-overlay">
			<div className="container search-container">
				<div className="py-5">
					<div className="d-flex justify-content-between align-items-center mb-4">
						<p className="lead lh-1 m-0 fw-bold">What are you looking for?</p>
						<button className="btn btn-light btn-close-search">
							<i className="ri-close-circle-line align-bottom"></i> Close search
						</button>
					</div>
					<form>
						<input
							type="text"
							className="form-control"
							id="searchForm"
							placeholder="Search by product or category name..."
						/>
					</form>
					<div className="my-5">
						<p className="lead fw-bolder">
							2 results found for <span className="fw-bold">"Waterproof Jacket"</span>
						</p>
						<div className="row">
							<div className="col-12 col-md-6 col-lg-3 mb-3 mb-lg-0">
								<ListingCard
									{...{
										_id: "640d8126eef774a41003d931",
										title: "Mens Sherpa Hoodie",
										brand: "Timberland",
										price: "150.00",
										currency: "$",
										options: "Availble in 4 colours, 7 sizes",
										"sale-price": "599.55",
										"discount-percentage": "-25%",
										"review-count": "4.4 (1289)",
										"review-width": "60%",
										image_file_id: "16785602512517061",
										hover_image_file_id: "16785602512517061",
									}}
								/>
							</div>
							<div className="col-12 col-md-6 col-lg-3">
								<ListingCard
									{...{
										_id: "640d8126eef774a41003d931",
										title: "Mens Sherpa Hoodie",
										brand: "Timberland",
										price: "150.00",
										currency: "$",
										options: "Availble in 4 colours, 7 sizes",
										"sale-price": "599.55",
										"discount-percentage": "-25%",
										"review-count": "4.4 (1289)",
										"review-width": "60%",
										image_file_id: "16785602512517061",
										hover_image_file_id: "16785602512517061",
									}}
								/>
							</div>
						</div>
					</div>

					<div className="bg-dark p-4 text-white">
						<p className="lead m-0">
							Didn't find what you are looking for?{" "}
							<a
								className="transition-all opacity-50-hover text-white text-link-border border-white pb-1 border-2"
								href="#"
							>
								Send us a message.
							</a>
						</p>
					</div>
				</div>
			</div>
		</section>
	);
};
