import axios from "axios";
import React, { useContext } from "react";
import { GlobalContext } from "../GlobalContext";

export const NewOverallReview = () => {
	var { refresh_global_context_state } = useContext(GlobalContext);
	var user_id = window.localStorage.getItem("user_id");
	async function submit_new_overall_review() {
		await axios({
			baseURL: api_endpoint,
			url: "/collections/overall_reviews",
			method: "post",
			data: {
				document: {
					title: document.getElementById("title_input").value,
					text: document.getElementById("text_input").value,
					time: new Date().getTime(),
					user_id,
					width: Number(document.getElementById("width_input").value),
				},
			},
		});
		refresh_global_context_state();
		alert("done ! ");
	}
	return (
		<>
			<h1>NewOverallReview</h1>
			{user_id !== null ? (
				<>
					<p>title : </p>
					<input id="title_input" />
					<p>text : </p>
					<input id="text_input" />
					<p>rate from 0 to 100 : </p>
					<input type="number" min={0} max={100} id="width_input" />
					<button onClick={submit_new_overall_review}>submit </button>
				</>
			) : (
				<h1>you have to be loged in in order to submit a new overall review</h1>
			)}
		</>
	);
};
