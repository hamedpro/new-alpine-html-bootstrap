import axios from "axios";
import React, { Fragment, useContext } from "react";
import { GlobalContext } from "../GlobalContext";

export const AdminDashboardSocialMedia = () => {
	var { refresh_global_context_state } = useContext(GlobalContext);
	var { key_values } = useContext(GlobalContext).global_context_state;
	async function submit_new_value(key) {
		if (key_values.find((i) => i.key === key)) {
			//that value already exists so we just update that
			await axios({
				baseURL: api_endpoint,
				url: "/collections/key_values",
				method: "patch",
				data: {
					update_set: {
						value: document.getElementById(key).value,
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
						value: document.getElementById(key).value,
					},
				},
			});
		}
		refresh_global_context_state();
		alert("done !");
	}
	if (key_values === undefined) return "loading key_values collection ... ";
	return (
		<>
			<h1>AdminDashboardSocialMedia</h1>
			{["instagram_id", "twitter_id", "facebook_id"].map((i) => (
				<Fragment key={i}>
					<h2>{i}</h2>
					<p>
						current value :{" "}
						{key_values.find((row) => row.key === i)
							? key_values.find((row) => row.key === i).value
							: "there is not any value set for this"}
					</p>
					<p>set a new value :</p>
					<input type="text" id={i} />
					<button onClick={() => submit_new_value(i)}>submit </button>
				</Fragment>
			))}
		</>
	);
};
