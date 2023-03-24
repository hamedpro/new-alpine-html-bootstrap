import React, { useContext, useEffect, useState } from "react";
import { ReviewStarsSmall } from "../../reviews/ReviewStarsSmall";
import { GlobalContext } from "../../../GlobalContext";
var average = (array_of_numbers) => {
	var total = 0;
	array_of_numbers.forEach((i) => {
		total += i;
	});
	return total / array_of_numbers.length;
};
export const ListingCard = (props) => {
	var [product_reviews, set_product_reviews] = useState();
	var { product_reviews } = useContext(GlobalContext).global_context_state;
	if (product_reviews === undefined) return <h1>loading product reviews ...</h1>;

	return (
		<div className="card position-relative h-100 card-listing hover-trigger">
			{props["discount_percentage"] && (
				<span className="badge card-badge bg-secondary">
					{props["discount_percentage"]} %
				</span>
			)}

			<div className="card-header">
				<picture className="position-relative overflow-hidden d-block bg-light">
					<img
						className="w-100 img-fluid position-relative z-index-10"
						title=""
						src={new URL(`/files/${props.image_files_ids[0]}`, api_endpoint).href}
					/>
				</picture>
				{props.image_files_ids.length > 1 && (
					<div className="d-flex position-absolute top-0 left-0 w-100 h-100 hover-show bg-light z-index-20 justify-content-center align-items-center">
						<picture className="">
							<img
								className="w-100 img-fluid"
								title=""
								src={
									new URL(`/files/${props.image_files_ids[1]}`, api_endpoint).href
								}
							/>
						</picture>
					</div>
				)}

				<div className="card-actions">
					<span className="small text-uppercase tracking-wide fw-bolder text-center d-block">
						Quick Add
					</span>
					<div className="d-flex justify-content-center align-items-center flex-wrap mt-3">
						<button className="btn btn-outline-dark btn-sm mx-2">S</button>
						<button className="btn btn-outline-dark btn-sm mx-2">M</button>
						<button className="btn btn-outline-dark btn-sm mx-2">L</button>
					</div>
				</div>
			</div>
			<div className="card-body px-0 text-center">
				<div className="d-flex justify-content-center align-items-center mx-auto mb-1">
					<ReviewStarsSmall
						width={average(
							product_reviews
								.filter((i) => i.product_id === props._id)
								.map((i) => Number(i.width))
						)}
					/>
					<span className="small fw-bolder ms-2 text-muted">
						{" "}
						{product_reviews.filter((i) => i.product_id === props._id).length}
					</span>
				</div>
				<a
					className="mb-0 mx-2 mx-md-4 fs-p link-cover text-decoration-none d-block text-center"
					href={`/products/${props._id}`}
				>
					{props.title}
				</a>
				{props["discount_percentage"] ? (
					<div className="d-flex justify-content-center align-items-center mt-2">
						<p className="mb-0 me-2 text-danger fw-bolder">
							{props.currency}
							<span>{props.price * (100 - props.discount_percentage / 100)}</span>
						</p>
						<p className="mb-0 text-muted fw-bolder">
							<s>
								{props.currency}
								<span>{props.price}</span>
							</s>
						</p>
					</div>
				) : (
					<p className="fw-bolder m-0 mt-2">
						{props.currency}
						{props.price}
					</p>
				)}
			</div>
		</div>
	);
};
