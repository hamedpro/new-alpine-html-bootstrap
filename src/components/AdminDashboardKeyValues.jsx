import axios from "axios";
import React, { Fragment, useContext } from "react";
import { GlobalContext } from "../GlobalContext";

export const AdminDashboardKeyValues = () => {
	var { refresh_global_context_state } = useContext(GlobalContext);
	var { key_values } = useContext(GlobalContext).global_context_state;
	async function submit_new_value(key, value = undefined) {
		if (key_values.find((i) => i.key === key)) {
			//that value already exists so we just update that
			await axios({
				baseURL: api_endpoint,
				url: "/collections/key_values",
				method: "patch",
				data: {
					update_set: {
						value: value || document.getElementById(key).value,
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
						value: value || document.getElementById(key).value,
					},
				},
			});
		}
		refresh_global_context_state();
		alert("با موفقیت انجام شد !");
	}
	async function upload_new_company_image() {
		var files = document.getElementById("company_image_input").files;
		if (files.length !== 1) {
			alert("select exactly 1 image");
			return;
		}
		var f = new FormData();
		f.append("file", files[0]);
		var response = await axios({
			baseURL: api_endpoint,
			url: "/files",
			method: "post",
			data: f,
		});
		var { file_id } = response.data;
		await submit_new_value("company_image_file_id", file_id);
	}
	return (
		<>
			{[
				"instagram_id",
				"twitter_id",
				"facebook_id",
				"company_address",
				"company_landline_phone_number",
				"company_mobile_phone_number",
				"company_name",
				"company_description",
			].map((i) => (
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
			<p>set new company_image</p>
			<input type="file" id="company_image_input" />
			<button onClick={upload_new_company_image}>upload new company image</button>
		</>
	);
};
