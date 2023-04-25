import React, { Fragment, useContext } from "react";
import { NavBar } from "../partials/header/navbar/NavBar";
import { GlobalContext } from "../GlobalContext";
import { ProductsShowcase } from "./ProductsShowcase";

export const Products = () => {
	var { products } = useContext(GlobalContext).global_context_state;

	return (
		<>
			<ProductsShowcase
				breadcrumb_parts={[
					{ label: "صفحه اصلی", location: "/" },
					{ label: "محصولات", location: "/products" },
				]}
				main_title={"محصولات ما"}
				product_ids={products.map((i) => i._id)}
				description={
					"در این بخش تمام کالا های ثبت شده در تمام دسته بندی ها را در کنار هم مشاهده کنید"
				}
			/>
		</>
	);
};
