import axios from "axios";
import { Fragment, useEffect } from "react";
import { useState } from "react";
import ReactSelect from "react-select";
var input_value = (element_id) => document.getElementById(element_id).value;
export const NewProduct = () => {
	var [product_categories, set_product_categories] = useState();
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
	if (product_categories === undefined) return <h1>loading current product categories ... </h1>;
	async function submit_product() {
		var files = document.getElementById("image_files_ids").files;

		if (files.length === 0) {
			alert("please select at least 1 image for this product");
			return;
		}
		if (selected_product_category === undefined) {
			alert(
				"please select a product category and if there is nothing to select create one first. "
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
					options: input_value("options_input"),
					image_files_ids: files_ids,
					category_id: selected_product_category.value,
					discount_percentage: input_value("discount_percentage_input"),
				},
			},
		});
		alert("done !");
	}
	return (
		<>
			<h1>new product</h1>
			<h1>select images of this product </h1>
			<p>
				at least one photo must be selected and if there is a second one that will be used
				as product's hover image{" "}
			</p>
			<input type="file" id="image_files_ids" multiple />
			{["discount_percentage", "title", "price", "options"].map((key) => (
				<Fragment {...{ key }}>
					<p>
						{key}
						{key === "price" ? "(price before discount)" : null}
					</p>
					<input type={"text"} id={`${key}_input`} />
				</Fragment>
			))}
			<p>currency : $</p>
			<ReactSelect
				options={product_categories.map((i) => ({ value: i._id, label: i.title }))}
				onChange={set_selected_product_category}
				value={selected_product_category}
			/>
			<button onClick={submit_product}>submit product</button>
		</>
	);
};
