import React from "react";
import { NavBar } from "../partials/header/navbar/NavBar";
import { CartItems } from "../partials/cart/CartItems";
import { CartSummary } from "../partials/cart/CartSummary";

export const Cart = () => {
	return (
		<>
			<NavBar />

			<section class="mt-5 container">
				<h1 class="mb-6 display-5 fw-bold text-center">Your Cart</h1>

				<div class="row g-4 g-md-8">
					<div class="col-12 col-lg-6 col-xl-7">
						<div class="table-responsive">
							<CartItems />
						</div>
					</div>

					<div class="col-12 col-lg-6 col-xl-5">
						<CartSummary />
					</div>
				</div>
			</section>
		</>
	);
};
