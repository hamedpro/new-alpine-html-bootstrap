import React, { Fragment, useContext } from "react";
import { NavBar } from "../partials/header/navbar/NavBar";
import { GlobalContext } from "../GlobalContext";

export const Categories = () => {
	var { product_categories } = useContext(GlobalContext).global_context_state;

	return (
		<>
			<NavBar />
			<h1>Categories</h1>
			{product_categories.map((i) => (
				<Fragment key={i._id}>
					<p>{JSON.stringify(i)}</p>
					<hr />{" "}
				</Fragment>
			))}
		</>
	);
};
