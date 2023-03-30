import React, { Fragment, useContext } from "react";
import { GlobalContext } from "../GlobalContext";

export const OverallReviews = () => {
	var { overall_reviews } = useContext(GlobalContext).global_context_state;
	return (
		<>
			<h1>درخواست های پشتیبانی کلی </h1>
			{overall_reviews.map((i) => (
				<Fragment key={i._id}>
					<pre>{JSON.stringify(i)}</pre>
					<hr />
				</Fragment>
			))}
		</>
	);
};
