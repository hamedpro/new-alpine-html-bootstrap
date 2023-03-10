import React from "react";
import { ReviewStarsSmall } from "../../reviews/ReviewStarsSmall";
export const ListingCard = (props) => {
	return (
		<div className="card position-relative h-100 card-listing hover-trigger">
			{props["discount-percentage"] && (
				<span className="badge card-badge bg-secondary">
					{props["discount-percentage"]}
				</span>
			)}

			<div className="card-header">
				<picture className="position-relative overflow-hidden d-block bg-light">
					<img
						className="w-100 img-fluid position-relative z-index-10"
						title=""
						src={props.img}
					/>
				</picture>
				{props["img-hover"] && (
					<picture className="position-absolute z-index-20 start-0 top-0 hover-show bg-light">
						<img className="w-100 img-fluid" title="" src={props["img-hover"]} />
					</picture>
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
					<ReviewStarsSmall width={props["review-width"]} />
					<span className="small fw-bolder ms-2 text-muted">
						{" "}
						{props["review-count"]}
					</span>
				</div>
				<a
					className="mb-0 mx-2 mx-md-4 fs-p link-cover text-decoration-none d-block text-center"
					href="/product"
				>
					{props.title}
				</a>
				{props["sale-price"] ? (
					<div className="d-flex justify-content-center align-items-center mt-2">
						<p className="mb-0 me-2 text-danger fw-bolder">
							{props.currency}
							<span>{props["sale-price"]}</span>
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
