import React from "react";

export const BreadcrumbsOne = () => {
	return (
		<nav aria-label="breadcrumb">
			<ol class="breadcrumb">
				<li class="breadcrumb-item">
					<a href="#">Home</a>
				</li>
				<li class="breadcrumb-item">
					<a href="#">Activities</a>
				</li>
				<li class="breadcrumb-item active" aria-current="page">
					Clothing
				</li>
			</ol>
		</nav>
	);
};
