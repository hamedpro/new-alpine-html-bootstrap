import axios from "axios";
import React, { useContext } from "react";
import { GlobalContext } from "../GlobalContext";

export const AdminDashboardOthers = () => {
	var { key_values } = useContext(GlobalContext).global_context_state;
	var { refresh_global_context_state } = useContext(GlobalContext);
	if (key_values === undefined) return <h1>loading key values collection ...</h1>;
	async function submit_new_products_bottom_sentence() {
		if (key_values.find((i) => i.key === "products_bottom_sentence")) {
			await axios({
				baseURL: api_endpoint,
				url: "/collections/key_values",
				method: "patch",
				data: {
					update_filter: {
						key: "products_bottom_sentence",
					},
					update_set: {
						value: document.getElementById("products_bottom_sentence").value,
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
						key: "products_bottom_sentence",
						value: document.getElementById("products_bottom_sentence").value,
					},
				},
			});
		}
		refresh_global_context_state();
	}
	return (
		<>
			<h1>AdminDashboardOthers</h1>
			<hr />
			<h1>products_bottom_sentence</h1>
			<p>
				current value :{" "}
				{key_values.find((i) => i.key === "products_bottom_sentence")
					? key_values.find((i) => i.key === "products_bottom_sentence").value
					: "empty"}
			</p>
			<p>new value :</p>
			<input id="products_bottom_sentence" />
			<button onClick={submit_new_products_bottom_sentence}>submit</button>
		</>
	);
};
