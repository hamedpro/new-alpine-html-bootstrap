import React from "react";
import { CheckoutContact } from "../partials/checkout/CheckoutContact";
import { CheckoutShipping } from "../partials/checkout/CheckoutShipping";
import { CheckoutBilling } from "../partials/checkout/CheckoutBilling";
import { CheckoutShippingMethod } from "../partials/checkout/CheckoutShippingMethod";
import { CheckoutPayment } from "../partials/checkout/CheckoutPayment";
import { CheckoutSummary } from "../partials/checkout/CheckoutSummary";
import { NavBar } from "../partials/header/navbar/NavBar";
export const Checkout = () => {
	return (
		<>
			<NavBar />
			<section className="mt-5 container">
				<h1 className="mb-4 display-5 fw-bold text-center">تکمیل ایمن سفارش</h1>
				<p className="text-center mx-auto">
					لطفا برای تکمیل سفارش خود فرم زیر را تکمیل کنید
				</p>

				<div className="row g-md-8 mt-4">
					<div className="col-12 col-lg-6 col-xl-7">
						<CheckoutContact />
						<CheckoutShipping />
						<CheckoutBilling />
						<CheckoutShippingMethod />
						<CheckoutPayment />
					</div>

					<div className="col-12 col-lg-6 col-xl-5">
						<CheckoutSummary />
					</div>
				</div>
			</section>
		</>
	);
};
