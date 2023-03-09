import React from "react";
import svg_divider_top_lr from "../svg/svg-divider-top-lr.svg";
import svg_divider_bottom_rl from "../svg/svg-divider-bottom-rl.svg";
export const BannerSaleExtended = () => {
	return (
		<>
			<div class="position-absolute text-white z-index-50 top-0 end-0 start-0">
				<img src={svg_divider_top_lr} />
			</div>

			<div class="py-7 py-lg-10">
				<div class="container text-white py-4 py-md-6">
					<div class="row g-5 align-items-center">
						<div
							class="col-12 col-lg-4 justify-content-center d-flex justify-content-lg-start"
							data-aos="fade-right"
							data-aos-delay="250"
						>
							<h3 class="fs-1 fw-bold mb-0 lh-1">
								<i class="ri-timer-flash-line align-bottom"></i> Sale Extended
							</h3>
						</div>
						<div
							class="col-12 col-lg-4 d-flex justify-content-center flex-column"
							data-aos="fade-up"
							data-aos-delay="250"
						>
							<a
								href="{{webRoot}}/category.html"
								class="btn btn-orange btn-orange-chunky text-white my-1"
							>
								<span>Shop Menswear</span>
							</a>
							<a
								href="{{webRoot}}/category.html"
								class="btn btn-orange btn-orange-chunky text-white my-1"
							>
								<span>Shop Womenswear</span>
							</a>
							<a
								href="{{webRoot}}/category.html"
								class="btn btn-orange btn-orange-chunky text-white my-1"
							>
								<span>Shop Kidswear</span>
							</a>
							<a
								href="{{webRoot}}/category.html"
								class="btn btn-orange btn-orange-chunky text-white my-1"
							>
								<span>Shop Accessories</span>
							</a>
						</div>
						<div
							class="col-12 col-lg-4 text-center text-lg-end"
							data-aos="fade-left"
							data-aos-delay="250"
						>
							<p class="lead fw-bolder">Discount applied to products at checkout.</p>
							<a
								class="text-white fw-bolder text-link-border border-2 border-white align-self-start pb-1 transition-all opacity-50-hover"
								href="#"
							>
								Exclusions apply. Learn more{" "}
								<i class="ri-arrow-right-line align-bottom"></i>
							</a>
						</div>
					</div>
				</div>
			</div>

			<div class="position-absolute z-index-50 text-white bottom-0 start-0 end-0">
				<img
					src={svg_divider_bottom_rl}
					colorClass="text-white"
					positionClass="bottom-0 start-0 end-0"
				/>
			</div>
		</>
	);
};
