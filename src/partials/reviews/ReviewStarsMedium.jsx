import React from "react";

export const ReviewStarsMedium = ({ colour , width}) => {
	return (
		<div class="rating position-relative d-table">
			<div
				class="position-absolute stars"
				style={{width : width || "80%"}}
			>
				<i
					class={`ri-star-fill ${colour || "text-dark"} ri-2x mr-1`}
				></i>
				<i class={`ri-star-fill ${colour || "text-dark"} ri-2x mr-1`}></i>
				<i
					class={`ri-star-fill ${colour || "text-dark"} ri-2x mr-1`}
				></i>
				<i
					class={`ri-star-fill ${colour || "text-dark"} ri-2x mr-1`}
				></i>
				<i
					class={`ri-star-fill ${colour || "text-dark"} ri-2x mr-1`}
				></i>
			</div>
			<div class="stars">
				<i class="ri-star-fill ri-2x mr-1 text-muted"></i>
				<i class="ri-star-fill ri-2x mr-1 text-muted"></i>
				<i class="ri-star-fill ri-2x mr-1 text-muted"></i>
				<i class="ri-star-fill ri-2x mr-1 text-muted"></i>
				<i class="ri-star-fill ri-2x mr-1 text-muted"></i>
			</div>
		</div>
	);
};
