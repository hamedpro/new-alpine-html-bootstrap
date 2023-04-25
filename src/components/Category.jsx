import React, { useContext } from "react";
import { GlobalContext } from "../GlobalContext";
import { ProductsShowcase } from "./ProductsShowcase";
import { useParams } from "react-router-dom";
export const Category = () => {
	var { category_id } = useParams();

	var { products, product_categories } = useContext(GlobalContext).global_context_state;

	var this_product_category = product_categories.find((i) => i._id === category_id);
	return (
		<ProductsShowcase
			breadcrumb_parts={[
				{ location: "/", label: "صفحه اصلی" },
				{ location: "/categories", label: "دسته بندی ها" },
				{
					label: this_product_category.title,
					location: `/categories/${this_product_category._id}`,
				},
			]}
			main_title={this_product_category.title}
			product_ids={products.map((i) => i._id)}
			description={this_product_category.description}
		/>
	);
};
