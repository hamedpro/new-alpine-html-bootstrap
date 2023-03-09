import React from "react";

export const CheckoutPayment = () => {
	return (
		<div class="checkout-panel">
			<h5 class="title-checkout">Payment Information</h5>

			<div class="row">
				<div class="col-12">
					<div class="form-check form-group form-check-custom form-radio-custom mb-3">
						<input
							class="form-check-input"
							type="radio"
							name="checkoutPaymentMethod"
							id="checkoutPaymentStripe"
							checked
						/>
						<label class="form-check-label" for="checkoutPaymentStripe">
							<span class="d-flex justify-content-between align-items-start">
								<span>
									<span class="mb-0 fw-bolder d-block">Credit Card (Stripe)</span>
								</span>
								<i class="ri-bank-card-line"></i>
							</span>
						</label>
					</div>
				</div>

				<div class="col-12">
					<div class="form-check form-group form-check-custom form-radio-custom mb-3">
						<input
							class="form-check-input"
							type="radio"
							name="checkoutPaymentMethod"
							id="checkoutPaymentPaypal"
						/>
						<label class="form-check-label" for="checkoutPaymentPaypal">
							<span class="d-flex justify-content-between align-items-start">
								<span>
									<span class="mb-0 fw-bolder d-block">PayPal</span>
								</span>
								<i class="ri-paypal-line"></i>
							</span>
						</label>
					</div>
				</div>
			</div>

			<div class="card-details">
				<div class="row pt-3">
					<div class="col-md-12">
						<div class="form-group">
							<label for="cc-name" class="form-label">
								Name on card
							</label>
							<input
								type="text"
								class="form-control"
								id="cc-name"
								placeholder=""
								required=""
							/>
							<small class="text-muted">Full name as displayed on card</small>
						</div>
					</div>

					<div class="col-md-12">
						<div class="form-group">
							<label for="cc-number" class="form-label">
								Credit card number
							</label>
							<input
								type="text"
								class="form-control"
								id="cc-number"
								placeholder=""
								required=""
							/>
						</div>
					</div>

					<div class="col-md-6">
						<div class="form-group">
							<label for="cc-expiration" class="form-label">
								Expiration
							</label>
							<input
								type="text"
								class="form-control"
								id="cc-expiration"
								placeholder=""
								required=""
							/>
						</div>
					</div>

					<div class="col-md-6">
						<div class="form-group">
							<div class="d-flex">
								<label
									for="cc-cvv"
									class="form-label d-flex w-100 justify-content-between align-items-center"
								>
									Security Code
								</label>
								<button
									type="button"
									class="btn btn-link p-0 fw-bolder fs-xs text-nowrap"
									data-bs-toggle="tooltip"
									data-bs-placement="top"
									title="A CVV is a number on your credit card or debit card that's in addition to your credit card number and expiration date"
								>
									What's this?
								</button>
							</div>
							<input
								type="text"
								class="form-control"
								id="cc-cvv"
								placeholder=""
								required=""
							/>
						</div>
					</div>
				</div>
			</div>

			<div class="paypal-details bg-light p-4 d-none mt-3 fw-bolder">
				Please click on complete order. You will then be transferred to Paypal to enter your
				payment details.
			</div>
		</div>
	);
};
