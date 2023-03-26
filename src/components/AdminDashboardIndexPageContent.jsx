import axios from "axios";
import React, { useContext, useState } from "react";
import ReactSelect from "react-select";
import { GlobalContext } from "../GlobalContext";
export const AdminDashboardIndexPageContent = () => {
	var { product_categories, key_values } = useContext(GlobalContext).global_context_state;
	var { refresh_global_context_state } = useContext(GlobalContext);

	if (product_categories === undefined || key_values === undefined)
		return "loading product categories ...";

	if (
		key_values.find(
			(i) => i.key === "index_page_product_carousel_scrollbar_product_category_id"
		)
	) {
		var index_page_product_carousel_scrollbar_product_category_id = key_values.find(
			(i) => i.key === "index_page_product_carousel_scrollbar_product_category_id"
		).value;
	}

	async function handle_index_page_product_carousel_scrollbar_change(new_value) {
		if (index_page_product_carousel_scrollbar_product_category_id !== undefined) {
			await axios({
				baseURL: api_endpoint,
				url: "/collections/key_values",
				method: "patch",
				data: {
					update_filter: {
						key: "index_page_product_carousel_scrollbar_product_category_id",
					},
					update_set: {
						value: new_value.value,
					},
				},
			});
		} else {
			await axios({
				baseURL: api_endpoint,
				url: "/collections/key_values",
				method: "post",
				data: {
					document: {
						key: "index_page_product_carousel_scrollbar_product_category_id",
						value: new_value.value,
					},
				},
			});
		}
		refresh_global_context_state();
		alert("done !");
	}
	return (
		<>
			<h1>AdminDashboardIndexPageContent</h1>
			<h3>swiper product carouesl scrollbar </h3>
			<p>select a product category to be shown there :</p>
			<ReactSelect
				value={
					index_page_product_carousel_scrollbar_product_category_id !== undefined
						? {
								label: product_categories.find(
									(i) =>
										i._id ===
										index_page_product_carousel_scrollbar_product_category_id
								).title,
								value: index_page_product_carousel_scrollbar_product_category_id,
						  }
						: undefined
				}
				options={product_categories.map((i) => ({ label: i.title, value: i._id }))}
				onChange={handle_index_page_product_carousel_scrollbar_change}
				isSearchable
			/>
		</>
	);
};
