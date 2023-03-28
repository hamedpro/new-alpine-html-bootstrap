import React, { useEffect } from "react";
import { useState } from "react";

export const BreadcrumbsOne = () => {
	function calc_items() {
		return window.location.pathname.split("/").filter((i) => i !== "/");
	}
	var [items, set_items] = useState(calc_items);
	useEffect(() => {
		set_items(calc_items());
	}, [window.location.pathname]);
	return (
		<nav aria-label="breadcrumb">
			<ol className="breadcrumb">
				{items.map((item, item_index, array) => (
					<li
						key={item_index}
						className={`breadcrumb-item ${
							item_index === array.length - 1 ? "active" : ""
						}`}
						aria-current={item_index === array.length - 1 ? "page" : undefined}
					>
						<a href="#">{item}</a>
					</li>
				))}
			</ol>
		</nav>
	);
};
