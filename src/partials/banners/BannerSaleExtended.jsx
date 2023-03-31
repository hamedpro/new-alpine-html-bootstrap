import React from "react";
import svg_divider_top_lr from "../svg/svg-divider-top-lr.svg";
import svg_divider_bottom_rl from "../svg/svg-divider-bottom-rl.svg";
export const BannerSaleExtended = () => {
	return (
		<>
			<div className="position-absolute text-white z-index-50 top-0 end-0 start-0">
				<img src={svg_divider_top_lr} />
			</div>

			<div className="py-7 py-lg-10">
				<div className="container text-white py-4 py-md-6">
					<div className="row g-5 align-items-center">
						<div
							className="col-12 col-lg-4 justify-content-center d-flex justify-content-lg-start"
							data-aos="fade-right"
							data-aos-delay="250"
						>
							<h3 className="fs-1 fw-bold mb-0 lh-1">
								<i className="ri-timer-flash-line align-bottom"></i> تخفیف ها تمدید
								شدند !
							</h3>
						</div>
						<div
							className="col-12 col-lg-4 d-flex justify-content-center flex-column"
							data-aos="fade-up"
							data-aos-delay="250"
						>
							<a
								href="/category"
								className="btn btn-orange btn-orange-chunky text-white my-1"
							>
								<span>دسته بندی اول</span>
							</a>
							<a
								href="/category"
								className="btn btn-orange btn-orange-chunky text-white my-1"
							>
								<span>دسته بندی دو</span>
							</a>
							<a
								href="/category"
								className="btn btn-orange btn-orange-chunky text-white my-1"
							>
								<span>دسته بندی سه</span>
							</a>
							<a
								href="/category"
								className="btn btn-orange btn-orange-chunky text-white my-1"
							>
								<span>دسته بندی چهار</span>
							</a>
						</div>
						<div
							className="col-12 col-lg-4 text-center text-lg-end"
							data-aos="fade-left"
							data-aos-delay="250"
						>
							<p className="lead fw-bolder">یک جمله فرضی اینجا نمایش داده خواهد شد</p>
							<a
								className="text-white fw-bolder text-link-border border-2 border-white align-self-start pb-1 transition-all opacity-50-hover"
								href="#"
							>
								یه جمله فرضی دیگه . اطلاعات بیشتر{" "}
								<i className="ri-arrow-right-line align-bottom"></i>
							</a>
						</div>
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
};
