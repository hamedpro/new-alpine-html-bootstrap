import React from "react";
import { BreadcrumbsOne } from "../partials/breadcrumbs/BreadcrumbsOne";
import { ImagesSlideshowVertical } from "../partials/product/gallery/ImagesSlideshowVertical";
import { InfoOne } from "../partials/product/info/InfoOne";
import { TabsOne } from "../partials/product/tabs/TabsOne";
import { SwiperProductCarouselScrollbar } from "../partials/swiper/SwiperProductCarouselScrollbar";
import { NavBar } from "../partials/header/navbar/NavBar";
import { entries } from "../data/category-products.json";
export const Product = () => {
	return (
		<>
			<NavBar />
			<section className="mt-5">
				<section className="container">
					<BreadcrumbsOne />

					<div className="row g-5">
						<div className="col-12 col-lg-7">
							<ImagesSlideshowVertical />
						</div>

						<div className="col-12 col-lg-5">
							<InfoOne />
						</div>
					</div>
				</section>

				<section>
					<div className="mt-7 pt-5 border-top">
						<div className="container">
							<TabsOne />
						</div>
					</div>
				</section>

				<div className="container my-8">
					<h3 className="fs-4 fw-bold mb-5 text-center">You May Also Like</h3>
					<SwiperProductCarouselScrollbar entries={entries} />
				</div>
			</section>
		</>
	);
};
