import React from "react";
import { entries } from "../../data/cart-items.json";
export const CartItems = () => {
	return (
		<table class="table">
			<thead>
				<tr>
					<th class="d-none d-sm-table-cell"></th>
					<th class="ps-sm-3">Details</th>
					<th>Qty</th>
					<th></th>
				</tr>
			</thead>
			<tbody>
				{entries.map((i) => (
					<tr>
						<td class="d-none d-sm-table-cell">
							<picture class="d-block bg-light p-3 f-w-20">
								<img class="img-fluid" src={i.img} />
							</picture>
						</td>

						<td>
							<div class="ps-sm-3">
								<h6 class="mb-2 fw-bolder">{{ title }}</h6>
								<small class="d-block text-muted">{i.options}</small>
							</div>
						</td>

						<td>
							<div class="px-3">
								<span class="small text-muted mt-1">
									{i.qty} @ {i.currency}
									{i.price}
								</span>
							</div>
						</td>

						<td class="f-h-0">
							<div class="d-flex justify-content-between flex-column align-items-end h-100">
								<i class="ri-close-circle-line ri-lg"></i>
								<p class="fw-bolder mt-3 m-sm-0">
									{i.currency}
									{i["line-total"]}
								</p>
							</div>
						</td>
					</tr>
				))}
			</tbody>
		</table>
	);
};
