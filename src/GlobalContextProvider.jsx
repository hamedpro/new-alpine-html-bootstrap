import axios from "axios";
import React, { useEffect, useState } from "react";
import { GlobalContext } from "./GlobalContext.js";

export const GlobalContextProvider = ({ children }) => {
	var [global_context_state, set_global_context_state] = useState({});
	async function refresh_global_context_state() {
		[
			"products",
			"cart_items",
			"options_size_one",
			"options_size_two",
			"slideshow_brands_one",
			"product_categories",
			"posts",
			"product_reviews",
			"cart_items",
			"products_likes",
			"key_values",
			"overall_reviews",
			"users",
			"download_center_items",
		].forEach(async (collection_name) => {
			var collection = (
				await axios({
					url: `/collections/${collection_name}`,
					baseURL: api_endpoint,
				})
			).data;
			set_global_context_state((current_state) => ({
				...current_state,
				[collection_name]: collection,
			}));
		});

		var filters_one = (
			await axios({
				url: `/collections/filters_one`,
				baseURL: api_endpoint,
			})
		).data[0];
		set_global_context_state((current_state) => ({ ...current_state, filters_one }));
	}
	useEffect(() => {
		refresh_global_context_state();
	}, []);
	//useEffect(() => console.log(global_context_state), [global_context_state]);
	return (
		<GlobalContext.Provider
			children={children}
			value={{ refresh_global_context_state, set_global_context_state, global_context_state }}
		/>
	);
};
