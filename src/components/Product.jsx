import React, { useContext } from "react";
import { BreadcrumbsOne } from "../partials/breadcrumbs/BreadcrumbsOne";
import { ImagesSlideshowVertical } from "../partials/product/gallery/ImagesSlideshowVertical";
import { InfoOne } from "../partials/product/info/InfoOne";
import { TabsOne } from "../partials/product/tabs/TabsOne";
import { SwiperProductCarouselScrollbar } from "../partials/swiper/SwiperProductCarouselScrollbar";
import { NavBar } from "../partials/header/navbar/NavBar";
import { GlobalContext } from "../GlobalContext";
import { useParams } from "react-router-dom";
export const Product = () => {
	var { product_id } = useParams();
	var products = useContext(GlobalContext).global_context_state.products;
	var product = products.find((i) => i._id === product_id);
	return (
		<>
			<NavBar />
			<section className="mt-5">
				<section className="container">
					<BreadcrumbsOne />

					<div className="row g-5">
						<div className="col-12 col-lg-7">
							<ImagesSlideshowVertical product_document={product} />
						</div>

						<div className="col-12 col-lg-5">
							<InfoOne product_document={product} />
						</div>
					</div>
				</section>

				<section>
					<div className="mt-7 pt-5 border-top">
						<div className="container">
							<TabsOne product={product} />
						</div>
					</div>
				</section>

				<div className="container my-8 position-relative">
					<h3 className="fs-4 fw-bold mb-5 text-center">ممکن است بپسندید</h3>
					<SwiperProductCarouselScrollbar products={products} />
				</div>
			</section>
		</>
	);
};
