import React from "react";
import { ReviewStarsMedium } from "../reviews/ReviewStarsMedium";
import { ReviewStarsSmall } from "../reviews/ReviewStarsSmall";
export const ReviewsCompany = () => {
	return (
		<>
			<div class="row g-3">
				<div class="col-12 col-lg-4" data-aos="fade-left">
					<div class="bg-light p-4 d-flex h-100 justify-content-start align-items-center flex-column text-center">
						<p class="fw-bolder lead">Amazing Service!</p>
						<p class="mb-3">
							I have shopped with them for a few years now. Very easy to select items,
							items always as described. Never had to return any item. Good value.
						</p>
						<small class="text-muted d-block mb-2 fw-bolder">John Doe, London</small>
						<ReviewStarsSmall width="75%" />
					</div>
				</div>
				<div class="col-12 col-lg-4" data-aos="fade-left" data-aos-delay="150">
					<div class="bg-light p-4 d-flex h-100 justify-content-start align-items-center flex-column text-center">
						<p class="fw-bolder lead">Great Prices</p>
						<p class="mb-3">
							Always find these guys competitive,and with a huge range of
							products,coupled with great marketing,its difficult not to buy
							something.
						</p>
						<small class="text-muted d-block mb-2 fw-bolder">Sally Smith, Dublin</small>
						<ReviewStarsSmall width="75%" />
					</div>
				</div>
				<div class="col-12 col-lg-4" data-aos="fade-left" data-aos-delay="300">
					<div class="bg-light p-4 d-flex h-100 justify-content-start align-items-center flex-column text-center">
						<p class="fw-bolder lead">Fantastic Website</p>
						<p class="mb-3">
							My package was missing an item but customer services resolved it
							immediately and i got another delivery quite promptly. Also the product
							was absolutely lovely
						</p>
						<small class="text-muted d-block mb-2 fw-bolder">
							John Patrick, London
						</small>
						<ReviewStarsSmall width="75%" />
					</div>
				</div>
			</div>
			<div class="d-flex justify-content-center flex-column mt-7 align-items-center">
				<h3 class="mb-4 fw-bold fs-4">See what others have said</h3>
				<div class="d-flex justify-content-center align-items-center">
					<span class="fs-3 fw-bold me-4">4.85 / 5</span>
					<ReviewStarsMedium colour="text-dark" width="88%" />
				</div>
				<a href="#" class="btn btn-dark rounded-0 mt-4">
					Read 4,215 more reviews
				</a>
			</div>
		</>
	);
};
