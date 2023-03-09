import React from "react";
import { categories, brands, type, sizes, colours } from "../../../data/filters-one.json";
import { FilterText } from "../filters/FilterText";
import { FilterPrice } from "../filters/FilterPrice";
import { FilterCheckbox } from "../filters/FilterCheckbox.jsx";
import { FilterCheckboxTwo } from "../filters/FilterCheckboxTwo";
import { FilterColour } from "../filters/FilterColour";
export const AsideMenuOne = () => {
	return (
		<aside>
			<div class="mb-4">
				<h2 class="mb-4 fs-6 mt-2 fw-bolder">Jacket Category</h2>
				<nav>
					<ul class="list-unstyled list-default-text">
						{categories.map((i) => (
							<FilterText {...i} />
						))}
					</ul>
				</nav>
			</div>

			<div class="py-4 widget-filter widget-filter-price border-top">
				<a
					class="small text-body text-decoration-none text-secondary-hover transition-all transition-all fs-6 fw-bolder d-block collapse-icon-chevron"
					data-bs-toggle="collapse"
					href="#filter-price"
					role="button"
					aria-expanded="true"
					aria-controls="filter-price"
				>
					Price
				</a>
				<div id="filter-price" class="collapse show">
					<FilterPrice />
				</div>
			</div>

			<div class="py-4 widget-filter border-top">
				<a
					class="small text-body text-decoration-none text-secondary-hover transition-all transition-all fs-6 fw-bolder d-block collapse-icon-chevron"
					data-bs-toggle="collapse"
					href="#filter-brands"
					role="button"
					aria-expanded="true"
					aria-controls="filter-brands"
				>
					Brands
				</a>
				<div id="filter-brands" class="collapse show">
					<div class="input-group my-3 py-1">
						<input
							type="text"
							class="form-control py-2 filter-search rounded"
							placeholder="Search"
							aria-label="Search"
						/>
						<span class="input-group-text bg-transparent px-2 position-absolute top-7 end-0 border-0 z-index-20">
							<i class="ri-search-2-line text-muted"></i>
						</span>
					</div>
					<div class="simplebar-wrapper">
						<div class="filter-options" data-pixr-simplebar>
							{brands.map((brand) => (
								<FilterCheckbox {...brand} type="brand" />
							))}
						</div>
					</div>
				</div>
			</div>

			<div class="py-4 widget-filter border-top">
				<a
					class="small text-body text-decoration-none text-secondary-hover transition-all transition-all fs-6 fw-bolder d-block collapse-icon-chevron"
					data-bs-toggle="collapse"
					href="#filter-type"
					role="button"
					aria-expanded="true"
					aria-controls="filter-type"
				>
					Type
				</a>
				<div id="filter-type" class="collapse show">
					<div class="input-group my-3 py-1">
						<input
							type="text"
							class="form-control py-2 filter-search rounded"
							placeholder="Search"
							aria-label="Search"
						/>
						<span class="input-group-text bg-transparent px-2 position-absolute top-7 end-0 border-0 z-index-20">
							<i class="ri-search-2-line text-muted"></i>
						</span>
					</div>
					<div class="filter-options">
						{type.map((i) => (
							<FilterCheckbox {...i} type="type" />
						))}
					</div>
				</div>
			</div>

			<div class="py-4 widget-filter border-top">
				<a
					class="small text-body text-decoration-none text-secondary-hover transition-all transition-all fs-6 fw-bolder d-block collapse-icon-chevron"
					data-bs-toggle="collapse"
					href="#filter-sizes"
					role="button"
					aria-expanded="true"
					aria-controls="filter-sizes"
				>
					Sizes
				</a>
				<div id="filter-sizes" class="collapse show">
					<div class="filter-options mt-3">
						{sizes.map((i) => (
							<FilterCheckboxTwo {...i} type="sizes" />
						))}
					</div>
				</div>
			</div>

			<div class="py-4 widget-filter border-top">
				<a
					class="small text-body text-decoration-none text-secondary-hover transition-all transition-all fs-6 fw-bolder d-block collapse-icon-chevron"
					data-bs-toggle="collapse"
					href="#filter-colour"
					role="button"
					aria-expanded="true"
					aria-controls="filter-colour"
				>
					Colour
				</a>
				<div id="filter-colour" class="collapse show">
					<div class="filter-options mt-3">
						{colours.map((i) => (
							<FilterColour {...i} type="colours" />
						))}
					</div>
				</div>
			</div>
		</aside>
	);
};
