import React from "react";
import { categories, brands, type, sizes, colours } from "../../data/filters-one.json";
import { FilterText } from "../category/filters/FilterText";
import { FilterPrice } from "../category/filters/FilterPrice";
import { FilterCheckbox } from "../category/filters/FilterCheckbox";
import { FilterCheckboxTwo } from "../category/filters/FilterCheckboxTwo";
import { FilterColour } from "../category/filters/FilterColour";
export const OffcanvasFilters = () => {
	return (
		<div className="offcanvas offcanvas-end d-none" tabindex="-1" id="offcanvasFilters">
			<div className="offcanvas-header d-flex align-items-center">
				<h5 className="offcanvas-title" id="offcanvasFiltersLabel">
					Category Filters
				</h5>
				<button
					type="button"
					className="btn-close text-reset"
					data-bs-dismiss="offcanvas"
					aria-label="Close"
				></button>
			</div>
			<div className="offcanvas-body">
				<div className="d-flex flex-column justify-content-between w-100 h-100">
					<div>
						{categories && (
							<div className="mb-4">
								<h2 className="mb-4 fs-6 mt-2 fw-bolder">Jacket Category</h2>
								<nav>
									<ul className="list-unstyled list-default-text">
										{categories.map((i) => (
											<FilterText {...i} />
										))}
									</ul>
								</nav>
							</div>
						)}

						<div className="py-4 widget-filter widget-filter-price border-top">
							<a
								className="small text-body text-decoration-none text-secondary-hover transition-all transition-all fs-6 fw-bolder d-block collapse-icon-chevron"
								data-bs-toggle="collapse"
								href="#filter-modal-price"
								role="button"
								aria-expanded="false"
								aria-controls="filter-modal-price"
							>
								Price
							</a>
							<div id="filter-modal-price" className="collapse">
								<FilterPrice />
							</div>
						</div>

						{brands && (
							<div className="py-4 widget-filter border-top">
								<a
									className="small text-body text-decoration-none text-secondary-hover transition-all transition-all fs-6 fw-bolder d-block collapse-icon-chevron"
									data-bs-toggle="collapse"
									href="#filter-modal-brands"
									role="button"
									aria-expanded="false"
									aria-controls="filter-modal-brands"
								>
									Brands
								</a>
								<div id="filter-modal-brands" className="collapse">
									<div className="input-group my-3 py-1">
										<input
											type="text"
											className="form-control py-2 filter-search rounded"
											placeholder="Search"
											aria-label="Search"
										/>
										<span className="input-group-text bg-transparent p-2 position-absolute top-2 end-0 border-0 z-index-20">
											<i className="ri-search-2-line text-muted"></i>
										</span>
									</div>
									<div className="simplebar-wrapper">
										<div className="filter-options" data-pixr-simplebar>
											{brands.map((i) => (
												<FilterCheckbox {...i} type="brands-modal" />
											))}
										</div>
									</div>
								</div>
							</div>
						)}

						{type && (
							<div className="py-4 widget-filter border-top">
								<a
									className="small text-body text-decoration-none text-secondary-hover transition-all transition-all fs-6 fw-bolder d-block collapse-icon-chevron"
									data-bs-toggle="collapse"
									href="#filter-modal-type"
									role="button"
									aria-expanded="false"
									aria-controls="filter-modal-type"
								>
									Type
								</a>
								<div id="filter-modal-type" className="collapse">
									<div className="input-group my-3 py-1">
										<input
											type="text"
											className="form-control py-2 filter-search rounded"
											placeholder="Search"
											aria-label="Search"
										/>
										<span className="input-group-text bg-transparent p-2 position-absolute top-2 end-0 border-0 z-index-20">
											<i className="ri-search-2-line text-muted"></i>
										</span>
									</div>
									<div className="filter-options">
										{type.map((i) => (
											<FilterCheckbox {...i} type="type-modal" />
										))}
									</div>
								</div>
							</div>
						)}

						{sizes && (
							<div className="py-4 widget-filter border-top">
								<a
									className="small text-body text-decoration-none text-secondary-hover transition-all transition-all fs-6 fw-bolder d-block collapse-icon-chevron"
									data-bs-toggle="collapse"
									href="#filter-modal-sizes"
									role="button"
									aria-expanded="false"
									aria-controls="filter-modal-sizes"
								>
									Sizes
								</a>
								<div id="filter-modal-sizes" className="collapse">
									<div className="filter-options mt-3">
										{sizes.map((i) => (
											<FilterCheckboxTwo {...i} type="sizes-modal" />
										))}
									</div>
								</div>
							</div>
						)}

						{colours && (
							<div className="py-4 widget-filter border-top">
								<a
									className="small text-body text-decoration-none text-secondary-hover transition-all transition-all fs-6 fw-bolder d-block collapse-icon-chevron"
									data-bs-toggle="collapse"
									href="#filter-modal-colour"
									role="button"
									aria-expanded="false"
									aria-controls="filter-modal-colour"
								>
									Colour
								</a>
								<div id="filter-modal-colour" className="collapse">
									<div className="filter-options mt-3">
										{colours.map((i) => (
											<FilterColour {...i} type="colours-modal" />
										))}
									</div>
								</div>
							</div>
						)}
					</div>

					<div className="border-top pt-3">
						<a
							href="#"
							className="btn btn-dark mt-2 d-block hover-lift-sm hover-boxshadow"
						>
							Done
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};
