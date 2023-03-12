import axios from "axios";
import React, { useState } from "react";
import { GlobalContext } from "./GlobalContext";

export const GlobalContextProvider = ({ children }) => {
	var [global_context_state, set_global_context_state] = useState();
	async function refresh_global_context_state() {
		var products = (
			await axios({
				url: "/collections/products",
				baseURL: api_endpoint,
			})
		).data;
		set_global_context_state((current_state) => ({ ...current_state, products }));
	}
	return (
		<GlobalContext.Provider
			children={children}
			value={{ refresh_global_context_state, set_global_context_state, global_context_state }}
		/>
	);
};
