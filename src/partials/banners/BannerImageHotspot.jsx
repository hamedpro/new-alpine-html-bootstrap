import React, { useContext } from "react";
import svg_divider_top_lr from "../svg/svg-divider-top-lr.svg";
import svg_divider_bottom_rl from "../svg/svg-divider-bottom-rl.svg";
import background_image from "../../assets/images/image.avif";
import { GlobalContext } from "../../GlobalContext";
export const BannerImageHotspot = () => {
	var { products } = useContext(GlobalContext).global_context_state;
	if (products === undefined) {
		return <h1>loading products ...</h1>;
	} else {
		return (
			<>
				<div className="position-absolute z-index-50 text-white top-0 start-0 end-0">
					<img
						src={svg_divider_top_lr}
						/* colorclassName="text-white"
					positionclassName="top-0 start-0 end-0" */
					/>
				</div>

				<div
					className="w-100 h-100 bg-img-cover bg-pos-center-center hotspot-container py-5 py-md-7 py-lg-10"
					style={{
						backgroundImage: `url(${background_image})`,
					}}
				>
					<div
						className="container py-lg-8 position-relative z-index-10 d-flex align-items-center"
						data-aos="fade-left"
					>
						<div className="py-8 d-flex justify-content-end align-items-start align-items-lg-end flex-column col-lg-4 text-lg-end">
							<p className="small fw-bolder text-uppercase tracking-wider mb-2 text-muted">
								Extreme Performance
							</p>
							<h2 className="display-5 fw-bold mb-3">The North Face</h2>
							<p className="lead d-none d-lg-block">
								Be ready all year round with our selection of North Face outdoor
								jackets — perfect for any time of the year and year round. Choose
								from a variety of colour shades and styles to warm you up in cold
								conditions.
							</p>
							<a className="text-decoration-none fw-bolder" href="#">
								Shop The North Face &rarr;
							</a>
						</div>
					</div>
				</div>

				<div className="position-absolute z-index-50 text-white bottom-0 start-0 end-0">
					<img
						src={svg_divider_bottom_rl}
						/* colorclassName="text-white"
					positionclassName="bottom-0 start-0 end-0" */
					/>
				</div>
			</>
		);
	}
};
