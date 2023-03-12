import { FilterPrice } from "./FilterPrice";
import { FilterCheckboxTwo } from "./FilterCheckboxTwo";
import { FilterColour } from "./FilterColour";
import React, { useContext } from "react";
import { GlobalContext } from "../../../GlobalContext";

export const FilterCollapse = () => {
	var filters_one = useContext(GlobalContext).global_context_state.filters_one;
	if (filters_one === undefined) return <h1>still loading filters_one ...</h1>;
	var { sizes, colours } = filters_one;
	return (
		<div className="row gx-5">
			<div className="col-4 widget-filter-price">
				<p className="small fs-6 fw-bolder border-bottom pb-3 mb-4">Price</p>
				<FilterPrice />
			</div>

			<div className="col-4">
				<p className="small fs-6 fw-bolder border-bottom pb-3 mb-4">Sizes</p>
				<div>
					<div className="filter-options mt-3">
						{sizes.map((i) => (
							<FilterCheckboxTwo {...i} type="sizes" />
						))}
					</div>
				</div>
			</div>

			<div className="col-4">
				<p className="small fs-6 fw-bolder border-bottom pb-3 mb-4">Colour</p>
				<div>
					<div className="filter-options mt-3">
						{colours.map((i) => (
							<FilterColour {...i} type="colours" />
						))}
					</div>
				</div>
			</div>
		</div>
	);
};
