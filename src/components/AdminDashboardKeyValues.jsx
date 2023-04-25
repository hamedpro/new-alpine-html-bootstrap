import axios from "axios";
import React, { Fragment, useContext } from "react";
import { GlobalContext } from "../GlobalContext";
import { BackButtonRow } from "./BackButtonRow";

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
			<BackButtonRow row_class_name={"tw-p-2"} location={"/admin-dashboard"} />
			<div className="tw-p-4" dir="rtl">
				<h1 className="tw-text-5xl">مدیریت جفت مقدار ها</h1>
				<hr className="tw-my-5" />
				{[
					{ key: "instagram_id", label: "آیدی اینستاگرام" },
					{ key: "twitter_id", label: "آیدی توییتر" },
					{ key: "facebook_id", label: "آیدی فیسبوک" },
					{ key: "company_address", label: "آدرس شرکت" },
					{ key: "company_landline_phone_number", label: "شماره تلفن ثابت شرکت" },
					{ key: "company_mobile_phone_number", label: "شماره تلفن همراه شرکت" },
					{ key: "company_name", label: "نام شرکت" },
					{ key: "company_description", label: "توضیح متنی شرکت" },
				].map((i) => (
					<div key={i.key} className="tw-border tw-border-black tw-p-4 tw-mb-2">
						<h2 className="tw-text-xl">{i.label}</h2>
						<p>
							مقدار فعلی :{" "}
							{key_values.find((row) => row.key === i.key)
								? key_values.find((row) => row.key === i.key).value
								: "هیچ مقداری ثبت نشده است"}
						</p>
						<span>تنظیم مقدار جدید برای این مورد :</span>
						<input type="text" id={i.key} className="tw-border tw-border-black" />
						<br />
						<button
							className="tw-border tw-border-black tw-px-2 tw-mt-2"
							onClick={() => submit_new_value(i.key)}
						>
							ثبت اطلاعات
						</button>
					</div>
				))}

				<p>بارگذاری عکس جدید شرکت</p>
				<input type="file" id="company_image_input" />
				<br />
				<button
					className="tw-border tw-border-black tw-px-2 tw-mt-2"
					onClick={upload_new_company_image}
				>
					شروع بارگذاری
				</button>
			</div>
		</>
	);
};
