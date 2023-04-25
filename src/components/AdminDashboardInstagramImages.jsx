import axios from "axios";
import React, { useContext } from "react";
import { GlobalContext } from "../GlobalContext";
import { BackButtonRow } from "./BackButtonRow";
export const AdminDashboardInstagramImages = () => {
	var { refresh_global_context_state } = useContext(GlobalContext);
	async function submit_handler() {
		var input_element = document.getElementById("input");
		if (input_element.files.length !== 9) {
			alert("لطفا دقیقا ۹ عکس انتخاب کنید");
			return;
		}
		var uploaded_files_ids = [];
		for (var i = 0; i < input_element.files.length; i++) {
			var file = input_element.files[i];
			var form = new FormData();
			form.append("file", file);
			var response = await axios({
				baseURL: api_endpoint,
				url: "/files",
				method: "post",
				data: form,
			});
			uploaded_files_ids.push(response.data.file_id);
		}
		await axios({
			baseURL: api_endpoint,
			url: "/collections/key_values",
			method: "delete",
			data: {
				filters: {
					key: "instagram_images_file_ids",
				},
			},
		});
		await axios({
			baseURL: api_endpoint,
			url: "/collections/key_values",
			method: "post",
			data: {
				document: {
					key: "instagram_images_file_ids",
					value: uploaded_files_ids,
				},
			},
		});
		await refresh_global_context_state();
		alert("با موفقیت انجام شد !");
	}
	return (
		<>
			<BackButtonRow row_class_name="tw-p-4" location={"/admin-dashboard"} />
			<div className="tw-p-4" dir="rtl">
				<h1 className="tw-text-5xl">مدیریت بخش عکس های اینستاگرام</h1>
				<hr className="tw-my-5" />
				<p>لطفا دقیقا ۹ عکس انتخاب کنید و بر روی اپلود محتوا کلیک کنید</p>
				<p>
					(اگر هم اکنون عکس هایی برای این بخش تنظیم شده است این عکس های جدید جایگزین آنها
					خواهند شد)
				</p>
				<input type="file" id="input" multiple />
				<br />
				<button
					onClick={submit_handler}
					className="tw-border tw-border-black tw-px-2 tw-mt-2"
				>
					آپلود محتوا
				</button>
			</div>
		</>
	);
};
