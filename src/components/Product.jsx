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
			<section class="mt-5">
				<section class="container">
					<BreadcrumbsOne />

					<div class="row g-5">
						<div class="col-12 col-lg-7">
							<ImagesSlideshowVertical />
						</div>

						<div class="col-12 col-lg-5">
							<InfoOne />
						</div>
					</div>
				</section>

				<section>
					<div class="mt-7 pt-5 border-top">
						<div class="container">
							<TabsOne />
						</div>
					</div>
				</section>

				<div class="container my-8">
					<h3 class="fs-4 fw-bold mb-5 text-center">You May Also Like</h3>
					<SwiperProductCarouselScrollbar entries={entries} />
				</div>
			</section>
		</>
	);
};
