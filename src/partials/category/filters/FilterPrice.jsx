import React from "react";

export const FilterPrice = () => {
	return (
		<>
			<div class="filter-price mt-6"></div>
			<div class="d-flex justify-content-between align-items-center mt-7">
				<div class="input-group mb-0 me-2 border">
					<span class="input-group-text bg-transparent fs-7 p-2 text-muted border-0">
						$
					</span>
					<input
						type="number"
						min="00"
						max="1000"
						step="1"
						class="filter-min form-control-sm border flex-grow-1 text-muted border-0"
					/>
				</div>
				<div class="input-group mb-0 ms-2 border">
					<span class="input-group-text bg-transparent fs-7 p-2 text-muted border-0">
						$
					</span>
					<input
						type="number"
						min="00"
						max="1000"
						step="1"
						class="filter-max form-control-sm flex-grow-1 text-muted border-0"
					/>
				</div>
			</div>
		</>
	);
};
