import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { GlobalContext } from "../../../GlobalContext";
import { DropdownLinks } from "./DropdownLinks";

export const Menu = () => {
	var { products, product_categories, posts } = useContext(GlobalContext).global_context_state;
	if (posts === undefined || products === undefined || product_categories === undefined) return;
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
					محصولات ما
				</a>

				<div className="dropdown-menu dropdown-megamenu">
					<div className="container">
						<div className="row g-0">
							<div className="col-12 col-lg-7">
								<DropdownLinks
									data={[
										{
											header: "دسته بندی ها",
											items: product_categories.map((product_category) => ({
												link: `/categories/${product_category._id}`,
												text: product_category.title,
											})),
											view_all_link: "/categories",
										},
										{
											header: "محصولات",
											items: products.map((product) => ({
												link: `/products/${product._id}`,
												text: product.title,
											})),
											view_all_link: "/products",
										},
									]}
								/>
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
					پست ها
				</a>

				<div className="dropdown-menu dropdown-megamenu">
					<div className="container">
						<div className="row g-0">
							<div className="col-12 col-lg-7">
								<DropdownLinks
									data={[
										{
											header: "آخرین پست ها",

											items: posts.map((post) => ({
												link: `/posts/${post._id}`,
												text: post.title,
											})),

											view_all_link: "/posts",
										},
									]}
								/>
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
				<Link className="nav-link fw-bolder py-lg-4" to="/about-us">
					درباره ما
				</Link>
			</li>
			<li className="nav-item me-lg-4">
				<Link className="nav-link fw-bolder py-lg-4" to="/contact-us">
					تماس با ما
				</Link>
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
					دسترسی سریع
				</a>
				<ul className="dropdown-menu">
					<li>
						<Link className="dropdown-item" to="/faq">
							سوالات متداول
						</Link>
					</li>
					<li>
						<Link className="dropdown-item" to="/support-messages/new">
							درخواست پشتیبانی آنلاین
						</Link>
					</li>
					<li>
						<Link className="dropdown-item" to="/terms-of-service">
							شرایط و قوانین
						</Link>
					</li>
					<li>
						<Link className="dropdown-item" to="/download_center">
							دانلود ها
						</Link>
					</li>
				</ul>
			</li>
		</ul>
	);
};
