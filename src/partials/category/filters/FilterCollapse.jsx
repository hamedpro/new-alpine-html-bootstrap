import { FilterPrice } from "./FilterPrice";
import { sizes, colours } from "../../../data/filters-one.json";
import { FilterCheckboxTwo } from "./FilterCheckboxTwo";
import { FilterColour } from "./FilterColour";
import React from "react";

export const FilterCollapse = () => {
	return (
		<div class="row gx-5">
			<div class="col-4 widget-filter-price">
				<p class="small fs-6 fw-bolder border-bottom pb-3 mb-4">Price</p>
				<FilterPrice />
			</div>

			<div class="col-4">
				<p class="small fs-6 fw-bolder border-bottom pb-3 mb-4">Sizes</p>
				<div>
					<div class="filter-options mt-3">
						{sizes.map((i) => (
							<FilterCheckboxTwo {...i} type="sizes" />
						))}
					</div>
				</div>
			</div>

			<div class="col-4">
				<p class="small fs-6 fw-bolder border-bottom pb-3 mb-4">Colour</p>
				<div>
					<div class="filter-options mt-3">
						{colours.map((i) => (
							<FilterColour {...i} type="colours" />
						))}
					</div>
				</div>
			</div>
		</div>
	);
};
