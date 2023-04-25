import React, { Fragment, useContext } from "react";
import { NavBar } from "../partials/header/navbar/NavBar";
import { GlobalContext } from "../GlobalContext";
import { useNavigate } from "react-router-dom";

export const Categories = () => {
	var { product_categories, products } = useContext(GlobalContext).global_context_state;
	var nav = useNavigate();
	return (
		<>
			<NavBar />
			<h1>Categories</h1>
			<table>
				<thead>
					<tr>
						<th>شماره</th>
						<th>نام دسته بندی</th>
						<th>تعداد کالا</th>
						<th></th>
					</tr>
				</thead>
				<tbody>
					{product_categories.map((i, index) => (
						<Fragment key={i._id}>
							<tr>
								<td className="mx-2">{index}</td>
								<td className="mx-2">{i.title}</td>
								<td className="mx-2">
									{
										products.filter((product) => product.category_id === i._id)
											.length
									}{" "}
									کالا
								</td>
								<td>
									<button
										className="mx-2"
										onClick={() => nav(`/categories/${i._id}`)}
									>
										مشاهده دسته بندی
									</button>
								</td>
							</tr>
						</Fragment>
					))}
				</tbody>
			</table>
		</>
	);
};
