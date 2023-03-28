import React from "react";

export const CheckoutContact = () => {
	return (
		<div className="checkout-panel">
			<h5 className="title-checkout">اطلاعات تماس</h5>
			<div className="row">
				<div className="col-12">
					<div className="form-group">
						<label htmlFor="email" className="form-label">
							آدرس ایمیل
						</label>
						<input
							type="email"
							className="form-control"
							id="email"
							placeholder="you@example.com"
						/>
					</div>

					<div className="form-group form-check m-0">
						<input
							type="checkbox"
							className="form-check-input"
							id="add-mailinglist"
							readOnly /* todo make this work  */
						/>
						<label className="form-check-label" htmlFor="add-mailinglist">
							آخرین اخبار و اطلاعات را به من اطلاع بده
						</label>
					</div>
				</div>
			</div>
		</div>
	);
};
