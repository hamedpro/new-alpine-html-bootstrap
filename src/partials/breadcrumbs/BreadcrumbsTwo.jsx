import React from "react";

export const BreadcrumbsTwo = ({ parts }) => {
	return (
		<nav aria-label="breadcrumb">
			<ol className="breadcrumb">
				{parts.slice(0, parts.length - 1).map((part, index) => (
					<li key={index} className="breadcrumb-item breadcrumb-light">
						<a href="#">{part}</a>
					</li>
				))}

				<li className="breadcrumb-item active breadcrumb-light">{parts.at(-1)}</li>
			</ol>
		</nav>
	);
};
