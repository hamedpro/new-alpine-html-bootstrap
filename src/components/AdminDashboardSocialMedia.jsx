import axios from "axios";
import React, { Fragment, useContext } from "react";
import { GlobalContext } from "../GlobalContext";

export const AdminDashboardSocialMedia = () => {
	var { refresh_global_context_state } = useContext(GlobalContext);
	var { key_values } = useContext(GlobalContext).global_context_state;
	async function submit_new_value(key) {
		if (key_values.find((i) => i.key === key)) {
			//that value already exists so we just update that
			await axios({
				baseURL: api_endpoint,
				url: "/collections/key_values",
				method: "patch",
				data: {
					update_set: {
						value: document.getElementById(key).value,
					},
					update_filter: {
						key,
					},
				},
			});
		} else {
			//initalize that value in db
			await axios({
				baseURL: api_endpoint,
				url: "/collections/key_values",
				method: "post",
				data: {
					document: {
						key,
						value: document.getElementById(key).value,
					},
				},
			});
		}
		refresh_global_context_state();
		alert("با موفقیت انجام شد !");
	}
	if (key_values === undefined) return "در حال بارگذاری اطلاعات از سرور ...";
	return (
		<>
			<h1>مدیریت ادرس شبکه های اجتماعی</h1>
			{["instagram_id", "twitter_id", "facebook_id"].map((i) => (
				<Fragment key={i}>
					<h2>{i}</h2>
					<p>
						مقدار فعلی :{" "}
						{key_values.find((row) => row.key === i)
							? key_values.find((row) => row.key === i).value
							: "هیچ مقداری ثبت نشده است"}
					</p>
					<p>تنظیم مقدار جدید برای این مورد :</p>
					<input type="text" id={i} />
					<button onClick={() => submit_new_value(i)}>ثبت اطلاعات </button>
				</Fragment>
			))}
		</>
	);
};
