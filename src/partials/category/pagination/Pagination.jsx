import React from "react";

export const Pagination = () => {
	return (
		<nav
			class="border-top mt-5 pt-5 d-flex justify-content-between align-items-center"
			aria-label="Category Pagination"
		>
			<ul class="pagination">
				<li class="page-item">
					<a class="page-link" href="#">
						<i class="ri-arrow-left-line align-bottom"></i> Prev
					</a>
				</li>
			</ul>
			<ul class="pagination">
				<li class="page-item active mx-1">
					<a class="page-link" href="#">
						1
					</a>
				</li>
				<li class="page-item mx-1">
					<a class="page-link" href="#">
						2
					</a>
				</li>
				<li class="page-item mx-1">
					<a class="page-link" href="#">
						3
					</a>
				</li>
			</ul>
			<ul class="pagination">
				<li class="page-item">
					<a class="page-link" href="#">
						Next <i class="ri-arrow-right-line align-bottom"></i>
					</a>
				</li>
			</ul>
		</nav>
	);
};
