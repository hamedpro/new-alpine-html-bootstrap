import React from "react";
import { DropdownLinks } from "./DropdownLinks";

export const Menu = () => {
	return (
		<ul class="navbar-nav py-lg-2 mx-auto">
			<li class="nav-item me-lg-4 dropdown position-static">
				<a
					class="nav-link fw-bolder dropdown-toggle py-lg-4"
					href="#"
					role="button"
					data-bs-toggle="dropdown"
					aria-haspopup="true"
					aria-expanded="false"
				>
					Menswear
				</a>

				<div class="dropdown-menu dropdown-megamenu">
					<div class="container">
						<div class="row g-0">
							<div class="col-12 col-lg-7">
								<DropdownLinks />
							</div>

							<div class="d-none d-lg-block col-lg-5">
								<div
									class="vw-50 h-100 bg-img-cover bg-pos-center-center position-absolute"
									style="background-image: url({{webRoot}}/assets/images/banners/banner-2.jpg);"
								></div>
							</div>
						</div>
					</div>
				</div>
			</li>
			<li class="nav-item me-lg-4 dropdown position-static">
				<a
					class="nav-link fw-bolder dropdown-toggle py-lg-4"
					href="#"
					role="button"
					data-bs-toggle="dropdown"
					aria-haspopup="true"
					aria-expanded="false"
				>
					Womenswear
				</a>

				<div class="dropdown-menu dropdown-megamenu">
					<div class="container">
						<div class="row g-0">
							<div class="col-12 col-lg-7">
								<DropdownLinks />
							</div>

							<div class="d-none d-lg-block col-lg-5">
								<div
									class="vw-50 h-100 bg-img-cover bg-pos-center-center position-absolute"
									style="background-image: url({{webRoot}}/assets/images/banners/banner-4.jpg);"
								></div>
							</div>
						</div>
					</div>
				</div>
			</li>
			<li class="nav-item me-lg-4">
				<a class="nav-link fw-bolder py-lg-4" href="#">
					Kidswear
				</a>
			</li>
			<li class="nav-item me-lg-4">
				<a class="nav-link fw-bolder py-lg-4" href="#">
					Sale Items
				</a>
			</li>
			<li class="nav-item dropdown me-lg-4">
				<a
					class="nav-link fw-bolder dropdown-toggle py-lg-4"
					href="#"
					role="button"
					data-bs-toggle="dropdown"
					aria-haspopup="true"
					aria-expanded="false"
				>
					Demo Pages
				</a>
				<ul class="dropdown-menu">
					<li>
						<a class="dropdown-item" href="{{webRoot}}/index.html">
							Homepage
						</a>
					</li>
					<li>
						<a class="dropdown-item" href="{{webRoot}}/category.html">
							Category
						</a>
					</li>
					<li>
						<a class="dropdown-item" href="{{webRoot}}/product.html">
							Product
						</a>
					</li>
					<li>
						<a class="dropdown-item" href="{{webRoot}}/cart.html">
							Cart
						</a>
					</li>
					<li>
						<a class="dropdown-item" href="{{webRoot}}/checkout.html">
							Checkout
						</a>
					</li>
				</ul>
			</li>
		</ul>
	);
};
