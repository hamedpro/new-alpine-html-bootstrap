import React, { useContext } from "react";
import { GlobalContext } from "../../GlobalContext";
export const CartItems = () => {
	var cart_items = useContext(GlobalContext).global_context_state.cart_items;
	if (cart_items === undefined) return <h1>still loading cart_items ...</h1>;
	return (
		<table className="table">
			<thead>
				<tr>
					<th className="d-none d-sm-table-cell"></th>
					<th className="ps-sm-3">Details</th>
					<th>Qty</th>
					<th></th>
				</tr>
			</thead>
			<tbody>
				{cart_items.map((i) => {
					return (
						<tr>
							<td className="d-none d-sm-table-cell">
								<picture className="d-block bg-light p-3 f-w-20">
									<img
										className="img-fluid"
										src={new URL(`files/${i.image_file_id}`, api_endpoint).href}
									/>
								</picture>
							</td>

							<td>
								<div className="ps-sm-3">
									<h6 className="mb-2 fw-bolder">{{ title }}</h6>
									<small className="d-block text-muted">{i.options}</small>
								</div>
							</td>

							<td>
								<div className="px-3">
									<span className="small text-muted mt-1">
										{i.qty} @ {i.currency}
										{i.price}
									</span>
								</div>
							</td>

							<td className="f-h-0">
								<div className="d-flex justify-content-between flex-column align-items-end h-100">
									<i className="ri-close-circle-line ri-lg"></i>
									<p className="fw-bolder mt-3 m-sm-0">
										{i.currency}
										{i["line-total"]}
									</p>
								</div>
							</td>
						</tr>
					);
				})}
			</tbody>
		</table>
	);
};
