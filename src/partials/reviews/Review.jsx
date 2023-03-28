import React from "react";
import { ReviewStarsSmall } from "./ReviewStarsSmall";

export const Review = ({
	time,
	user_id,
	user_badge,
	title,
	text,
	has_recommended_this_product,
	border_top,
	border_bottom,
	width,
}) => {
	return (
		<article
			className={`py-5 border-bottom ${border_top && "border-top"} ${
				border_bottom && "border-bottom"
			}`}
		>
			<div className="row">
				<div className="col-12 col-md-4">
					<small className="text-muted fw-bolder">
						{new Date(time).getDate()}/{new Date(time).getMonth() + 1}/
						{new Date(time).getFullYear()}
					</small>
					<p className="fw-bolder">{user_id}</p>
					<span className="bg-success-faded fs-xs fw-bolder text-uppercase p-2">
						{user_badge}
					</span>
				</div>
				<div className="col-12 col-md-8 mt-4 mt-md-0">
					<ReviewStarsSmall width={width} />
					<p className="fw-bolder mt-4">{title}</p>
					<p>{text}</p>

					<small className="fw-bolder bg-light d-table rounded py-1 px-2">
						{has_recommended_this_product
							? "Yes, I would recommend the product"
							: "No, I dont recommend the product"}
					</small>
					<div className="d-block d-md-flex mt-3 justify-content-between align-items-center">
						<a
							href="#"
							className="btn btn-link text-muted p-0 text-decoration-none w-100 w-md-auto fw-bolder text-start"
							title=""
						>
							<small>
								Was this review helpful?
								<i className="ri-thumb-up-line ms-4"></i> 112{" "}
								<i className="ri-thumb-down-line ms-2"></i>
								23
							</small>
						</a>
						<a
							href="#"
							className="btn btn-link text-muted p-0 text-decoration-none w-100 w-md-auto fw-bolder text-start mt-3 mt-md-0"
							title=""
						>
							<small>
								Flag as inappropriate <i className="ri-flag-2-line ms-2"></i>
							</small>
						</a>
					</div>
				</div>
			</div>
		</article>
	);
};