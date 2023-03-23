import React from "react";

export const ReviewStarsSmall = ({ colour, width }) => {
	//width must be a number from 0 to 100
	return (
		<div className="rating position-relative d-table">
			<div
				className="position-absolute stars"
				style={{ width: isNaN(width) ? "80%" : width + "%" }}
			>
				<i className={`ri-star-fill ${colour || "text-dark"} mr-1`}></i>
				<i className={`ri-star-fill ${colour || "text-dark"} mr-1`}></i>
				<i className={`ri-star-fill ${colour || "text-dark"} mr-1`}></i>
				<i className={`ri-star-fill ${colour || "text-dark"} mr-1`}></i>
				<i className={`ri-star-fill ${colour || "text-dark"} mr-1`}></i>
			</div>
			<div className="stars">
				<i className="ri-star-fill mr-1 text-muted opacity-25"></i>
				<i className="ri-star-fill mr-1 text-muted opacity-25"></i>
				<i className="ri-star-fill mr-1 text-muted opacity-25"></i>
				<i className="ri-star-fill mr-1 text-muted opacity-25"></i>
				<i className="ri-star-fill mr-1 text-muted opacity-25"></i>
			</div>
		</div>
	);
};
