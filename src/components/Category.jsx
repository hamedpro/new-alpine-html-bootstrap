import React, { useContext } from "react";
import { AsideMenuOne } from "../partials/category/asides/AsideMenuOne";
import { BreadcrumbsTwo } from "../partials/breadcrumbs/BreadcrumbsTwo";
import { Pagination } from "../partials/category/pagination/Pagination";
import { ToolbarTop } from "../partials/category/toolbars/ToolbarTop";
import { NavBar } from "../partials/header/navbar/NavBar.jsx";
import { ListingCard } from "../partials/category/listing-cards/ListingCard";
import { GlobalContext } from "../GlobalContext";
export const Category = () => {
	var products = useContext(GlobalContext).global_context_state.products;
	if (products === undefined) return <h1>still loading products ...</h1>;
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
					>
						<BreadcrumbsTwo />
						<h1 className="fw-bold display-6 mb-4 text-white">Latest Arrivals (121)</h1>
						<div className="col-12 col-md-6">
							<p className="lead text-white mb-0">
								Move, stretch, jump and hike in our latest waterproof arrivals.
								We've got you covered for your hike or climbing sessions, from
								Gortex jackets to lightweight waterproof pants. Discover our latest
								range of outdoor clothing.
							</p>
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
								{products &&
									products.slice(0, 4).map((i) => (
										<div className="col-12 col-sm-6 col-md-4" key={i._id}>
											<ListingCard {...i} />
										</div>
									))}

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
													Built for adventure
												</h4>
												<p className="mb-4">
													The perfect grab-and-go layer for every hiking
													adventure
												</p>
												<a
													href="#"
													className="text-link-border border-2 pb-1 fw-bolder"
												>
													Shop Now
												</a>
											</div>
										</div>
									</div>
								</div>
								{products &&
									products.slice(0, 6).map((i) => (
										<div className="col-12 col-sm-6 col-md-4" key={i._id }>
											<ListingCard {...i} />
										</div>
									))}
							</div>

							<Pagination />

							<div className="border-top mt-5 pt-5">
								<p className="lead fw-bolder">Related Categories</p>
								<div className="d-flex flex-wrap justify-content-start align-items-center">
									<a
										className="btn btn-sm btn-outline-dark rounded-pill me-2 mb-2 mb-md-0 text-white-hover"
										href="#"
									>
										Hiking Shoes
									</a>
									<a
										className="btn btn-sm btn-outline-dark rounded-pill me-2 mb-2 mb-md-0 text-white-hover"
										href="#"
									>
										Waterproof Trousers
									</a>
									<a
										className="btn btn-sm btn-outline-dark rounded-pill me-2 mb-2 mb-md-0 text-white-hover"
										href="#"
									>
										Hiking Shirts
									</a>
									<a
										className="btn btn-sm btn-outline-dark rounded-pill me-2 mb-2 mb-md-0 text-white-hover"
										href="#"
									>
										Jackets
									</a>
									<a
										className="btn btn-sm btn-outline-dark rounded-pill me-2 mb-2 mb-md-0 text-white-hover"
										href="#"
									>
										Gilets
									</a>
									<a
										className="btn btn-sm btn-outline-dark rounded-pill me-2 mb-2 mb-md-0 text-white-hover"
										href="#"
									>
										Hiking Socks
									</a>
									<a
										className="btn btn-sm btn-outline-dark rounded-pill me-2 mb-2 mb-md-0 text-white-hover"
										href="#"
									>
										Rugsacks
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};
