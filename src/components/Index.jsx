import React, { useContext } from "react";
import { NavBar } from "../partials/header/navbar/NavBar";
import { SwiperHeroSlideshow } from "../partials/swiper/SwiperHeroSlideshow";
import { SwiperProductCarouselScrollbar } from "../partials/swiper/SwiperProductCarouselScrollbar";
import { BannerImageHotspot } from "../partials/banners/BannerImageHotspot";
import { SwiperLinkedCarouselSmall } from "../partials/swiper/SwiperLinkedCarouselSmall";
import { SwiperLinkedCarouselLarge } from "../partials/swiper/SwiperLinkedCarouselLarge";
import { BannerSaleExtended } from "../partials/banners/BannerSaleExtended";
import { ReviewsCompany } from "../partials/reviews/ReviewsCompany";
import { Link } from "react-router-dom";
import logo1 from "../assets/images/logos/logo-1.svg";
import logo2 from "../assets/images/logos/logo-2.svg";
import logo9 from "../assets/images/logos/logo-9.svg";
import logo4 from "../assets/images/logos/logo-4.svg";
import logo5 from "../assets/images/logos/logo-5.svg";
import logo7 from "../assets/images/logos/logo-7.svg";
import { GlobalContext } from "../GlobalContext";
export const Index = () => {
	//console.log("global context", useContext(GlobalContext));
	var products = useContext(GlobalContext).global_context_state.products;
	if (products === undefined) return <h1>still loading products ... </h1>;
	return (
		<>
			<div className="position-relative z-index-30">
				<NavBar classList="border-0 position-absolute w-100 z-index-30 bg-transparent navbar-dark navbar-transparent bg-white-hover transition-all" />
			</div>
			<section className="mt-0">
				<section className="vh-100 position-relative bg-overlay-dark ">
					<div className="container d-flex h-100 justify-content-center align-items-center position-relative z-index-10">
						<div className="d-flex justify-content-center align-items-center h-100 position-relative z-index-10 text-white">
							<div>
								<h1
									className="display-1 fw-bold px-2 px-md-5 text-center mx-auto col-lg-8 mt-md-0"
									data-aos="fade-up"
									data-aos-delay="1000"
								>
									Where will your next adventure take you?
								</h1>
								<div data-aos="fade-in" data-aos-delay="2000">
									<div className="d-md-flex justify-content-center mt-4 mb-3 my-md-5">
										<Link
											to="/category"
											className="btn btn-skew-left btn-orange btn-orange-chunky text-white mx-1 w-100 w-md-auto mb-2 mb-md-0"
										>
											<span>
												Shop Menswear{" "}
												<i className="ri-arrow-right-line align-middle fw-bold"></i>
											</span>
										</Link>
										<Link
											to="/category"
											className="btn btn-skew-left btn-orange btn-orange-chunky text-white mx-1 w-100 w-md-auto mb-2 mb-md-0"
										>
											<span>
												Shop Womenswear{" "}
												<i className="ri-arrow-right-line align-middle fw-bold"></i>
											</span>
										</Link>
									</div>
									<i
										className="ri-mouse-line d-block text-center animation-float ri-2x transition-all opacity-50-hover text-white"
										data-pixr-scrollto
										data-target=".brand-section"
										data-aos="fade-up"
										data-aos-delay="700"
									></i>
								</div>
							</div>
						</div>
					</div>
					<div className="position-absolute z-index-1 top-0 bottom-0 start-0 end-0">
						<SwiperHeroSlideshow />
					</div>
				</section>

				<div className="mb-lg-7 bg-light py-4" data-aos="fade-in">
					<div className="container">
						<div className="row gx-3 align-items-center">
							<div className="col-12 justify-content-center justify-content-md-between align-items-center d-flex flex-wrap">
								<div className="me-2 f-w-20 m-4 ms-md-0 mt-md-0 mb-md-0">
									<a
										className="d-block"
										href="/category"
										data-bs-toggle="tooltip"
										data-bs-placement="top"
										title="Shop Kathmandu"
									>
										<img className="img-fluid d-table mx-auto" src={logo1} />
									</a>
								</div>
								<div className="me-2 f-w-20 m-4 ms-md-0 mt-md-0 mb-md-0">
									<a
										className="d-block"
										href="/category"
										data-bs-toggle="tooltip"
										data-bs-placement="top"
										title="Shop Billabong"
									>
										<img className="img-fluid d-table mx-auto" src={logo2} />
									</a>
								</div>
								<div className="me-2 f-w-20 m-4 ms-md-0 mt-md-0 mb-md-0">
									<a
										className="d-block"
										href="/category"
										data-bs-toggle="tooltip"
										data-bs-placement="top"
										title="Shop Oakley"
									>
										<img className="img-fluid d-table mx-auto" src={logo9} />
									</a>
								</div>
								<div className="me-2 f-w-20 m-4 ms-md-0 mt-md-0 mb-md-0">
									<a
										className="d-block"
										href="/category"
										data-bs-toggle="tooltip"
										data-bs-placement="top"
										title="Shop Patagonia"
									>
										<img className="img-fluid d-table mx-auto" src={logo4} />
									</a>
								</div>
								<div className="me-2 f-w-20 m-4 ms-md-0 mt-md-0 mb-md-0">
									<a
										className="d-block"
										href="/category"
										data-bs-toggle="tooltip"
										data-bs-placement="top"
										title="Shop North Face"
									>
										<img className="img-fluid d-table mx-auto" src={logo5} />
									</a>
								</div>
								<div className="me-2 f-w-20 m-4 ms-md-0 mt-md-0 mb-md-0">
									<a
										className="d-block"
										href="/category"
										data-bs-toggle="tooltip"
										data-bs-placement="top"
										title="Shop Salomon"
									>
										<img className="img-fluid d-table mx-auto" src={logo7} />
									</a>
								</div>
								<a href="/category" className="btn btn-link fw-bolder">
									Explore All Brands{" "}
									<i className="ri-arrow-right-line align-bottom fw-bold"></i>
								</a>
							</div>
						</div>
					</div>
				</div>

				<section className="mb-9 mt-5" data-aos="fade-up">
					<div className="container">
						<div className="w-md-50 mb-5">
							<p className="small fw-bolder text-uppercase tracking-wider mb-2 text-muted">
								Summer Favourites
							</p>
							<h2 className="display-5 fw-bold mb-3">Staff Picks</h2>
							<p className="lead">
								We've sorted through our feed to put together a collection of our
								products perfect for a summer outdoors.
							</p>
						</div>
						{products && <SwiperProductCarouselScrollbar products={products} />}
					</div>
				</section>

				<section className="my-10 position-relative">
					<BannerImageHotspot />
				</section>

				<section className="py-5" data-aos="fade-in">
					<div className="container">
						<div className="row g-5">
							<div className="col-12 col-md-7" data-aos="fade-right">
								<div className="m-0">
									<p className="small fw-bolder text-uppercase tracking-wider mb-2 text-muted">
										Hiking Essentials
									</p>
									<h2 className="display-5 fw-bold mb-6">
										Our Latest Must-Have Products
									</h2>
									<div className="px-8 position-relative">
										<SwiperLinkedCarouselSmall />

										<div className="swiper-prev-linked position-absolute top-50 start-0 mt-n8 cursor-pointer transition-all opacity-50-hover">
											<i className="ri-arrow-left-s-line ri-2x"></i>
										</div>
										<div className="swiper-next-linked position-absolute top-50 end-0 me-3 mt-n8 cursor-pointer transition-all opacity-50-hover">
											<i className="ri-arrow-right-s-line ri-2x"></i>
										</div>
									</div>
								</div>
							</div>
							<div className="col-md-5 d-none d-md-flex" data-aos="fade-left">
								<div className="w-100 h-100">
									<SwiperLinkedCarouselLarge />
								</div>
							</div>
						</div>
					</div>
				</section>

				<section
					className="position-relative my-5 my-md-7 my-lg-9 bg-dark"
					data-aos="fade-in"
				>
					<BannerSaleExtended />
				</section>

				<section>
					<div className="container" data-aos="fade-in">
						<h2 className="fs-1 fw-bold mb-3 text-center mb-5">Customer Reviews</h2>
						<ReviewsCompany />
					</div>
				</section>
			</section>
		</>
	);
};
