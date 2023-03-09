import React from "react";

export const FilterText = ({ label, count }) => {
	return (
		<li class="mb-2">
			<a
				class="text-decoration-none text-body text-secondary-hover transition-all d-flex justify-content-between align-items-center"
				href="#"
			>
				<span>
					<i class="ri-arrow-right-s-line align-bottom ms-n1"></i> {label}
				</span>
				{count && <span class="text-muted ms-4">({count})</span>}
			</a>
		</li>
	);
};
