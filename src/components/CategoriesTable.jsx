import React, { Fragment, useContext } from "react";
import { GlobalContext } from "../GlobalContext";
import { useNavigate } from "react-router-dom";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

export const CategoriesTable = () => {
	var { product_categories, products } = useContext(GlobalContext).global_context_state;
	var nav = useNavigate();
	return (
		<>
			<TableContainer
				component={Paper}
				sx={{ width: "90%", marginX: "auto", direction: "rtl" }}
			>
				<Table>
					<TableHead>
						<TableRow>
							<TableCell>شماره</TableCell>
							<TableCell>نام دسته بندی</TableCell>
							<TableCell>تعداد کالا</TableCell>
							<TableCell>گزینه ها</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{product_categories.map((i, index) => (
							<Fragment key={i._id}>
								<TableRow>
									<TableCell className="mx-2">{index}</TableCell>
									<TableCell className="mx-2">{i.title}</TableCell>
									<TableCell className="mx-2">
										{
											products.filter(
												(product) => product.category_id === i._id
											).length
										}{" "}
										کالا
									</TableCell>
									<TableCell>
										<button
											className="mx-2"
											onClick={() => nav(`/categories/${i._id}`)}
										>
											مشاهده دسته بندی
										</button>
									</TableCell>
								</TableRow>
							</Fragment>
						))}
					</TableBody>
				</Table>
			</TableContainer>
		</>
	);
};
