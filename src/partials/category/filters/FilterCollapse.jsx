import { FilterPrice } from "./FilterPrice";
import { FilterCheckboxTwo } from "./FilterCheckboxTwo";
import { FilterColour } from "./FilterColour";
import React, { useContext } from "react";
import { GlobalContext } from "../../../GlobalContext";

export const FilterCollapse = () => {
	var tmp = useContext(GlobalContext).global_context_state.key_values.find(
		(i) => i.key === "filters_one"
	);
	if (tmp) {
		var filters_one = tmp.value;
	}

	var { categories, brands, type, sizes, colours } = filters_one || {
		categories: [],
		brands: [],
		type: [],
		sizes: [],
		colours: [],
	};

	return (
		<div className="row gx-5">
			<div className="col-4 widget-filter-price">
				<p className="small fs-6 fw-bolder border-bottom pb-3 mb-4">قیمت</p>
				<FilterPrice />
			</div>

			<div className="col-4">
				<p className="small fs-6 fw-bolder border-bottom pb-3 mb-4">اندازه ها</p>
				<div>
					<div className="filter-options mt-3">
						{sizes.map((i, index) => (
							<FilterCheckboxTwo key={index} index={index} {...i} type="sizes" />
						))}
					</div>
				</div>
			</div>

			<div className="col-4">
				<p className="small fs-6 fw-bolder border-bottom pb-3 mb-4">رنگ</p>
				<div>
					<div className="filter-options mt-3">
						{colours.map((i, index) => (
							<FilterColour key={index} index={index} {...i} type="colours" />
						))}
					</div>
				</div>
			</div>
		</div>
	);
};
