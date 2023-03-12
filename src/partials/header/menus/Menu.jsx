import React from "react";
import { DropdownLinks } from "./DropdownLinks";

export const Menu = () => {
	return (
		<ul className="navbar-nav py-lg-2 mx-auto">
			<li className="nav-item me-lg-4 dropdown position-static">
				<a
					className="nav-link fw-bolder dropdown-toggle py-lg-4"
					href="#"
					role="button"
					data-bs-toggle="dropdown"
					aria-haspopup="true"
					aria-expanded="false"
				>
					Menswear
				</a>

				<div className="dropdown-menu dropdown-megamenu">
					<div className="container">
						<div className="row g-0">
							<div className="col-12 col-lg-7">
								<DropdownLinks />
							</div>

							<div className="d-none d-lg-block col-lg-5">
								<div
									className="vw-50 h-100 bg-img-cover bg-pos-center-center position-absolute"
									style={{
										backgroundImage: `url(${
											new URL(
												`/static/assets/images/banners/banner-2.jpg`,
												api_endpoint
											).href
										})`,
									}}
								></div>
							</div>
						</div>
					</div>
				</div>
			</li>
			<li className="nav-item me-lg-4 dropdown position-static">
				<a
					className="nav-link fw-bolder dropdown-toggle py-lg-4"
					href="#"
					role="button"
					data-bs-toggle="dropdown"
					aria-haspopup="true"
					aria-expanded="false"
				>
					Womenswear
				</a>

				<div className="dropdown-menu dropdown-megamenu">
					<div className="container">
						<div className="row g-0">
							<div className="col-12 col-lg-7">
								<DropdownLinks />
							</div>

							<div className="d-none d-lg-block col-lg-5">
								<div
									className="vw-50 h-100 bg-img-cover bg-pos-center-center position-absolute"
									style={{
										backgroundImage: `url(${
											new URL(
												`/static/assets/images/banners/banner-4.jpg`,
												api_endpoint
											).href
										})`,
									}}
								></div>
							</div>
						</div>
					</div>
				</div>
			</li>
			<li className="nav-item me-lg-4">
				<a className="nav-link fw-bolder py-lg-4" href="#">
					Kidswear
				</a>
			</li>
			<li className="nav-item me-lg-4">
				<a className="nav-link fw-bolder py-lg-4" href="#">
					Sale Items
				</a>
			</li>
			<li className="nav-item dropdown me-lg-4">
				<a
					className="nav-link fw-bolder dropdown-toggle py-lg-4"
					href="#"
					role="button"
					data-bs-toggle="dropdown"
					aria-haspopup="true"
					aria-expanded="false"
				>
					Demo Pages
				</a>
				<ul className="dropdown-menu">
					<li>
						<a className="dropdown-item" href="/">
							Homepage
						</a>
					</li>
					<li>
						<a className="dropdown-item" href="/category">
							Category
						</a>
					</li>
					<li>
						<a className="dropdown-item" href="/product">
							Product
						</a>
					</li>
					<li>
						<a className="dropdown-item" href="/cart">
							Cart
						</a>
					</li>
					<li>
						<a className="dropdown-item" href="/checkout">
							Checkout
						</a>
					</li>
				</ul>
			</li>
		</ul>
	);
};
