import React, { useEffect, useState } from "react";

export const Pagination = ({ onPageChange }) => {
	//onPageChange will be called with page
	//number(not index) as its first parameter
	var [current_active_page, set_current_active_page] = useState(1);
	function find_current_sequence() {
		var cursor = 1;
		while (true) {
			var sequence = [cursor, cursor + 1, cursor + 2];
			if (sequence.includes(current_active_page)) {
				return sequence;
			}
		}
	}
	useEffect(() => {
		onPageChange(current_active_page);
	}, [current_active_page]);
	return (
		<nav
			className="border-top mt-5 pt-5 d-flex justify-content-between align-items-center"
			aria-label="Category Pagination"
		>
			<ul className="pagination">
				<li
					className="page-item"
					onClick={() => {
						set_current_active_page((i) => i - 1);
					}}
				>
					<span className="page-link">
						<i className="ri-arrow-left-line align-bottom"></i> قبلی
					</span>
				</li>
			</ul>
			<ul className="pagination">
				{find_current_sequence().map((i) => (
					<li
						key={Math.round(Math.random() * 10000)}
						className={"page-item  mx-1 " + (i === current_active_page ? "active" : "")}
						onClick={() => {
							set_current_active_page(i);
						}}
					>
						<a className="page-link" href="#">
							{i}
						</a>
					</li>
				))}
			</ul>
			<ul className="pagination">
				<li
					className="page-item"
					onClick={() => {
						set_current_active_page((i) => i + 1);
					}}
				>
					<span className="page-link">
						بعدی <i className="ri-arrow-right-line align-bottom"></i>
					</span>
				</li>
			</ul>
		</nav>
	);
};
