import axios from "axios";
import React, { useContext } from "react";
import { GlobalContext } from "../GlobalContext";
import { NavBar } from "../partials/header/navbar/NavBar";
export const DownloadCenter = ({}) => {
	var { refresh_global_context_state } = useContext(GlobalContext);
	var { download_center_items, users } = useContext(GlobalContext).global_context_state;

	var { is_admin } = users.find((i) => i._id === window.localStorage.getItem("user_id")) || {};
	async function delete_download_center_item(download_center_item_id) {
		if (!window.confirm("ایا از حذف این فایل اطمینان دارید ؟!")) return;
		await axios({
			baseURL: api_endpoint,
			url: "/collections/download_center_items",
			method: "delete",
			data: {
				filters: {
					_id: download_center_item_id,
				},
			},
		});
		await refresh_global_context_state();
		alert("با موفقیت انجام شد !");
	}
	async function upload_files() {
		var { files } = document.getElementById("input");
		if (files.length === 0) {
			alert("حداقل باید یک فایل انتخاب کنید");
			return;
		}

		for (var i = 0; i < files.length; i++) {
			var form = new FormData();
			form.append("file", files[i]);
			var response = await axios({
				baseURL: api_endpoint,
				url: "/files",
				method: "post",
				data: form,
			});
			await axios({
				baseURL: api_endpoint,
				url: "/collections/download_center_items",
				method: "post",
				data: {
					document: {
						title: document.getElementById("title").value,
						file_id: response.data.file_id,
					},
				},
			});
		}
		await refresh_global_context_state();
		alert("با موفقیت انجام شد !");
	}
	return (
		<>
			<NavBar />
			<h1>DownloadCenter</h1>
			{download_center_items.map((i) => (
				<div key={i._id}>
					<p>عنوان فایل : {i.title}</p>
					<a download={i.title} href={new URL(`/files/${i.file_id}`, api_endpoint).href}>
						download this file
					</a>
					{is_admin && (
						<button onClick={() => delete_download_center_item(i._id)}>
							حذف این فایل
						</button>
					)}
				</div>
			))}
			{is_admin && (
				<div>
					<h1>بارگذاری فایل جدید</h1>
					<p>عنوان فایل : </p>
					<input id="title" />
					<input id="input" multiple type="file" />
					<button onClick={upload_files}>آپلود فایل ها</button>
				</div>
			)}
		</>
	);
};
