import axios from "axios";
import { useEffect } from "react";
export const NewProduct = () => {
	async function submit_a_fake_product() {
		var f = new FormData();
		f.append("file", document.getElementById("file_input").files[0]);
		var { file_id } = (
			await axios({
				url: "http://localhost:4000/files",
				method: "post",
				data: f,
			})
		).data;
		await axios({
			url: "http://localhost:4000/collections/products",
			method: "post",
			data: {
				document: {
					title: "Full Zip Hoodie",
					brand: "The North Face",
					price: "1129.99",
					currency: "$",
					options: "Availble in 4 colours, 10 sizes",

					image_file_id: file_id,
					"review-width": "90%",
					"review-count": "4.7 (456)",
				},
			},
		});
		alert("done !");
	}
	return (
		<>
			<h1>Newproductف</h1>
			<input type="file" id="file_input" />
			<button onClick={submit_a_fake_product}>submit a fake product</button>
			<div style={{ height: "300px", width: "490px", backgroundColor: "darkblue" }}></div>
		</>
	);
};
