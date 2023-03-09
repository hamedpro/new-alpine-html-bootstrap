import React from "react";

export const CheckoutContact = () => {
	return (
		<div class="checkout-panel">
			<h5 class="title-checkout">Contact Information</h5>
			<div class="row">
				<div class="col-12">
					<div class="form-group">
						<label for="email" class="form-label">
							Email
						</label>
						<input
							type="email"
							class="form-control"
							id="email"
							placeholder="you@example.com"
						/>
					</div>

					<div class="form-group form-check m-0">
						<input
							type="checkbox"
							class="form-check-input"
							id="add-mailinglist"
							checked
						/>
						<label class="form-check-label" for="add-mailinglist">
							Keep me updated with your latest news and offers
						</label>
					</div>
				</div>
			</div>
		</div>
	);
};
