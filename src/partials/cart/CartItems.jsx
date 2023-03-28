import React, { useContext } from "react";
import { GlobalContext } from "../../GlobalContext";
export const CartItems = () => {
	var cart_items = useContext(GlobalContext).global_context_state.cart_items;
	if (cart_items === undefined) return <h1>در حال بارگذاری اطلاعات از سرور ...</h1>;
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
				{cart_items.map((i) => (
					<tr key={i._id}>
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
								<h6 className="mb-2 fw-bolder">{i.title}</h6>
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
				))}
			</tbody>
		</table>
	);
};
