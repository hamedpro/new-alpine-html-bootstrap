import React from "react";
import "./assets/scss/libs.scss";
import "./assets/scss/theme.scss";
import { templateName } from "./data/config.json";
export const App = () => {

	return (
		<>
			<title>{templateName}</title>
			<h1>App</h1>
		</>
	);
};
