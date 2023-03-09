import React from 'react'

export const CartSummary = () => {
  return (
		<>
			<div class="bg-dark p-4 p-md-5 text-white">
				<h3 class="fs-3 fw-bold m-0 text-center">Order Summary</h3>
				<div class="py-3 border-bottom-white-opacity">
					<div class="d-flex justify-content-between align-items-center mb-2 flex-column flex-sm-row">
						<p class="m-0 fw-bolder fs-6">Subtotal</p>
						<p class="m-0 fs-6 fw-bolder">$422.99</p>
					</div>
					<div class="d-flex justify-content-between align-items-center flex-column flex-sm-row mt-3 m-sm-0">
						<p class="m-0 fw-bolder fs-6">Shipping</p>
						<span class="text-white opacity-75 small">Will be set at checkout</span>
					</div>
				</div>
				<div class="py-3 border-bottom-white-opacity">
					<div class="d-flex justify-content-between align-items-center flex-column flex-sm-row">
						<div>
							<p class="m-0 fs-5 fw-bold">Grand Total</p>
							<span class="text-white opacity-75 small">Inc $45.89 sales tax</span>
						</div>
						<p class="mt-3 m-sm-0 fs-5 fw-bold">$422.99</p>
					</div>
				</div>

				<button
					class="btn btn-link p-0 mt-2 text-white fw-bolder text-decoration-none"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#collapseExample"
					aria-expanded="false"
					aria-controls="collapseExample"
				>
					Have a coupon code?
				</button>
				<div class="collapse" id="collapseExample">
					<div class="card card-body bg-transparent p-0">
						<div class="input-group mb-0 mt-2">
							<input
								type="text"
								class="form-control border-0"
								placeholder="Enter coupon code"
							/>
							<button class="btn btn-white text-dark px-3 btn-sm border-0 d-flex justify-content-center align-items-center">
								<i class="ri-checkbox-circle-line ri-lg"></i>
							</button>
						</div>
					</div>
				</div>

				<a
					href="{{webRoot}}/checkout.html"
					class="btn btn-white w-100 text-center mt-3"
					role="button"
				>
					<i class="ri-secure-payment-line align-bottom"></i> Proceed to checkout
				</a>
				<a
					href="{{webRoot}}/checkout.html"
					class="btn btn-orange w-100 text-center mt-3"
					role="button"
				>
					<i class="ri-paypal-line align-bottom"></i> Checkout with PayPal
				</a>
			</div>

			<ul class="list-unstyled d-flex justify-content-center mt-3">
				<li class="mx-1 border d-flex align-items-center p-2">
					<i class="pi pi-paypal"></i>
				</li>
				<li class="mx-1 border d-flex align-items-center p-2">
					<i class="pi pi-mastercard"></i>
				</li>
				<li class="mx-1 border d-flex align-items-center p-2">
					<i class="pi pi-american-express"></i>
				</li>
				<li class="mx-1 border d-flex align-items-center p-2">
					<i class="pi pi-visa"></i>
				</li>
			</ul>
		</>
  );
}
