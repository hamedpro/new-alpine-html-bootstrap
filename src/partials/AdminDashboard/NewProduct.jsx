import axios from "axios";
import { Fragment, useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import ReactSelect from "react-select";
var input_value = (element_id) => document.getElementById(element_id).value;
export const NewProduct = () => {
	var [product_categories, set_product_categories] = useState();
	var [options, set_options] = useState([]);
	var [selected_product_category, set_selected_product_category] = useState();
	useEffect(() => {
		axios({
			baseURL: api_endpoint,
			url: "/collections/product_categories",
			data: {
				filters: {},
			},
		})
			.then((response) => response.data)
			.then((data) => set_product_categories(data));
	}, []);
	if (product_categories === undefined) return <h1>در حال بارگذاری دسته بندی های کالا ها ...</h1>;
	async function submit_product() {
		var files = document.getElementById("image_files_ids").files;

		if (files.length === 0) {
			alert("حداقل یک عکس برای این کالا انتخاب کنید");
			return;
		}
		if (selected_product_category === undefined) {
			alert(
				"لطفا یک دسته بندی برای این محصول انتخاب کنید و اگر دسته بندی مورد نظر شما وجود ندارد ابتدا آن را بسازید."
			);
			return;
		}

		var files_ids = [];
		for (var file of files) {
			var form = new FormData();
			form.append("file", file);
			var { file_id } = (
				await axios({
					url: "http://localhost:4000/files",
					method: "post",
					data: form,
				})
			).data;
			files_ids.push(file_id);
		}

		await axios({
			url: "http://localhost:4000/collections/products",
			method: "post",
			data: {
				document: {
					title: input_value("title_input"),
					price: input_value("price_input"),
					currency: "$",

					image_files_ids: files_ids,
					category_id: selected_product_category.value,
					discount_percentage: input_value("discount_percentage_input"),
					options,
					description: document.getElementById("description").value,
				},
			},
		});
		alert("با موفقیت انجام شد !");
	}
	return (
		<div className="p-2">
			<h1>محصول جدید</h1>
			<h1>انتخاب عکس های این محصول جدید </h1>
			<p>
				حداقل یک عکس برای این محصول باید انتخاب شود و اگر عکس دومی انتخاب شود به عنوان عکس
				هاور این محصول در نظر گرفته خواهد شد
			</p>
			<input type="file" id="image_files_ids" multiple />
			{["discount_percentage", "title", "price"].map((key) => (
				<Fragment {...{ key }}>
					<p>
						{key}
						{key === "price" ? "(price before discount)" : null}
					</p>
					<input type={"text"} id={`${key}_input`} />
				</Fragment>
			))}
			<p>واحد پول : $</p>
			<h3>توضیحات محصول : </h3>
			<textarea id="description" />
			<h3>موارد این محصول </h3>
			<ul>
				{options.map((i, index) => (
					<li>{i}</li>
				))}
			</ul>

			<button
				onClick={() =>
					set_options((prev) => [
						...prev,
						window.prompt("متن این مورد را اینجا وارد کنید "),
					])
				}
			>
				مورد جدید{" "}
			</button>
			<h3>یک دسته بندی برای این محصول انتخاب کنید :</h3>
			<p>
				اگر دسته بندی مورد نظر شما هم اکنون موجود نیست ابتدا آن را از اینجا ایجاد کنید{" "}
				<Link to="/products/new">: ایجاد</Link>
			</p>
			<ReactSelect
				options={product_categories.map((i) => ({ value: i._id, label: i.title }))}
				onChange={set_selected_product_category}
				value={selected_product_category}
			/>

			<button onClick={submit_product}>ثبت محصول</button>
		</div>
	);
};
