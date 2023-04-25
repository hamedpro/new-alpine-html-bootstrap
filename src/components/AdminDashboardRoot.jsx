import React from "react";
import { Link } from "react-router-dom";

export const AdminDashboardRoot = () => {
	return (
		<div className="tw-text-right tw-p-4 tw-flex tw-flex-col tw-items-end">
			<h1 className="tw-text-4xl tw-mb-4">داشبورد ادمین</h1>

			<div className="tw-flex tw-flex-col tw-space-y-3 tw-px-7 tw-border tw-border-blue-500 tw-w-fit">
				<ul className="tw-list-disc" dir="rtl">
					<li>
						<Link to={"/admin-dashboard/new_category"}>دسته بندی جدید</Link>
					</li>
					<li>
						<Link to={"/admin-dashboard/others"}>متفرقه</Link>
					</li>

					<li>
						<Link to={"/admin-dashboard/index_page_content"}>
							مدیریت محتوای صفحه اصلی
						</Link>
					</li>

					<li>
						<Link to={"/admin-dashboard/key_values"}>جفت مقدار ها</Link>
					</li>

					<li>
						<Link to={"/admin-dashboard/instagram_images"}>
							مدیریت عکس های اینستاگرام{" "}
						</Link>
					</li>
				</ul>
			</div>
		</div>
	);
};
