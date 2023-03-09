import React from "react";
import { NavBar } from "./NavBar";
import { Footer } from "./Footer";
import { OffCanvas } from "./OffCanvas";
import { SearchOverlay } from "./SearchOverlay";
import { CheckoutContact } from "./CheckoutContact";
import { CheckoutShipping } from "./CheckoutShipping";
import { CheckoutBilling } from "./CheckoutBilling";
import { CheckoutShippingMethod } from "./CheckoutShippingMethod";
import { CheckoutPayment } from "./CheckoutPayment";
import { CheckoutSummary } from "./CheckoutSummary";
export const Checkout = () => {
	return (
		<>
			<NavBar />
			<section class="mt-5 container {{ config.classes.content }}">
				<h1 class="mb-4 display-5 fw-bold text-center">Checkout Securely</h1>
				<p class="text-center mx-auto">
					Please fill in the details below to complete your order. Already registered?
					<a href="#">Login here.</a>
				</p>

				<div class="row g-md-8 mt-4">
					<div class="col-12 col-lg-6 col-xl-7">
						<CheckoutContact />
						<CheckoutShipping />
						<CheckoutBilling />
						<CheckoutShippingMethod />
						<CheckoutPayment />
					</div>

					<div class="col-12 col-lg-6 col-xl-5">
						<CheckoutSummary />
					</div>
				</div>
			</section>
			<Footer />
			<OffCanvas />
			<SearchOverlay />
		</>
	);
};
