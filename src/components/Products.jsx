import React, { Fragment, useContext } from "react";
import { NavBar } from "../partials/header/navbar/NavBar";
import { GlobalContext } from "../GlobalContext";

export const Products = () => {
	var { products } = useContext(GlobalContext).global_context_state;

	return (
		<>
			<NavBar />
			<h1>products</h1>
			{products.map((i) => (
				<Fragment key={i._id}>
					<p>{JSON.stringify(i)}</p>
					<hr />{" "}
				</Fragment>
			))}
		</>
	);
};
