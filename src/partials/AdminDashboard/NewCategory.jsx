import axios from "axios";
import React, { Fragment, useEffect, useState } from "react";

export const NewCategory = () => {
	var [product_categories, set_product_categories] = useState();
	function fetch_data() {
		axios({
			baseURL: api_endpoint,
			url: "/collections/product_categories",
			data: {
				filters: {},
			},
		})
			.then((response) => response.data)
			.then((data) => {
				set_product_categories(data);
			});
	}
	useEffect(fetch_data, []);
	if (product_categories === undefined) return <h1>loading product categories ... </h1>;
	async function submit_new_product_category() {
		await axios({
			baseURL: api_endpoint,
			url: `/collections/product_categories`,
			method: "post",
			data: {
				document: { title: document.getElementById("title_input").value },
			},
		});
		await fetch_data();
		alert("done !");
	}
	return (
		<>
			<h1>NewCategory</h1>
			<h1>existing product categories : </h1>
			{product_categories.map((i) => (
				<Fragment key={i._id}>
					<p>{JSON.stringify(i)}</p>
					<hr />
				</Fragment>
			))}

			<h1>adding a new product category </h1>
			<p>enter a title for this category :</p>
			<input id="title_input" />
			<button onClick={submit_new_product_category}>submit</button>
		</>
	);
};
