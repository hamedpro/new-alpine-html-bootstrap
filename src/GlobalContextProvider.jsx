import axios from "axios";
import React, { useEffect, useState } from "react";
import { GlobalContext } from "./GlobalContext.js";

export const GlobalContextProvider = ({ children }) => {
	var [global_context_state, set_global_context_state] = useState({});
	function refresh_global_context_state() {
		[
			"products",
			"cart_items",
			"filters_one",
			"options_size_one",
			"options_size_two",
			"slideshow_brands_one",
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
	}
	useEffect(refresh_global_context_state, []);
	//useEffect(() => console.log(global_context_state), [global_context_state]);
	return (
		<GlobalContext.Provider
			children={children}
			value={{ refresh_global_context_state, set_global_context_state, global_context_state }}
		/>
	);
};
