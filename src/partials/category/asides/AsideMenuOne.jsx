import React, { useContext } from "react";
import { FilterText } from "../filters/FilterText";
import { FilterPrice } from "../filters/FilterPrice";
import { FilterCheckbox } from "../filters/FilterCheckbox.jsx";
import { FilterCheckboxTwo } from "../filters/FilterCheckboxTwo";
import { FilterColour } from "../filters/FilterColour";
import { GlobalContext } from "../../../GlobalContext";
import SimpleBar from "simplebar-react";
export const AsideMenuOne = () => {
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
		<aside>
			<div className="mb-4">
				<h2 className="mb-4 fs-6 mt-2 fw-bolder">Jacket Category</h2>
				<nav>
					<ul className="list-unstyled list-default-text">
						{categories.map((i, index) => (
							<FilterText key={index} {...i} />
						))}
					</ul>
				</nav>
			</div>

			<div className="py-4 widget-filter widget-filter-price border-top">
				<a
					className="small text-body text-decoration-none text-secondary-hover transition-all transition-all fs-6 fw-bolder d-block collapse-icon-chevron"
					data-bs-toggle="collapse"
					href="#filter-price"
					role="button"
					aria-expanded="true"
					aria-controls="filter-price"
				>
					قیمت
				</a>
				<div id="filter-price" className="collapse show">
					<FilterPrice />
				</div>
			</div>

			<div className="py-4 widget-filter border-top">
				<a
					className="small text-body text-decoration-none text-secondary-hover transition-all transition-all fs-6 fw-bolder d-block collapse-icon-chevron"
					data-bs-toggle="collapse"
					href="#filter-brands"
					role="button"
					aria-expanded="true"
					aria-controls="filter-brands"
				>
					برند ها
				</a>
				<div id="filter-brands" className="collapse show">
					<div className="input-group my-3 py-1">
						<input
							type="text"
							className="form-control py-2 filter-search rounded"
							placeholder="Search"
							aria-label="Search"
						/>
						<span className="input-group-text bg-transparent px-2 position-absolute top-7 end-0 border-0 z-index-20">
							<i className="ri-search-2-line text-muted"></i>
						</span>
					</div>
					<div className="simplebar-wrapper">
						<SimpleBar className="filter-options" autoHide={false}>
							{brands.map((brand, index) => (
								<FilterCheckbox key={index} index={index} {...brand} type="brand" />
							))}
						</SimpleBar>
					</div>
				</div>
			</div>

			<div className="py-4 widget-filter border-top">
				<a
					className="small text-body text-decoration-none text-secondary-hover transition-all transition-all fs-6 fw-bolder d-block collapse-icon-chevron"
					data-bs-toggle="collapse"
					href="#filter-type"
					role="button"
					aria-expanded="true"
					aria-controls="filter-type"
				>
					نوع
				</a>
				<div id="filter-type" className="collapse show">
					<div className="input-group my-3 py-1">
						<input
							type="text"
							className="form-control py-2 filter-search rounded"
							placeholder="Search"
							aria-label="Search"
						/>
						<span className="input-group-text bg-transparent px-2 position-absolute top-7 end-0 border-0 z-index-20">
							<i className="ri-search-2-line text-muted"></i>
						</span>
					</div>
					<div className="filter-options">
						{type.map((i, index) => (
							<FilterCheckbox key={index} index={index} {...i} type="type" />
						))}
					</div>
				</div>
			</div>

			<div className="py-4 widget-filter border-top">
				<a
					className="small text-body text-decoration-none text-secondary-hover transition-all transition-all fs-6 fw-bolder d-block collapse-icon-chevron"
					data-bs-toggle="collapse"
					href="#filter-sizes"
					role="button"
					aria-expanded="true"
					aria-controls="filter-sizes"
				>
					اندازه ها
				</a>
				<div id="filter-sizes" className="collapse show">
					<div className="filter-options mt-3">
						{sizes.map((i, index) => (
							<FilterCheckboxTwo key={index} index={index} {...i} type="sizes" />
						))}
					</div>
				</div>
			</div>

			<div className="py-4 widget-filter border-top">
				<a
					className="small text-body text-decoration-none text-secondary-hover transition-all transition-all fs-6 fw-bolder d-block collapse-icon-chevron"
					data-bs-toggle="collapse"
					href="#filter-colour"
					role="button"
					aria-expanded="true"
					aria-controls="filter-colour"
				>
					رنگ
				</a>
				<div id="filter-colour" className="collapse show">
					<div className="filter-options mt-3">
						{colours.map((i, index) => (
							<FilterColour key={index} index={index} {...i} type="colours" />
						))}
					</div>
				</div>
			</div>
		</aside>
	);
};
