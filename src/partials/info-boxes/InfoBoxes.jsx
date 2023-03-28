import React from "react";
export const InfoBoxes = () => {
	return (
		<div className="row">
			<div className="col-12 col-md-4 mb-3 mb-xxl-0 text-white" data-aos="fade-left">
				<div className="border-white-opacity border-2 p-4 d-flex flex-column flex-lg-row justify-content-start align-items-start h-100">
					<i className="ri-questionnaire-line ri-lg mb-3 mb-lg-0"></i>
					<div className="ms-lg-4">
						<p className="mb-1 lh-1 fw-bold">خدمات مشتریان</p>
						<small className="text-muted">
							<a className="text-muted" href="#">
								اینجا کلیک کنید
							</a>{" "}
							تا با تیم پشتیبانی ما صحبت کنید
						</small>
					</div>
				</div>
			</div>

			<div
				className="col-12 col-md-4 mb-3 mb-xxl-0 text-white"
				data-aos="fade-left"
				data-aos-delay="250"
			>
				<div className="border-white-opacity border-2 p-4 d-flex flex-column flex-lg-row justify-content-start align-items-start h-100">
					<i className="ri-truck-line ri-lg mb-3 mb-lg-0"></i>
					<div className="ms-lg-4">
						<p className="mb-1 lh-1 fw-bold">تحویل رایگان</p>
						<small className="text-muted">
							تحویل استاندارد رایگان برای سفارش های بالای ۱۰۰ هزار تومن
						</small>
					</div>
				</div>
			</div>

			<div
				className="col-12 col-md-4 mb-3 mb-xxl-0 text-white"
				data-aos="fade-left"
				data-aos-delay="500"
			>
				<div className="border-white-opacity border-2 p-4 d-flex flex-column flex-lg-row justify-content-start align-items-start h-100">
					<i className="ri-repeat-line ri-lg mb-3 mb-lg-0"></i>
					<div className="ms-lg-4">
						<p className="mb-1 lh-1 fw-bold">بازگشت کالا</p>
						<small className="text-muted">
							ضمانت ۳۰ روزه بازگشت وجه در صورت تغییر عقیده
						</small>
					</div>
				</div>
			</div>
		</div>
	);
};
