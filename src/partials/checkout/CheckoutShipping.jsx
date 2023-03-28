import React from "react";

export const CheckoutShipping = () => {
	return (
		<div className="checkout-panel">
			<h5 className="title-checkout">آدرس تحویل کالا</h5>
			<div className="row">
				<div className="col-sm-6">
					<div className="form-group">
						<label htmlFor="firstName" className="form-label">
							نام 
						</label>
						<input
							type="text"
							className="form-control"
							id="firstName"
							placeholder=""
							value=""
							required=""
						/>
					</div>
				</div>

				<div className="col-sm-6">
					<div className="form-group">
						<label htmlFor="lastName" className="form-label">
							نام خانوادگی
						</label>
						<input
							type="text"
							className="form-control"
							id="lastName"
							placeholder=""
							value=""
							required=""
						/>
					</div>
				</div>

				<div className="col-12">
					<div className="form-group">
						<label htmlFor="address" className="form-label">
							آدرس
						</label>
						<input
							type="text"
							className="form-control"
							id="address"
							placeholder="123 Some Street Somewhere"
							required=""
						/>
					</div>
				</div>

				<div className="col-md-12">
					<div className="form-group">
						<label htmlFor="country" className="form-label">
							کشور
						</label>
						<select className="form-select" id="country" required="">
							<option value="">لطفا منتظر بمانید</option>
							<option>ایالات متحده آمریکا</option>
						</select>
					</div>
				</div>

				<div className="col-md-6">
					<div className="form-group">
						<label htmlFor="state" className="form-label">
							ایالت
						</label>
						<select className="form-select" id="state" required="">
							<option value="">لطفا منتظر بمانید</option>
							<option>کالیفرنیا</option>
						</select>
					</div>
				</div>

				<div className="col-md-6">
					<div className="form-group">
						<label htmlFor="zip" className="form-label">
							کد پستی
						</label>
						<input
							type="text"
							className="form-control"
							id="zip"
							placeholder=""
							required=""
						/>
					</div>
				</div>
			</div>

			<div className="pt-4 mt-4 border-top d-flex justify-content-between align-items-center">
				<div className="form-group form-check m-0">
					<input type="checkbox" className="form-check-input" id="same-address" checked />
					<label className="form-check-label" htmlFor="same-address">
						Use for billing address
					</label>
				</div>
			</div>
		</div>
	);
};
