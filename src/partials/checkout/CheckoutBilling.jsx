
import React from 'react'

export const CheckoutBilling = () => {
  return (
		<div class="billing-address checkout-panel d-none">
			<h5 class="title-checkout">Billing Address</h5>
			<div class="row">
				<div class="col-sm-6">
					<div class="form-group">
						<label for="firstNameAddress" class="form-label">
							First name
						</label>
						<input
							type="text"
							class="form-control"
							id="firstNameAddress"
							placeholder=""
							value=""
							required=""
						/>
					</div>
				</div>

				<div class="col-sm-6">
					<div class="form-group">
						<label for="lastNameAddress" class="form-label">
							Last name
						</label>
						<input
							type="text"
							class="form-control"
							id="lastNameAddress"
							placeholder=""
							value=""
							required=""
						/>
					</div>
				</div>

				<div class="col-12">
					<div class="form-group">
						<label for="addressAddress" class="form-label">
							Address
						</label>
						<input
							type="text"
							class="form-control"
							id="addressAddress"
							placeholder="123 Some Street Somewhere"
							required=""
						/>
					</div>
				</div>

				<div class="col-md-12">
					<div class="form-group">
						<label for="countryAddress" class="form-label">
							Country
						</label>
						<select class="form-select" id="countryAddress" required="">
							<option value="">Please Select...</option>
							<option>United States</option>
						</select>
					</div>
				</div>

				<div class="col-md-6">
					<div class="form-group">
						<label for="stateAddress" class="form-label">
							State
						</label>
						<select class="form-select" id="stateAddress" required="">
							<option value="">Please Select...</option>
							<option>California</option>
						</select>
					</div>
				</div>

				<div class="col-md-6">
					<div class="form-group">
						<label for="zipAddress" class="form-label">
							Zip/Post Code
						</label>
						<input
							type="text"
							class="form-control"
							id="zipAddress"
							placeholder=""
							required=""
						/>
					</div>
				</div>
			</div>
		</div>
  );
}
