import React from "react";
import { Route, Routes } from "react-router-dom";
import { NewCategory } from "../partials/AdminDashboard/NewCategory";
import { NewPost } from "../partials/AdminDashboard/NewPost";
import { AdminDashboardIndexPageContent } from "./AdminDashboardIndexPageContent";
import { AdminDashboardInstagramImages } from "./AdminDashboardInstagramImages";
import { AdminDashboardOthers } from "./AdminDashboardOthers";
import { AdminDashboardSocialMedia } from "./AdminDashboardSocialMedia";

export const AdminDashboard = () => {
	return (
		<>
			<h1>داشبورد ادمین</h1>
			<Routes>
				<Route path="new_category" element={<NewCategory />} />
				<Route path="new_post" element={<NewPost />} />
				<Route path="manage_header" element={<NewPost />} />
				<Route path="others" element={<AdminDashboardOthers />} />
				<Route path="index_page_content" element={<AdminDashboardIndexPageContent />} />
				<Route path="social_media" element={<AdminDashboardSocialMedia />} />
				<Route path="instagram_images" element={<AdminDashboardInstagramImages />} />
			</Routes>
		</>
	);
};
