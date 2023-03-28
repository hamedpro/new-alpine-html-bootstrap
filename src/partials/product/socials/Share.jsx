import React from "react";

export const Share = ({ public_url }) => {
	return (
		<div className="d-flex justify-content-start align-items-center">
			<p className="fw-bolder lh-1 mb-0 me-3">اشتراک گذاری</p>
			<ul className="list-unstyled p-0 m-0 d-flex justify-content-start lh-1 align-items-center mt-1">
				<li className="me-2">
					<a
						className="text-decoration-none"
						href={`https://www.facebook.com/sharer/sharer.php?u=${public_url}`}
						role="button"
					>
						<i className="ri-facebook-box-fill"></i>
					</a>
				</li>

				<li className="me-2">
					<a
						className="text-decoration-none"
						href={`https://telegram.me/share/url?url=${public_url}&text=checkout this link`}
						role="button"
					>
						<i className="ri-telegram-fill"></i>
					</a>
				</li>
				<li className="me-2">
					<a
						className="text-decoration-none"
						href={`http://twitter.com/share?text=checkout this link&url=${public_url}`}
						role="button"
					>
						<i className="ri-twitter-fill"></i>
					</a>
				</li>
			</ul>
		</div>
	);
};
