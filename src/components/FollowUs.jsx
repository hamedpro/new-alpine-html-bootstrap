import React, { useContext } from "react";
import { GlobalContext } from "../GlobalContext";

export const FollowUs = () => {
	var { key_values } = useContext(GlobalContext).global_context_state;

	if (key_values === undefined) return "loading key_values collection ...";
	return (
		<div className="bg-light py-4">
			<div className="container d-flex justify-content-center align-items-center py-2">
				<p className="lead fw-bolder mb-0 lh-1">Find us online</p>
				<ul className="list-unstyled d-flex justify-content-start align-items-center mb-0 ms-3 lh-1">
					<li className="mx-1 mb-0 lh-1">
						<div
							className="text-muted text-decoration-none opacity-75-hover transition-all lh-1"
							onClick={() =>
								key_values.find((i) => i.key === "instagram_id")
									? window.location.replace(
											`https://instagram.com/${
												key_values.find((i) => i.key === "instagram_id")
													.value
											}`
									  )
									: alert("instagram account's id is not set")
							}
						>
							<i className="ri-instagram-fill ri-xl lh-1"></i>
						</div>
					</li>

					<li className="mx-1 mb-0 lh-1">
						<div
							className="text-muted text-decoration-none opacity-75-hover transition-all lh-1"
							onClick={() =>
								key_values.find((i) => i.key === "twitter_id")
									? window.location.replace(
											`https://twitter.com/${
												key_values.find((i) => i.key === "twitter_id").value
											}`
									  )
									: alert("twitter account's id is not set")
							}
						>
							<i className="ri-twitter-fill ri-xl lh-1"></i>
						</div>
					</li>
					<li className="mx-1 mb-0 lh-1">
						<div
							className="text-muted text-decoration-none opacity-75-hover transition-all lh-1"
							onClick={() =>
								key_values.find((i) => i.key === "facebook_id")
									? window.location.replace(
											`https://facebook.com/${
												key_values.find((i) => i.key === "facebook_id")
													.value
											}`
									  )
									: alert("facebook account's id is not set")
							}
						>
							<i className="ri-facebook-fill ri-xl lh-1"></i>
						</div>
					</li>
				</ul>
			</div>
		</div>
	);
};
