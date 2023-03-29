import axios from "axios";
import React, { useContext } from "react";
import { GlobalContext } from "../../GlobalContext";
import { calc_discounted_price } from "../../helpers";
export const CartItems = () => {
	var { refresh_global_context_state } = useContext(GlobalContext);
	var { cart_items, products } = useContext(GlobalContext).global_context_state;
	if (cart_items === undefined || products === undefined)
		return <h1>در حال بارگذاری اطلاعات از سرور ...</h1>;
	async function remove_cart_item(cart_item_id) {
		await axios({
			baseURL: api_endpoint,
			url: "/collections/cart_items",
			method: "delete",
			data: {
				filters: {
					_id: cart_item_id,
				},
			},
		});
		await refresh_global_context_state();
	}
	return (
		<table className="table">
			<thead>
				<tr>
					<th className="d-none d-sm-table-cell"></th>
					<th className="ps-sm-3">جزئیات</th>
					<th>تعداد</th>
					<th></th>
				</tr>
			</thead>
			<tbody>
				{cart_items.map((i) => {
					var related_product = products.find((product) => product._id === i.product_id);
					return (
						<tr key={i._id}>
							<td className="d-none d-sm-table-cell">
								<picture className="d-block bg-light p-3 f-w-20">
									<img
										className="img-fluid"
										src={
											new URL(
												`files/${related_product.image_files_ids[0]}`,
												api_endpoint
											).href
										}
									/>
								</picture>
							</td>

							<td>
								<div className="ps-sm-3">
									<h6 className="mb-2 fw-bolder">{related_product.title}</h6>
									<small className="d-block text-muted">
										<ul>
											{related_product.options.map((option) => (
												<li>{option}</li>
											))}
										</ul>
									</small>
								</div>
							</td>

							<td>
								<div className="px-3">
									<span className="small text-muted mt-1">
										{i.count} @{" "}
										{calc_discounted_price(
											Number(related_product.price),
											Number(related_product.discount_percentage)
										)}
									</span>
								</div>
							</td>

							<td className="f-h-0">
								<div className="d-flex justify-content-between flex-column align-items-end h-100">
									<i
										onClick={() => remove_cart_item(i._id)}
										className="ri-close-circle-line ri-lg"
									></i>
									<p className="fw-bolder mt-3 m-sm-0">
										{i.count *
											calc_discounted_price(
												Number(related_product.price),
												Number(related_product.discount_percentage)
											)}
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
