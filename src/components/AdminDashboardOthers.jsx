import axios from "axios";
import React, { useContext } from "react";
import { GlobalContext } from "../GlobalContext";
import { BackButtonRow } from "./BackButtonRow";

export const AdminDashboardOthers = () => {
	var { key_values } = useContext(GlobalContext).global_context_state;
	var { refresh_global_context_state } = useContext(GlobalContext);
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
			<BackButtonRow row_class_name={"tw-p-4"} location={"/admin-dashboard"} />
			<div className="tw-p-4" dir="rtl">
				<h1 className="tw-text-4xl tw-mb-2">گزینه های مدیریتی بیشتر</h1>
				<hr />
				<h1 className="tw-text-xl tw-mt-2">تنظیم جمله پایین هر محصول </h1>
				<div className="tw-border tw-border-black tw-p-3">
					<p>
						مقدار فعلی :{" "}
						{key_values.find((i) => i.key === "products_bottom_sentence")
							? key_values.find((i) => i.key === "products_bottom_sentence").value
							: "بدون مقدار"}
					</p>
					<span>مقدار جدید :</span>
					<input
						id="products_bottom_sentence"
						className="tw-border tw-border-black tw-px-2"
					/>
					<br />
					<button
						className="tw-border tw-border-black tw-px-2 tw-mt-2"
						onClick={submit_new_products_bottom_sentence}
					>
						ثبت اطلاعات
					</button>
				</div>
			</div>
		</>
	);
};
