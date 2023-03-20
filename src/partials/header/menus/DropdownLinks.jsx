import React from "react";
import { Link } from "react-router-dom";

export const DropdownLinks = ({ data }) => {
	//data looks like this :
	// [{header : string , items : [{link , text}] , view_all_link : link }
	// , another object like previos one  ]

	//links are relative paths which we are going to use them with Link component
	return (
		<div className="row py-lg-5">
			{data.map((column, column_index) => (
				<div className="col col-lg-6" key={column_index}>
					<h6 className="dropdown-heading">{column.header}</h6>
					<ul className="list-unstyled">
						{column.items.map((item, item_index) => (
							<li className="dropdown-list-item" key={item_index}>
								<Link to={item.link} className="dropdown-item">
									{item.text}
								</Link>
							</li>
						))}

						<li className="dropdown-list-item">
							<Link
								className="dropdown-item dropdown-link-all"
								to={column.view_all_link}
							>
								View All
							</Link>
						</li>
					</ul>
				</div>
			))}
		</div>
	);
};
