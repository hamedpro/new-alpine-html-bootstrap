import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import { NewCategory } from "../partials/AdminDashboard/NewCategory";
import { AdminDashboardIndexPageContent } from "./AdminDashboardIndexPageContent";
import { AdminDashboardInstagramImages } from "./AdminDashboardInstagramImages";
import { AdminDashboardOthers } from "./AdminDashboardOthers";
import { AdminDashboardKeyValues } from "./AdminDashboardKeyValues";
import { AdminDashboardRoot } from "./AdminDashboardRoot";

export const AdminDashboard = () => {
	return (
		<>
			<Routes>
				<Route path="/" element={<AdminDashboardRoot />} />
				<Route path="new_category" element={<NewCategory />} />
				<Route path="others" element={<AdminDashboardOthers />} />
				<Route path="index_page_content" element={<AdminDashboardIndexPageContent />} />
				<Route path="key_values" element={<AdminDashboardKeyValues />} />
				<Route path="instagram_images" element={<AdminDashboardInstagramImages />} />
			</Routes>
		</>
	);
};
