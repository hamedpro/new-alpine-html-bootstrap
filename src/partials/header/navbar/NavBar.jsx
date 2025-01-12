import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { GlobalContext } from "../../../GlobalContext";
import { LogoFull } from "../../logo/LogoFull";
import { Menu } from "../menus/Menu";
export const NavBar = ({ classList }) => {
	var { cart_items } = useContext(GlobalContext).global_context_state;
	return (
		<nav
			className={`navbar navbar-expand-lg navbar-light bg-white border-bottom mx-0 p-0 flex-column  ${classList}`}
		>
			<div className="w-100 pb-lg-0 pt-lg-0 pt-4 pb-3">
				<div className="container-fluid d-flex justify-content-between align-items-center flex-wrap">
					<a className="navbar-brand fw-bold fs-3 m-0 p-0 flex-shrink-0" href="/">
						<LogoFull />
					</a>

					<div
						className="ms-5 flex-shrink-0 collapse navbar-collapse navbar-collapse-light w-auto flex-grow-1"
						id="navbarNavDropdown"
					>
						<button
							className="btn btn-link px-2 text-decoration-none navbar-toggler border-0 position-absolute top-0 end-0 mt-3 me-2"
							data-bs-toggle="collapse"
							data-bs-target="#navbarNavDropdown"
							aria-controls="navbarNavDropdown"
							aria-expanded="false"
							aria-label="Toggle navigation"
						>
							<i className="ri-close-circle-line ri-2x"></i>
						</button>

						<Menu />
					</div>

					<ul className="list-unstyled mb-0 d-flex align-items-center">
						<li className="d-inline-block d-lg-none">
							<button
								className="btn btn-link px-2 text-decoration-none navbar-toggler border-0 d-flex align-items-center"
								data-bs-toggle="collapse"
								data-bs-target="#navbarNavDropdown"
								aria-controls="navbarNavDropdown"
								aria-expanded="false"
								aria-label="Toggle navigation"
							>
								<i className="ri-menu-line ri-lg align-middle"></i>
							</button>
						</li>

						<li className="ms-1 d-inline-block">
							<button
								className="btn btn-link px-2 text-decoration-none d-flex align-items-center"
								data-pr-search
								onClick={() => {
									document.body.classList.add("search-active");
								}}
							>
								<i className="ri-search-2-line ri-lg align-middle"></i>
							</button>
						</li>

						<li className="ms-1 d-none d-lg-inline-block">
							<a
								className="btn btn-link px-2 py-0 text-decoration-none d-flex align-items-center"
								href="#"
							>
								<i className="ri-heart-line ri-lg align-middle"></i>
							</a>
						</li>

						<li className="ms-1 d-none d-lg-inline-block">
							<Link
								className="btn btn-link px-2 text-decoration-none d-flex align-items-center"
								to={
									window.localStorage.getItem("user_id")
										? "/my-profile"
										: "/login"
								}
							>
								<i className="ri-user-line ri-lg align-middle"></i>
							</Link>
						</li>

						<li className="ms-1 d-inline-block position-relative">
							<button
								className="btn btn-link px-2 text-decoration-none d-flex align-items-center disable-child-pointer"
								data-bs-toggle="offcanvas"
								data-bs-target="#offcanvasCart"
								aria-controls="offcanvasCart"
							>
								<i className="ri-shopping-cart-2-line ri-lg align-middle position-relative z-index-10"></i>
								{cart_items.filter(
									(cart_item) =>
										cart_item.user_id === window.localStorage.getItem("user_id")
								).length !== 0 && (
									<span className="fs-xs fw-bolder f-w-5 f-h-5 bg-orange rounded-lg d-block lh-1 pt-1 position-absolute top-0 end-0 z-index-20 mt-2 text-white">
										{
											cart_items.filter(
												(cart_item) =>
													cart_item.user_id ===
													window.localStorage.getItem("user_id")
											).length
										}
									</span>
								)}
							</button>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
};
