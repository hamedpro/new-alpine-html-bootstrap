import React from "react";
import { NavBar } from "./NavBar";
import { Footer } from "./Footer";
import { OffCanvas } from "./OffCanvas";
import { SearchOverlay } from "./SearchOverlay";
import { BreadCrumbsOne } from "./BreadCrumbsOne";
import { ImagesSlideshowVertical } from "./ImagesSlideshowVertical";
import { InfoOne } from "./InfoOne";
import { TabsOne } from "./TabsOne";
import { SwiperProductCarouselScrollbar } from "./SwiperProductCarouselScrollbar";

export const Product = () => {
	return (
		<>
			<NavBar />
			<section class="mt-5 {{ config.classes.content }}">
				<section class="container">
					<BreadCrumbsOne />

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
					<SwiperProductCarouselScrollbar /> {/*  entries=category-products.entries */}
				</div>
			</section>
			<Footer />
			<OffCanvas />
			<SearchOverlay />
		</>
	);
};
