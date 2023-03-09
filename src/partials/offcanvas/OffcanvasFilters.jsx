import React from "react";
import { categories, brands, type, sizes, colours } from "../../data/filters-one.json";
import { FilterText } from "../category/filters/FilterText";
import { FilterPrice } from "../category/filters/FilterPrice";
import { FilterCheckbox } from "../category/filters/FilterCheckbox";
import { FilterCheckboxTwo } from "../category/filters/FilterCheckboxTwo";
import { FilterColour } from "../category/filters/FilterColour";
export const OffcanvasFilters = () => {
	return (
		<div class="offcanvas offcanvas-end d-none" tabindex="-1" id="offcanvasFilters">
			<div class="offcanvas-header d-flex align-items-center">
				<h5 class="offcanvas-title" id="offcanvasFiltersLabel">
					Category Filters
				</h5>
				<button
					type="button"
					class="btn-close text-reset"
					data-bs-dismiss="offcanvas"
					aria-label="Close"
				></button>
			</div>
			<div class="offcanvas-body">
				<div class="d-flex flex-column justify-content-between w-100 h-100">
					<div>
						{categories && (
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
						)}

						<div class="py-4 widget-filter widget-filter-price border-top">
							<a
								class="small text-body text-decoration-none text-secondary-hover transition-all transition-all fs-6 fw-bolder d-block collapse-icon-chevron"
								data-bs-toggle="collapse"
								href="#filter-modal-price"
								role="button"
								aria-expanded="false"
								aria-controls="filter-modal-price"
							>
								Price
							</a>
							<div id="filter-modal-price" class="collapse">
								<FilterPrice />
							</div>
						</div>

						{brands && (
							<div class="py-4 widget-filter border-top">
								<a
									class="small text-body text-decoration-none text-secondary-hover transition-all transition-all fs-6 fw-bolder d-block collapse-icon-chevron"
									data-bs-toggle="collapse"
									href="#filter-modal-brands"
									role="button"
									aria-expanded="false"
									aria-controls="filter-modal-brands"
								>
									Brands
								</a>
								<div id="filter-modal-brands" class="collapse">
									<div class="input-group my-3 py-1">
										<input
											type="text"
											class="form-control py-2 filter-search rounded"
											placeholder="Search"
											aria-label="Search"
										/>
										<span class="input-group-text bg-transparent p-2 position-absolute top-2 end-0 border-0 z-index-20">
											<i class="ri-search-2-line text-muted"></i>
										</span>
									</div>
									<div class="simplebar-wrapper">
										<div class="filter-options" data-pixr-simplebar>
											{brands.map((i) => (
												<FilterCheckbox {...i} type="brands-modal" />
											))}
										</div>
									</div>
								</div>
							</div>
						)}

						{type && (
							<div class="py-4 widget-filter border-top">
								<a
									class="small text-body text-decoration-none text-secondary-hover transition-all transition-all fs-6 fw-bolder d-block collapse-icon-chevron"
									data-bs-toggle="collapse"
									href="#filter-modal-type"
									role="button"
									aria-expanded="false"
									aria-controls="filter-modal-type"
								>
									Type
								</a>
								<div id="filter-modal-type" class="collapse">
									<div class="input-group my-3 py-1">
										<input
											type="text"
											class="form-control py-2 filter-search rounded"
											placeholder="Search"
											aria-label="Search"
										/>
										<span class="input-group-text bg-transparent p-2 position-absolute top-2 end-0 border-0 z-index-20">
											<i class="ri-search-2-line text-muted"></i>
										</span>
									</div>
									<div class="filter-options">
										{type.map((i) => (
											<FilterCheckbox {...i} type="type-modal" />
										))}
									</div>
								</div>
							</div>
						)}

						{sizes && (
							<div class="py-4 widget-filter border-top">
								<a
									class="small text-body text-decoration-none text-secondary-hover transition-all transition-all fs-6 fw-bolder d-block collapse-icon-chevron"
									data-bs-toggle="collapse"
									href="#filter-modal-sizes"
									role="button"
									aria-expanded="false"
									aria-controls="filter-modal-sizes"
								>
									Sizes
								</a>
								<div id="filter-modal-sizes" class="collapse">
									<div class="filter-options mt-3">
										{sizes.map((i) => (
											<FilterCheckboxTwo {...i} type="sizes-modal" />
										))}
									</div>
								</div>
							</div>
						)}

						{colours && (
							<div class="py-4 widget-filter border-top">
								<a
									class="small text-body text-decoration-none text-secondary-hover transition-all transition-all fs-6 fw-bolder d-block collapse-icon-chevron"
									data-bs-toggle="collapse"
									href="#filter-modal-colour"
									role="button"
									aria-expanded="false"
									aria-controls="filter-modal-colour"
								>
									Colour
								</a>
								<div id="filter-modal-colour" class="collapse">
									<div class="filter-options mt-3">
										{colours.map((i) => (
											<FilterColour {...i} type="colours-modal" />
										))}
									</div>
								</div>
							</div>
						)}
					</div>

					<div class="border-top pt-3">
						<a href="#" class="btn btn-dark mt-2 d-block hover-lift-sm hover-boxshadow">
							Done
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};
