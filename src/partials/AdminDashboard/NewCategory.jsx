import axios from "axios";
import React, { Fragment, useContext, useEffect, useState } from "react";
import { GlobalContext } from "../../GlobalContext";

export const NewCategory = () => {
var { product_categories } = useContext(GlobalContext).global_context_state;
var { refresh_global_context_state } = useContext(GlobalContext);
	async function submit_new_product_category() {
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
			<h1>دسته بندی جدید</h1>
			<h1>دسته بندی های فعلی : </h1>
			{product_categories.map((i) => (
				<Fragment key={i._id}>
					<p>{JSON.stringify(i)}</p>
					<hr />
				</Fragment>
			))}

			<h1>اضافه کردن دسته بندی جدید : </h1>
			<p>برای این دسته بندی جدید عنوانی انتخاب کنید :</p>
			<input id="title_input" />
			<p>برای این دسته بندی توضیحی بنویسید :‌</p>
			<input id="description_input" />
			<button onClick={submit_new_product_category}>ثبت اطلاعات </button>
		</>
	);
};
