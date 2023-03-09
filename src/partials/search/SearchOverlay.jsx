import React from "react";
import { ListingCard } from "../category/listing-cards/ListingCard";
export const SearchOverlay = () => {
	return (
		<section class="search-overlay">
			<div class="container search-container">
				<div class="py-5">
					<div class="d-flex justify-content-between align-items-center mb-4">
						<p class="lead lh-1 m-0 fw-bold">What are you looking for?</p>
						<button class="btn btn-light btn-close-search">
							<i class="ri-close-circle-line align-bottom"></i> Close search
						</button>
					</div>
					<form>
						<input
							type="text"
							class="form-control"
							id="searchForm"
							placeholder="Search by product or category name..."
						/>
					</form>
					<div class="my-5">
						<p class="lead fw-bolder">
							2 results found for <span class="fw-bold">"Waterproof Jacket"</span>
						</p>
						<div class="row">
							<div class="col-12 col-md-6 col-lg-3 mb-3 mb-lg-0">
								<ListingCard
									img="{{webRoot}}/assets/images/products/product-1.jpg"
									title="Mens Pennie II Waterproof Jacket"
									currency="$"
									price="325.66"
									review-width="80%"
									review-count="4.2 (123)"
								/>
							</div>
							<div class="col-12 col-md-6 col-lg-3">
								<ListingCard
									img="{{webRoot}}/assets/images/products/product-2.jpg"
									title="Mens Storm Waterproof Jacket"
									currency="$"
									price="499.99"
									review-width="70%"
									review-count="4.5 (1289)"
								/>
							</div>
						</div>
					</div>

					<div class="bg-dark p-4 text-white">
						<p class="lead m-0">
							Didn't find what you are looking for?{" "}
							<a
								class="transition-all opacity-50-hover text-white text-link-border border-white pb-1 border-2"
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
