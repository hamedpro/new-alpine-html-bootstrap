import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const OffcanvasReview = () => {
	var { product_id } = useParams();
	var [has_recommended_this_product, set_has_recommended_this_product] = useState(true);
	async function submit_new_product_review() {
		await axios({
			baseURL: api_endpoint,
			url: "/collections/product_reviews",
			method: "post",
			data: {
				document: {
					user_id: window.localStorage.getItem("user_id"),
					product_id,
					width: Number(document.getElementById("rating_width").value),
					title: document.getElementById("formReviewTitle").value,
					text: document.getElementById("formReviewReview").value,
					time: new Date().getTime(),
					has_recommended_this_product,
				},
			},
		});
		alert("با موفقیت انجام شد !");
	}
	return (
		<div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasReview">
			<div className="offcanvas-header d-flex align-items-center">
				<h5 className="offcanvas-title" id="offcanvasReviewLabel">
					نوشتن یک نظر
				</h5>
				<button
					type="button"
					className="btn-close text-reset"
					data-bs-dismiss="offcanvas"
					aria-label="Close"
				></button>
			</div>
			<div className="offcanvas-body">
				{window.localStorage.getItem("user_id") ? (
					<form>
						<div className="form-group mb-3 mt-2">
							<label className="form-label" htmlFor="formReviewTitle">
								عنوان نظر شما
							</label>
							<input
								type="text"
								className="form-control"
								id="formReviewTitle"
								placeholder="Review Title"
							/>
						</div>
						<div className="form-group mb-3 mt-2">
							<label className="form-label" htmlFor="formReviewReview">
								نظر شما
							</label>
							<textarea
								className="form-control"
								name="formReviewReview"
								id="formReviewReview"
								cols="30"
								rows="5"
								placeholder="Your Review"
							></textarea>
						</div>
						<p>
							{has_recommended_this_product
								? "من این کالا را به دیگران پیشنهاد میدهم "
								: "من این کالا را پیشنهاد نمیدهم "}
						</p>
						<div onClick={() => set_has_recommended_this_product((prev) => !prev)}>
							تغییر وضعیت{" "}
						</div>
						<h3>به این محصول از ۰ تا ۱۰۰ امتیاز دهید :</h3>
						<input id="rating_width" type="number" className="d-block" />
						<button
							onClick={submit_new_product_review}
							type="submit"
							className="btn btn-dark hover-lift hover-boxshadow"
						>
							ثبت نظر
						</button>
					</form>
				) : (
					<>
						<h1>برای ثبت نظر باید وارد حساب کاربری خود شده باشید.</h1>
						<a href="/login">ورود به حساب کاربری</a>
					</>
				)}
			</div>
		</div>
	);
};
