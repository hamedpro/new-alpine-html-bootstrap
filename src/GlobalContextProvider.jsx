import axios from "axios";
import React, { useEffect, useState } from "react";
import { GlobalContext } from "./GlobalContext.js";

export const GlobalContextProvider = ({ children }) => {
	var [global_context_state, set_global_context_state] = useState({});
	var collections_to_fetch = [
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
		"filters_one",
	];
	async function refresh_global_context_state() {
		collections_to_fetch.forEach(async (collection_name) => {
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
	}
	useEffect(() => {
		refresh_global_context_state();
	}, []);
	return (
		<GlobalContext.Provider
			value={{ refresh_global_context_state, set_global_context_state, global_context_state }}
		>
			{collections_to_fetch.every((i) => global_context_state[i] !== undefined)
				? children
				: "در حال بارگذاری اطلاعات ..."}
		</GlobalContext.Provider>
	);
};
