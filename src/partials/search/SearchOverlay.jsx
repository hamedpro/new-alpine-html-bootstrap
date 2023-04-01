import React, { useState } from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { GlobalContext } from "../../GlobalContext";
import { ListingCard } from "../category/listing-cards/ListingCard";
export const SearchOverlay = () => {
	var [search_query, set_search_query] = useState();
	var { products, product_categories, posts } = useContext(GlobalContext).global_context_state;

	function search(search_query) {
		var tmp = { name: "hamed is here", lname: "hamed is not here" };
		return {
			products: products.filter((product) => JSON.stringify(product).includes(search_query)),
			product_categories: product_categories.filter((product_category) =>
				JSON.stringify(product_category).includes(search_query)
			),
			posts: posts.filter((post) => JSON.stringify(post).includes(search_query)),
		};
	}
	return (
		<section className="search-overlay">
			<div className="container search-container">
				<div className="py-5">
					<div className="d-flex justify-content-between align-items-center mb-4">
						<p className="lead lh-1 m-0 fw-bold">به دنبال چه چیزی هستید ؟</p>
						<button
							className="btn btn-light btn-close-search"
							onClick={() => {
								document.body.classList.remove("search-active");
							}}
						>
							<i className="ri-close-circle-line align-bottom"></i> بستن جستجو
						</button>
					</div>
					<form>
						<input
							type="text"
							className="form-control"
							id="searchForm"
							onChange={(e) => set_search_query(e.target.value)}
							placeholder="با استفاده از نام محصول یا ... جستجو کنید"
						/>
					</form>
					{search_query === "" || search_query === undefined ? (
						<div className="bg-primary p-4 text-white mb-5 mt-2">
							<p className="lead m-0">
								چیزی تایپ کنید تا نتایج جستجو اینجا نمایش داده شود
							</p>
						</div>
					) : (
						<>
							<div className="my-5">
								<p className="lead fw-bolder">
									نتایج جستجو در محصولات : {search(search_query).products.length}{" "}
									نتیجه پیدا شد برای
									<span className="fw-bold">"{search_query}"</span>
								</p>
								<div className="row">
									{search(search_query).products.map((i) => (
										<div
											key={i._id}
											className="col-12 col-md-6 col-lg-3 mb-3 mb-lg-0"
										>
											<ListingCard {...i} />
										</div>
									))}
								</div>
							</div>
							<div className="my-5">
								<p className="lead fw-bolder">
									نتایج جستجو در نام دسته بندی های کالا ها:{" "}
									{search(search_query).product_categories.length} نتیجه پیدا شد
									برای
									<span className="fw-bold">"{search_query}"</span>
								</p>
								<div className="row">
									{search(search_query).product_categories.map((i) => (
										<div
											key={i._id}
											className="col-12 col-md-6 col-lg-3 mb-3 mb-lg-0"
										>
											{JSON.stringify(i)}
										</div>
									))}
								</div>
							</div>
							<div className="my-5">
								<p className="lead fw-bolder">
									نتایج جستجو در پست ها : {search(search_query).posts.length}{" "}
									نتیجه پیدا شد برای
									<span className="fw-bold">"{search_query}"</span>
								</p>
								<div className="row">
									{search(search_query).posts.map((i) => (
										<div
											key={i._id}
											className="col-12 col-md-6 col-lg-3 mb-3 mb-lg-0"
										>
											{JSON.stringify(i)}
										</div>
									))}
								</div>
							</div>
						</>
					)}

					<div className="bg-dark p-4 text-white">
						<p className="lead m-0">
							چیزی که به دنبال آن هستید را پیدا نکردید ؟{" "}
							<Link
								className="transition-all opacity-50-hover text-white text-link-border border-white pb-1 border-2"
								to="/support-messages/new"
							>
								ارسال درخواست
							</Link>
						</p>
					</div>
				</div>
			</div>
		</section>
	);
};
