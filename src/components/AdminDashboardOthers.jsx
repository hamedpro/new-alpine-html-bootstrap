import axios from "axios";
import React, { useContext } from "react";
import { GlobalContext } from "../GlobalContext";

export const AdminDashboardOthers = () => {
	var { key_values } = useContext(GlobalContext).global_context_state;
	var { refresh_global_context_state } = useContext(GlobalContext);
	if (key_values === undefined) return <h1>در حال بارگذاری اطلاعات از سرور...</h1>;
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
			<h1>گزینه های مدیریتی بیشتر</h1>
			<hr />
			<h1>جمله پایین هر محصول</h1>
			<p>
				مقدار فعلی :{" "}
				{key_values.find((i) => i.key === "products_bottom_sentence")
					? key_values.find((i) => i.key === "products_bottom_sentence").value
					: "بدون مقدار"}
			</p>
			<p>مقدار جدید :</p>
			<input id="products_bottom_sentence" />
			<button onClick={submit_new_products_bottom_sentence}>ثبت اطلاعات</button>
		</>
	);
};
