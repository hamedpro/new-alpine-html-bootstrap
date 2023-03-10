import React from "react";
import { LogoFull } from "../../logo/LogoFull";
import { Menu } from "../menus/Menu";
export const NavBar = ({ classList }) => {
	return (
		<nav
			class={`navbar navbar-expand-lg navbar-light bg-white border-bottom mx-0 p-0 flex-column  ${classList}`}
		>
			<div class="w-100 pb-lg-0 pt-lg-0 pt-4 pb-3">
				<div class="container-fluid d-flex justify-content-between align-items-center flex-wrap">
					<a class="navbar-brand fw-bold fs-3 m-0 p-0 flex-shrink-0" href="/">
						<LogoFull />
					</a>

					<div
						class="ms-5 flex-shrink-0 collapse navbar-collapse navbar-collapse-light w-auto flex-grow-1"
						id="navbarNavDropdown"
					>
						<button
							class="btn btn-link px-2 text-decoration-none navbar-toggler border-0 position-absolute top-0 end-0 mt-3 me-2"
							data-bs-toggle="collapse"
							data-bs-target="#navbarNavDropdown"
							aria-controls="navbarNavDropdown"
							aria-expanded="false"
							aria-label="Toggle navigation"
						>
							<i class="ri-close-circle-line ri-2x"></i>
						</button>

						<Menu />
					</div>

					<ul class="list-unstyled mb-0 d-flex align-items-center">
						<li class="d-inline-block d-lg-none">
							<button
								class="btn btn-link px-2 text-decoration-none navbar-toggler border-0 d-flex align-items-center"
								data-bs-toggle="collapse"
								data-bs-target="#navbarNavDropdown"
								aria-controls="navbarNavDropdown"
								aria-expanded="false"
								aria-label="Toggle navigation"
							>
								<i class="ri-menu-line ri-lg align-middle"></i>
							</button>
						</li>

						<li class="ms-1 d-inline-block">
							<button
								class="btn btn-link px-2 text-decoration-none d-flex align-items-center"
								data-pr-search
							>
								<i class="ri-search-2-line ri-lg align-middle"></i>
							</button>
						</li>

						<li class="ms-1 d-none d-lg-inline-block">
							<a
								class="btn btn-link px-2 py-0 text-decoration-none d-flex align-items-center"
								href="#"
							>
								<i class="ri-heart-line ri-lg align-middle"></i>
							</a>
						</li>

						<li class="ms-1 d-none d-lg-inline-block">
							<a
								class="btn btn-link px-2 text-decoration-none d-flex align-items-center"
								href="#"
							>
								<i class="ri-user-line ri-lg align-middle"></i>
							</a>
						</li>

						<li class="ms-1 d-inline-block position-relative">
							<button
								class="btn btn-link px-2 text-decoration-none d-flex align-items-center disable-child-pointer"
								data-bs-toggle="offcanvas"
								data-bs-target="#offcanvasCart"
								aria-controls="offcanvasCart"
							>
								<i class="ri-shopping-cart-2-line ri-lg align-middle position-relative z-index-10"></i>
								<span class="fs-xs fw-bolder f-w-5 f-h-5 bg-orange rounded-lg d-block lh-1 pt-1 position-absolute top-0 end-0 z-index-20 mt-2 text-white">
									2
								</span>
							</button>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
};
