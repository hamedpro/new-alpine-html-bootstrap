import React from "react";
import { Link } from "react-router-dom";

export const AdminDashboardRoot = () => {
	return (
		<>
			<h1>داشبورد ادمین</h1>
			<h1>راهنمای بخش ها</h1>
			<div className="tw-flex tw-flex-col tw-space-y-3">
				<Link to={"/admin-dashboard/new_category"}>دسته بندی جدید</Link>
				<Link to={"/admin-dashboard/others"}>متفرقه</Link>
				<Link to={"/admin-dashboard/index_page_content"}>مدیریت محتوای صفحه اصلی</Link>
				<Link to={"/admin-dashboard/key_values"}>جفت مقدار ها</Link>
				<Link to={"/admin-dashboard/instagram_images"}>مدیریت عکس های اینستاگرام </Link>
			</div>
		</>
	);
};
