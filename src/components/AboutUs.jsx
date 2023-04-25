import React, { useContext } from "react";
import { GlobalContext } from "../GlobalContext";
import { Link, useNavigate } from "react-router-dom";
export const AboutUs = () => {
	var { key_values } = useContext(GlobalContext).global_context_state;
	var data = {};
	for (var key of [
		"instagram_id",
		"twitter_id",
		"facebook_id",
		"company_address",
		"company_landline_phone_number",
		"company_mobile_phone_number",
		"company_name",
		"company_description",
		"company_image_file_id",
	]) {
		if (key_values.find((i) => i.key === key))
			data[key] = key_values.find((i) => i.key === key).value;
	}
	var nav = useNavigate();
	return (
		<div style={{ height: "100vh", width: "100wh", padding: "40px" }}>
			<div className="tw-flex tw-w-full tw-h-1/3 tw-justify-center tw-items-center">
				<h1 className="tw-text-5xl">درباره ما</h1>
			</div>
			<div className="tw-flex tw-flex-col md:tw-flex-row tw-w-full md:tw-h-2/3 tw-space-y-3 md:tw-space-y-0 md:tw-space-x-3">
				<div className="tw-aspect-square md:tw-aspect-auto tw-w-full md:tw-w-1/3 tw-bg-blue-700 tw-flex tw-justify-center tw-items-center tw-rounded-lg">
					{data.company_image_file_id ? (
						<img
							src={new URL(`/files/${data.company_image_file_id}`, api_endpoint)}
							className="tw-w-full tw-aspect-auto"
						/>
					) : (
						<p>عکس شرکت بارگذاری نشده است</p>
					)}
				</div>
				<div className="tw-aspect-square md:tw-aspect-auto tw-w-full md:tw-w-1/3 tw-bg-blue-700 tw-p-5 tw-text-right  tw-rounded-lg">
					<h1 className="tw-mb-4 tw-text-2xl">درباره ما</h1>
					<p>{data.company_description || "توضیحات شرکت ثبت نشده است"}</p>
				</div>
				<div className="tw-aspect-square md:tw-aspect-auto tw-w-full md:tw-w-1/3 tw-bg-blue-700 tw-p-5 tw-text-right  tw-rounded-lg">
					<h1 className="tw-mb-4 tw-text-2xl">تماس با ما</h1>
					<p>
						<span>نام شرکت: </span>
						{data.company_name || "ثبت نشده است"}
					</p>

					<p>
						<span>ادرس شرکت: </span>
						{data.company_address || "ثبت نشده است"}
					</p>
					<p>
						<span>شماره تلفن ثابت شرکت: </span>
						{data.company_landline_phone_number || "ثبت نشده است"}
					</p>
					<p>
						<span>شماره تلفن همراه شرکت: </span>
						{data.company_mobile_phone_number || "ثبت نشده است"}
					</p>
					<div className="tw-bg-gray-200">
						<span>
							علاوه بر این شما میتوانید از تیکت های پشتیبانی برای ارتباط با ما استفاده
							کنید
						</span>
						<br />

						<button onClick={() => nav("/support-messages/new")}>
							تیکت پشتیبانی جدید
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};
