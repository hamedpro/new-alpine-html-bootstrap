import React from "react";
import { Link } from "react-router-dom";

export const BreadcrumbsTwo = ({ parts }) => {
	return (
		<nav aria-label="breadcrumb" className="tw-mb-4">
			<ol className="tw-flex tw-flex-row-reverse tw-space-x-2">
				{parts.slice(0, parts.length - 1).map((part, index) => (
					<li key={index} className=" breadcrumb-light tw-text-right tw-pl-2" dir="rtl">
						<Link to={part.location}>{part.label} /</Link>
					</li>
				))}

				<li className="active breadcrumb-light">
					<Link to={parts.at(-1).location}>{parts.at(-1).label} </Link>
				</li>
			</ol>
		</nav>
	);
};
