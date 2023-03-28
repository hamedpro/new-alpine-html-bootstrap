import React, { useContext, useState } from "react";
import { GlobalContext } from "../../GlobalContext";
import { ReviewStarsMedium } from "../reviews/ReviewStarsMedium";
import { ReviewStarsSmall } from "../reviews/ReviewStarsSmall";
import { average } from "../../helpers";
import { Review } from "./Review";
export const ReviewsCustomers = ({ product }) => {
	
	var { product_reviews } = useContext(GlobalContext).global_context_state;
	var [shown_reviews_limit, set_shown_reviews_limit] = useState(3);
	if (product_reviews === undefined) return <h1>در حال بارگذاری نظرات کاربران ...</h1>;

	//total_rating either a number from 0 to 100 or
	//undefined(for when there is not any reviews for this product)
	var total_rating = average(
		product_reviews.filter((i) => i.product_id === product._id).map((i) => Number(i.width))
	);
	return (
		<section className="reviews">
			<div className="col-lg-12 text-center pb-5">
				<h2 className="fs-1 fw-bold d-flex align-items-center justify-content-center">
					{total_rating === undefined ? "?" : total_rating / 20}{" "}
					<small className="text-muted fw-bolder ms-3 fw-bolder fs-6">
						({product_reviews.filter((i) => i.product_id === product._id).length} نظر )
					</small>
				</h2>
				<div className="d-flex justify-content-center">
					<ReviewStarsMedium width={total_rating} />
				</div>

				{/* <div className="bg-light rounded py-3 px-4 mt-3 col-12 col-md-6 col-lg-5 mx-auto">
					<ul className="list-group list-group-flush">
						<li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 bg-transparent">
							<span className="fw-bolder">Fit</span>
							<ReviewStarsSmall width="25%" />
						</li>
						<li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 bg-transparent">
							<span className="fw-bolder">Value for money</span>
							<ReviewStarsSmall width="75%" />
						</li>
						<li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 bg-transparent">
							<span className="fw-bolder">Build quality</span>
							<ReviewStarsSmall width="65%" />
						</li>
						<li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 bg-transparent">
							<span className="fw-bolder">Style</span>
							<ReviewStarsSmall width="90%" />
						</li>
					</ul>
				</div> */}
				{/* 
					this div down is just something i have extracted from the top div
					replace that when possible 
				*/}
				<div className="bg-light rounded py-3 px-4 mt-3 col-12 col-md-6 col-lg-5 mx-auto">
					<ul className="list-group list-group-flush">
						<li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 bg-transparent">
							<span className="fw-bolder">در مجموع</span>
							<ReviewStarsSmall width={total_rating} />
						</li>
					</ul>
				</div>
				<button
					type="button"
					className="btn btn-dark mt-4 hover-lift-sm hover-boxshadow disable-child-pointer"
					data-bs-toggle="offcanvas"
					data-bs-target="#offcanvasReview"
					aria-controls="offcanvasReview"
				>
					نوشتن یک نظر <i className="ri-discuss-line align-bottom ms-1"></i>
				</button>
			</div>
			{product_reviews.filter((i) => i.product_id === product._id).length === 0
				? "هنوز هیچ نظری برای این کالا وجود ندارد."
				: product_reviews
						.filter((i) => i.product_id === product._id)
						.slice(0, shown_reviews_limit)
						.map((product_review, index, array) => (
							<Review
								border_bottom={true}
								width={product_review.width}
								border_top={index === 0}
								key={product_review._id}
								user_id={product_review.user_id}
								user_badge={"چیزی در مورد این کاربر"}
								title={product_review.title}
								text={product_review.text}
								has_recommended_this_product={
									product_review.has_recommended_this_product
								}
								time={product_review.time}
							/>
						))}

			<button
				onClick={() => set_shown_reviews_limit((prev) => prev + 3)}
				className="btn btn-dark d-table mx-auto mt-6 mb-3 hover-lift-sm hover-boxshadow"
				title=""
			>
				بارگیری ۳ نظر بیشتر
			</button>
			<p className="text-muted text-center fw-bolder">
				حداکثر {shown_reviews_limit} تا از نظرات قابل مشاهده هستند ( از {product_reviews.length})
			</p>
		</section>
	);
};
