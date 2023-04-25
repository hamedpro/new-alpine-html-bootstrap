import axios from "axios";
import React, { Fragment, useContext, useEffect, useState } from "react";
import { GlobalContext } from "../../GlobalContext";
import { CategoriesTable } from "../../components/CategoriesTable";
import { BackButtonRow } from "../../components/BackButtonRow";

export const NewCategory = () => {
	var { product_categories } = useContext(GlobalContext).global_context_state;
	var { refresh_global_context_state } = useContext(GlobalContext);
	async function submit_new_product_category() {
		if (window.confirm("آیا مطمئن هستید ؟") !== true) return;
		await axios({
			baseURL: api_endpoint,
			url: `/collections/product_categories`,
			method: "post",
			data: {
				document: {
					title: document.getElementById("title_input").value,
					description: document.getElementById("description_input").value,
				},
			},
		});
		await refresh_global_context_state();
		alert("با موفقیت انجام شد !");
	}
	return (
		<>
			<BackButtonRow row_class_name="tw-p-4" location={"/admin-dashboard"} />
			<div className="tw-p-4 tw-text-right" dir="rtl">
				<h1 className="tw-text-4xl">دسته بندی جدید</h1>
				<h1 className="tw-text-4xl tw-text-center tw-my-4">دسته بندی های موجود</h1>
				<CategoriesTable />

				<h1 className="tw-mt-5 tw-text-lg">اضافه کردن دسته بندی جدید : </h1>
				<div>
					<span>عنوان دسته بندی جدید :</span>
					<input id="title_input" className="tw-border tw-border-black" />
				</div>
				<div className="tw-mt-2">
					<span>برای این دسته بندی توضیحی بنویسید :‌</span>
					<input id="description_input" className="tw-border tw-border-black" />
				</div>

				<button
					onClick={submit_new_product_category}
					className="tw-border tw-border-blue-500 tw-px-2 tw-mt-2"
				>
					ثبت اطلاعات{" "}
				</button>
			</div>
		</>
	);
};
