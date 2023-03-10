import React from "react";

export const ReviewStarsMedium = ({ colour , width}) => {
	return (
		<div className="rating position-relative d-table">
			<div className="position-absolute stars" style={{ width: width || "80%" }}>
				<i class={`ri-star-fill ${colour || "text-dark"} ri-2x mr-1`}></i>
				<i class={`ri-star-fill ${colour || "text-dark"} ri-2x mr-1`}></i>
				<i class={`ri-star-fill ${colour || "text-dark"} ri-2x mr-1`}></i>
				<i class={`ri-star-fill ${colour || "text-dark"} ri-2x mr-1`}></i>
				<i class={`ri-star-fill ${colour || "text-dark"} ri-2x mr-1`}></i>
			</div>
			<div className="stars">
				<i className="ri-star-fill ri-2x mr-1 text-muted"></i>
				<i className="ri-star-fill ri-2x mr-1 text-muted"></i>
				<i className="ri-star-fill ri-2x mr-1 text-muted"></i>
				<i className="ri-star-fill ri-2x mr-1 text-muted"></i>
				<i className="ri-star-fill ri-2x mr-1 text-muted"></i>
			</div>
		</div>
	);
};
