import React from "react";

export const ReviewStarsSmall = ({ colour, width }) => {
	return (
		<div class="rating position-relative d-table">
			<div class="position-absolute stars" style={{ width: width || "80%" }}>
				<i class={`ri-star-fill ${colour || "text-dark"} mr-1`}></i>
				<i class={`ri-star-fill ${colour || "text-dark"} mr-1`}></i>
				<i class={`ri-star-fill ${colour || "text-dark"} mr-1`}></i>
				<i class={`ri-star-fill ${colour || "text-dark"} mr-1`}></i>
				<i class={`ri-star-fill ${colour || "text-dark"} mr-1`}></i>
			</div>
			<div class="stars">
				<i class="ri-star-fill mr-1 text-muted opacity-25"></i>
				<i class="ri-star-fill mr-1 text-muted opacity-25"></i>
				<i class="ri-star-fill mr-1 text-muted opacity-25"></i>
				<i class="ri-star-fill mr-1 text-muted opacity-25"></i>
				<i class="ri-star-fill mr-1 text-muted opacity-25"></i>
			</div>
		</div>
	);
};
