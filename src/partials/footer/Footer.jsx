import React from "react";
import { InstagramPhotos } from "../instagram/InstagramPhotos";
import { templateName } from "../../data/config.json";
import { InfoBoxes } from "../info-boxes/InfoBoxes";
export const Footer = ({ classList }) => {
	return (
		<footer class={`bg-dark mt-10  ${classList}`}>
			<div class="bg-light py-4">
				<div class="container d-flex justify-content-center align-items-center py-2">
					<p class="lead fw-bolder mb-0 lh-1">Find us online</p>
					<ul class="list-unstyled d-flex justify-content-start align-items-center mb-0 ms-3 lh-1">
						<li class="mx-1 mb-0 lh-1">
							<a
								class="text-muted text-decoration-none opacity-75-hover transition-all lh-1"
								href="#"
							>
								<i class="ri-instagram-fill ri-xl lh-1"></i>
							</a>
						</li>
						<li class="mx-1 mb-0 lh-1">
							<a
								class="text-muted text-decoration-none opacity-75-hover transition-all lh-1"
								href="#"
							>
								<i class="ri-facebook-fill ri-xl lh-1"></i>
							</a>
						</li>
						<li class="mx-1 mb-0 lh-1">
							<a
								class="text-muted text-decoration-none opacity-75-hover transition-all lh-1"
								href="#"
							>
								<i class="ri-twitter-fill ri-xl lh-1"></i>
							</a>
						</li>
						<li class="mx-1 mb-0 lh-1">
							<a
								class="text-muted text-decoration-none opacity-75-hover transition-all lh-1"
								href="#"
							>
								<i class="ri-snapchat-fill ri-xl lh-1"></i>
							</a>
						</li>
					</ul>
				</div>
			</div>

			<div class="container pt-8">
				<InstagramPhotos />
				<div class="d-flex justify-content-between align-items-center mt-3">
					<p class="text-muted m-0">
						Follow us on Instragram <span class="text-lowercase">{templateName}</span>
					</p>
					<a class="text-link-border fw-bolder m-0 text-white" href="#">
						More On Instagram <i class="ri-external-link-line align-bottom"></i>
					</a>
				</div>
			</div>

			<div class="container mt-7">
				<InfoBoxes />
			</div>

			<div class="border-top-white-opacity py-7 mt-7 text-white">
				<div class="container" data-aos="fade-in">
					<div class="row my-4 flex-wrap">
						<nav class="col-6 col-md mb-4 mb-md-0">
							<h6 class="mb-4 fw-bolder fs-6">Shop</h6>
							<ul class="list-unstyled">
								<li class="mb-2">
									<a
										class="text-decoration-none text-white opacity-75 opacity-25-hover transition-all"
										href="/category"
									>
										Menswear
									</a>
								</li>
								<li class="mb-2">
									<a
										class="text-decoration-none text-white opacity-75 opacity-25-hover transition-all"
										href="/category"
									>
										Womenswear
									</a>
								</li>
								<li class="mb-2">
									<a
										class="text-decoration-none text-white opacity-75 opacity-25-hover transition-all"
										href="/category"
									>
										Kidswear
									</a>
								</li>
								<li class="mb-2">
									<a
										class="text-decoration-none text-white opacity-75 opacity-25-hover transition-all"
										href="/category"
									>
										New Arrivals
									</a>
								</li>
							</ul>
						</nav>

						<nav class="col-6 col-md mb-4 mb-md-0">
							<h6 class="mb-4 fw-bolder fs-6">Company</h6>
							<ul class="list-unstyled">
								<li class="mb-2">
									<a
										class="text-decoration-none text-white opacity-75 opacity-25-hover transition-all"
										href="#"
									>
										About Us
									</a>
								</li>
								<li class="mb-2">
									<a
										class="text-decoration-none text-white opacity-75 opacity-25-hover transition-all"
										href="#"
									>
										Our Blog
									</a>
								</li>
								<li class="mb-2">
									<a
										class="text-decoration-none text-white opacity-75 opacity-25-hover transition-all"
										href="#"
									>
										FAQs
									</a>
								</li>
								<li class="mb-2">
									<a
										class="text-decoration-none text-white opacity-75 opacity-25-hover transition-all"
										href="#"
									>
										Contact
									</a>
								</li>
							</ul>
						</nav>

						<nav class="d-none d-md-block col-md">
							<h6 class="mb-4 fw-bolder fs-6">Navigation</h6>
							<ul class="list-unstyled">
								<li class="mb-2">
									<a
										class="text-decoration-none text-white opacity-75 opacity-25-hover transition-all"
										href="#"
									>
										Register
									</a>
								</li>
								<li class="mb-2">
									<a
										class="text-decoration-none text-white opacity-75 opacity-25-hover transition-all"
										href="#"
									>
										Cart
									</a>
								</li>
								<li class="mb-2">
									<a
										class="text-decoration-none text-white opacity-75 opacity-25-hover transition-all"
										href="#"
									>
										Checkout
									</a>
								</li>
								<li class="mb-2">
									<a
										class="text-decoration-none text-white opacity-75 opacity-25-hover transition-all"
										href="#"
									>
										Account
									</a>
								</li>
							</ul>
						</nav>

						<div class="col-12 col-md-5">
							<h6 class="mb-4 fw-bolder fs-6">Join Our Newsletter</h6>
							<p class="opacity-75">
								Sign up to our newsletter and we'll email you a code worth 15% off
								your first order. By subscribing to our mailing list you agree to
								our terms and conditions.
							</p>
							<form class="bg-white d-flex justify-content-start align-items-center border-dark-focus-within transition-all mt-4">
								<div class="input-group m-0">
									<input
										type="text"
										class="form-control d-flex flex-grow-1 border-0 bg-transparent py-3"
										placeholder="Enter your email"
										aria-label="Enter your email"
									/>
									<span class="input-group-text bg-transparent border-0">
										<i class="ri-arrow-right-line align-middle"></i>
									</span>
								</div>
							</form>
						</div>
					</div>
					<div class="border-top-white-opacity justify-content-between flex-column flex-md-row align-items-center d-flex pt-6 mt-6 px-0">
						<p class="small opacity-75">
							&copy; 2021 {{ templateName }} All Rights Reserved. Template by{" "}
							<a class="text-white" href="https://www.pixelrocket.store">
								Pixel Rocket
							</a>
						</p>
						<nav>
							<ul class="list-unstyled">
								<li class="d-inline-block me-1 bg-white rounded px-2 pt-1">
									<i class="pi pi-paypal pi-sm"></i>
								</li>
								<li class="d-inline-block me-1 bg-white rounded px-2 pt-1">
									<i class="pi pi-mastercard pi-sm"></i>
								</li>
								<li class="d-inline-block me-1 bg-white rounded px-2 pt-1">
									<i class="pi pi-american-express pi-sm"></i>
								</li>
								<li class="d-inline-block bg-white rounded px-2 pt-1">
									<i class="pi pi-visa pi-sm"></i>
								</li>
							</ul>
						</nav>
					</div>
				</div>
			</div>
		</footer>
	);
};
