import React, { useContext, useState } from "react";
import { AsideMenuOne } from "../partials/category/asides/AsideMenuOne";
import { BreadcrumbsTwo } from "../partials/breadcrumbs/BreadcrumbsTwo";
import { Pagination } from "../partials/category/pagination/Pagination";
import { ToolbarTop } from "../partials/category/toolbars/ToolbarTop";
import { NavBar } from "../partials/header/navbar/NavBar.jsx";
import { ListingCard } from "../partials/category/listing-cards/ListingCard";
import { GlobalContext } from "../GlobalContext";
import { Link } from "react-router-dom";
export const ProductsShowcase = ({ breadcrumb_parts, main_title, product_ids, description }) => {
	var { products, product_categories } = useContext(GlobalContext).global_context_state;
	//products will be shown below sorted just like their order in product_ids

	var [current_page, set_current_page] = useState(1);
	//shows current active page
	//the first 10 products will be rendered in each page

	return (
		<>
			<NavBar />
			<section className={`mt-0`}>
				<div
					className="py-6 bg-img-cover bg-dark bg-overlay-gradient-dark position-relative overflow-hidden mb-4 bg-pos-center-center"
					style={{
						backgroundImage: `url(${
							new URL(`/static/assets/images/banners/banner-1.jpg`, api_endpoint).href
						})`,
					}}
				>
					<div
						className="container position-relative z-index-20"
						data-aos="fade-right"
						data-aos-delay="300"
						style={{
							display: "flex",
							alignItems: "end",
							textAlign: "right",
							flexDirection: "column",
						}}
					>
						<BreadcrumbsTwo parts={breadcrumb_parts} />
						<h1 className="fw-bold display-6 mb-4 text-white">
							{main_title} ({product_ids.length})
						</h1>
						<div className="col-12 col-md-6">
							<p className="lead text-white mb-0">{description}</p>
						</div>
					</div>
				</div>

				<div className="container">
					<div className="row">
						<div className="d-none d-lg-flex col-lg-3">
							<div className="pe-4">
								<AsideMenuOne />
							</div>
						</div>

						<div className="col-12 col-lg-9">
							<ToolbarTop />

							<div className="row g-4 mb-5">
								{products.slice(
									(current_page - 1) * 10,
									(current_page - 1) * 10 + 1
								).length === 0 && (
									<div className="d-flex justify-content-center align-items-center">
										<h1>هیچ کالایی برای نمایش وجود ندارد</h1>
									</div>
								)}
								{products
									.slice((current_page - 1) * 10, (current_page - 1) * 10 + 1)
									.map((i) => (
										<div className="col-12 col-sm-6 col-md-4" key={i._id}>
											<ListingCard {...i} />
										</div>
									))}
								{products.slice(
									(current_page - 1) * 10,
									(current_page - 1) * 10 + 1
								).length !== 0 && (
									<div className="d-none d-md-flex col-md-8">
										<div className="w-100 h-100 position-relative">
											<div
												className="position-absolute w-50 h-100 start-0 bottom-0 top-0 bg-pos-center-center bg-img-cover"
												style={{
													backgroundImage: `url(${
														new URL(
															`/static/assets/images/banners/banner-3.jpg`,
															api_endpoint
														).href
													})`,
												}}
											></div>
											<div className="position-absolute w-50 h-100 bg-light end-0 top-0 bottom-0 d-flex justify-content-center align-items-center">
												<div className="px-4 text-center">
													<h4 className="fs-4 fw-bold mb-4">
														یه متن فرضی
													</h4>
													<p className="mb-4">
														یه متن فرضی طولانی و طولانی و طولانی و
														طولانی
													</p>
													<a
														href="#"
														className="text-link-border border-2 pb-1 fw-bolder"
													>
														همین الان خریداری کنید
													</a>
												</div>
											</div>
										</div>
									</div>
								)}

								{products
									.slice(
										(current_page - 1) * 10 + 1,
										(current_page - 1) * 10 + 1 + 9
									)
									.map((i) => (
										<div className="col-12 col-sm-6 col-md-4" key={i._id}>
											<ListingCard {...i} />
										</div>
									))}
							</div>

							<Pagination
								onPageChange={(page_number) => set_current_page(page_number)}
							/>

							<div className="border-top mt-5 pt-5" rtl="rtl">
								<p className="lead fw-bolder" style={{ textAlign: "right" }}>
									دسته بندی های تصادفی
								</p>
								<div className="d-flex flex-wrap justify-content-end align-items-center">
									{product_categories.map((i) => (
										<Link
											key={i._id}
											className="btn btn-sm btn-outline-dark rounded-pill me-2 mb-2 mb-md-0 text-white-hover"
											to={`/categories/${i._id}`}
										>
											{i.title}
										</Link>
									))}
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};
