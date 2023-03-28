import React, { useContext } from "react";
import { GlobalContext } from "../../GlobalContext";
import { ReviewStarsMedium } from "../reviews/ReviewStarsMedium";
import { ReviewStarsSmall } from "../reviews/ReviewStarsSmall";
import { average } from "../../helpers";
import { Link } from "react-router-dom";
export const ReviewsCompany = () => {
	var { overall_reviews, users } = useContext(GlobalContext).global_context_state;

	if (overall_reviews === undefined || users === undefined)
		return "در حال بارگذاری اطلاعات از سرور ...";
	return (
		<>
			<div className="row g-3">
				{overall_reviews.slice(0, 3).map((i) => (
					<div key={i._id} className="col-12 col-lg-4" data-aos="fade-left">
						<div className="bg-light p-4 d-flex h-100 justify-content-start align-items-center flex-column text-center">
							<p className="fw-bolder lead">{i.title}</p>
							<p className="mb-3">{i.text}</p>
							<small className="text-muted d-block mb-2 fw-bolder">
								@{users.find((user) => user._id === i.user_id).username}
							</small>
							<ReviewStarsSmall width={i.width} />
						</div>
					</div>
				))}
			</div>
			<div className="d-flex justify-content-center flex-column mt-7 align-items-center">
				<h3 className="mb-4 fw-bold fs-4">نظرات دیگران را مشاهده کنید</h3>
				<div className="d-flex justify-content-center align-items-center">
					<span className="fs-3 fw-bold me-4">
						{overall_reviews.length === 0
							? "?"
							: average(overall_reviews.map((i) => Number(i.width))) / 20}{" "}
						/ 5
					</span>
					<ReviewStarsMedium
						colour="text-dark"
						width={
							overall_reviews.length === 0
								? undefined
								: average(overall_reviews.map((i) => Number(i.width)))
						}
					/>
				</div>
				<Link to="/overall_reviews" className="btn btn-dark rounded-0 mt-4">
					مشاهده همه {overall_reviews.length} نظر
				</Link>
			</div>
		</>
	);
};
