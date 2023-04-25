import React, { Fragment, useContext } from "react";
import { NavBar } from "../partials/header/navbar/NavBar";
import { GlobalContext } from "../GlobalContext";
import { useNavigate } from "react-router-dom";

import { CategoriesTable } from "./CategoriesTable";

export const Categories = () => {
	var { product_categories, products } = useContext(GlobalContext).global_context_state;
	var nav = useNavigate();
	return (
		<>
			<NavBar />
			<h1 className="tw-my-5 tw-text-center tw-text-5xl">دسته بندی کالا ها</h1>
			<CategoriesTable />
		</>
	);
};
