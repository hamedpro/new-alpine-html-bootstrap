import axios from "axios";
import fs from "fs";

var response = await axios({
	url: "http://localhost:4000/collections/products",
	method: "patch",
	data: {
		update_filter: {},
		update_set: {
			hover_image_file_id: "16785602512517061",
		},
	},
});
console.log(response.data);
