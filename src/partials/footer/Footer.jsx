import React, { useContext } from "react";
import { InstagramPhotos } from "../instagram/InstagramPhotos";
import { templateName } from "../../../env.json";
import { InfoBoxes } from "../info-boxes/InfoBoxes";
import { FollowUs } from "../../components/FollowUs";
import { GlobalContext } from "../../GlobalContext";
import { Link } from "react-router-dom";
import axios from "axios";
export const Footer = ({ classList }) => {
	var { refresh_global_context_state } = useContext(GlobalContext);
	async function newsletter_subscribtion_handler() {
		await axios({
			baseURL: api_endpoint,
			url: "/collections/newsletter_subscribed_emails",
			method: "post",
			data: {
				document: {
					email_address: document.getElementById("newsletter_email_input").value,
				},
			},
		});
		document.getElementById("newsletter_email_input").value = "";
		refresh_global_context_state();
		alert("با موفقیت انجام شد !");
	}
	var { key_values, product_categories } = useContext(GlobalContext).global_context_state;

	return (
		<footer className={`bg-dark mt-10  ${classList}`}>
			<FollowUs />

			<div className="container pt-8">
				{key_values.find((i) => i.key === "instagram_images_file_ids") ? (
					<InstagramPhotos />
				) : (
					"عکس های اینستاگرام هنوز تنظیم نشده اند"
				)}
				<div className="d-flex justify-content-between align-items-center mt-3">
					<p className="text-muted m-0">ما را در اینستاگرام دنبال کنید</p>
					<a
						className="text-link-border fw-bolder m-0 text-white"
						onClick={(e) => {
							e.preventDefault();
							if (key_values.find((i) => i.key === "instagram_id")) {
								window.location.assign(
									`https://instagram.com/${
										key_values.find((i) => i.key === "instagram_id").value
									}`
								);
							} else {
								alert("آدرس اینستاگرامی تنظیم نشده است");
							}
						}}
					>
						مشاهده بیشتر در اینستاگرام{" "}
						<i className="ri-external-link-line align-bottom"></i>
					</a>
				</div>
			</div>

			<div className="container mt-7">
				<InfoBoxes />
			</div>

			<div className="border-top-white-opacity py-7 mt-7 text-white">
				<div className="container" data-aos="fade-in">
					<div className="row my-4 flex-wrap">
						<nav className="col-6 col-md mb-4 mb-md-0">
							<h6 className="mb-4 fw-bolder fs-6">شرکت</h6>
							<ul className="list-unstyled">
								<li className="mb-2">
									<Link
										className="text-decoration-none text-white opacity-75 opacity-25-hover transition-all"
										to="/about-us"
									>
										درباره ما
									</Link>
								</li>
								<li className="mb-2">
									<Link
										className="text-decoration-none text-white opacity-75 opacity-25-hover transition-all"
										to="/posts"
									>
										پست ها
									</Link>
								</li>
								<li className="mb-2">
									<Link
										className="text-decoration-none text-white opacity-75 opacity-25-hover transition-all"
										to="/faq"
									>
										سوالات متداول
									</Link>
								</li>
								<li className="mb-2">
									<Link
										className="text-decoration-none text-white opacity-75 opacity-25-hover transition-all"
										href="/support-messages/new"
									>
										درخواست پشتیبانی جدید
									</Link>
								</li>
							</ul>
						</nav>
						<nav className="col-6 col-md mb-4 mb-md-0">
							<h6 className="mb-4 fw-bolder fs-6">مسیریابی</h6>
							<ul className="list-unstyled">
								<li className="mb-2">
									<a
										className="text-decoration-none text-white opacity-75 opacity-25-hover transition-all"
										href="/register"
									>
										ثبت نام
									</a>
								</li>
								<li className="mb-2">
									<a
										className="text-decoration-none text-white opacity-75 opacity-25-hover transition-all"
										href="/cart"
									>
										سبد خرید
									</a>
								</li>
								<li className="mb-2">
									<a
										className="text-decoration-none text-white opacity-75 opacity-25-hover transition-all"
										href="/checkout"
									>
										تکمیل سفارش
									</a>
								</li>
								<li className="mb-2">
									<a
										className="text-decoration-none text-white opacity-75 opacity-25-hover transition-all"
										href="/my-profile"
									>
										حساب کاربری من
									</a>
								</li>
							</ul>
						</nav>
						<nav className="d-none d-md-block col-md">
							<h6 className="mb-4 fw-bolder fs-6">دسته بندی ها</h6>
							{product_categories.length !== 0 ? (
								<ul className="list-unstyled">
									{product_categories.map((i) => (
										<li className="mb-2" key={i._id}>
											<a
												className="text-decoration-none text-white opacity-75 opacity-25-hover transition-all"
												href={`/categories/${i._id}`}
											>
												{i.title}
											</a>
										</li>
									))}
								</ul>
							) : (
								"هنوز هیچ دسته بندی کالایی تعریف نشده است"
							)}
						</nav>

						<div className="col-12 col-md-5">
							<h6 className="mb-4 fw-bolder fs-6">عضویت در خبرنامه</h6>
							<p className="opacity-75">
								{/* Sign up to our newsletter to be informed of our new news. By
								subscribing to our mailing list you agree to our terms and
								conditions. */}{" "}
								با وارد کردن آدرس ایمیل خود در خبرنامه ما عضو شوید تا در جریان آخرین
								اخبار و اتفاقات ما باشید. با عضویت در خبرنامه شما با شرایط و قوانین
								استفاده انداز سرویس موافقت میکنید
							</p>
							<form className="bg-white d-flex justify-content-start align-items-center border-dark-focus-within transition-all mt-4">
								<div className="input-group m-0">
									<input
										type="text"
										className="form-control d-flex flex-grow-1 border-0 bg-transparent py-3"
										placeholder="Enter an email"
										id="newsletter_email_input"
									/>
									<span
										onClick={newsletter_subscribtion_handler}
										className="input-group-text bg-transparent border-0"
									>
										<i className="ri-arrow-right-line align-middle"></i>
									</span>
								</div>
							</form>
						</div>
					</div>
					<div className="border-top-white-opacity justify-content-between flex-column flex-md-row align-items-center d-flex pt-6 mt-6 px-0">
						<p className="small opacity-75">
							&copy; 2023 {templateName} All Rights Reserved.
						</p>
						<nav>
							<ul className="list-unstyled">
								<li className="d-inline-block me-1 bg-white rounded px-2 pt-1">
									<i className="pi pi-paypal pi-sm"></i>
								</li>
								<li className="d-inline-block me-1 bg-white rounded px-2 pt-1">
									<i className="pi pi-mastercard pi-sm"></i>
								</li>
								<li className="d-inline-block me-1 bg-white rounded px-2 pt-1">
									<i className="pi pi-american-express pi-sm"></i>
								</li>
								<li className="d-inline-block bg-white rounded px-2 pt-1">
									<i className="pi pi-visa pi-sm"></i>
								</li>
							</ul>
						</nav>
					</div>
				</div>
			</div>
		</footer>
	);
};
