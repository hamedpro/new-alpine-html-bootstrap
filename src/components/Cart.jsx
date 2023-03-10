import React from "react";
import { NavBar } from "../partials/header/navbar/NavBar";
import { CartItems } from "../partials/cart/CartItems";
import { CartSummary } from "../partials/cart/CartSummary";

export const Cart = () => {
	return (
		<>
			<NavBar />

			<section className="mt-5 container">
				<h1 className="mb-6 display-5 fw-bold text-center">Your Cart</h1>

				<div className="row g-4 g-md-8">
					<div className="col-12 col-lg-6 col-xl-7">
						<div className="table-responsive">
							<CartItems />
						</div>
					</div>

					<div className="col-12 col-lg-6 col-xl-5">
						<CartSummary />
					</div>
				</div>
			</section>
		</>
	);
};
