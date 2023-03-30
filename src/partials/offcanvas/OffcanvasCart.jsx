import axios from "axios";
import { useContext } from "react";
import { GlobalContext } from "../../GlobalContext";
import { calc_discounted_price, sum } from "../../helpers";

export const OffcanvasCart = () => {
	var { refresh_global_context_state } = useContext(GlobalContext);
	var { cart_items, products, product_categories } =
		useContext(GlobalContext).global_context_state;
	async function remove_cart_item(cart_item_id) {
		await axios({
			baseURL: api_endpoint,
			url: "/collections/cart_items",
			method: "delete",
			data: {
				filters: {
					_id: cart_item_id,
				},
			},
		});
		await refresh_global_context_state();
	}
	function cart_items_sum() {
		// returns total discounted price of cart items (considering their quantity) of this currently loged in user
		var total = 0;
		cart_items.forEach((cart_item) => {
			var { discount_percentage, price } = products.find(
				(product) => cart_item.product_id === product._id
			);
			total +=
				calc_discounted_price(Number(price), Number(discount_percentage)) * cart_item.count;
		});
		return total;
	}
	return (
		<div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasCart">
			<div className="offcanvas-header d-flex align-items-center">
				<h5 className="offcanvas-title" id="offcanvasCartLabel">
					سبد خرید شما
				</h5>
				<button
					type="button"
					className="btn-close text-reset"
					data-bs-dismiss="offcanvas"
					aria-label="Close"
				></button>
			</div>
			<div className="offcanvas-body">
				<div className="d-flex flex-column justify-content-between w-100 h-100">
					<div>
						<div className="mt-4 mb-5">
							<p className="mb-2 fs-6">
								<i className="ri-truck-line align-bottom me-2"></i>{" "}
								<span className="fw-bolder">۲۲</span> هزار تومن باقی مانده تا ارسال
								رایگان
							</p>
							<div className="progress f-h-1">
								<div
									className="progress-bar bg-success"
									role="progressbar"
									style={{ width: "25%" }}
									aria-valuenow="25"
									aria-valuemin="0"
									aria-valuemax="100"
								></div>
							</div>
						</div>
						{cart_items
							.filter(
								(cart_item) =>
									cart_item.user_id === window.localStorage.getItem("user_id")
							)
							.map((cart_item) => (
								<div
									key={cart_item._id}
									className="row mx-0 pb-4 mb-4 border-bottom"
								>
									<div className="col-3">
										<picture className="d-block bg-light">
											<img
												className="img-fluid"
												src={
													new URL(
														`/files/${
															products.find(
																(product) =>
																	cart_item.product_id ===
																	product._id
															).image_files_ids[0]
														}`,
														api_endpoint
													).href
												}
											/>
										</picture>
									</div>
									<div className="col-9">
										<div>
											<h6 className="justify-content-between d-flex align-items-start mb-2">
												{
													products.find(
														(product) =>
															cart_item.product_id === product._id
													).title
												}
												<i
													className="ri-close-line"
													onClick={() => remove_cart_item(cart_item._id)}
												></i>
											</h6>
											<small className="d-block text-muted fw-bolder">
												{
													product_categories.find(
														(product_category) =>
															product_category._id ===
															products.find(
																(product) =>
																	cart_item.product_id ===
																	product._id
															).category_id
													).title
												}
											</small>
											<small className="d-block text-muted fw-bolder">
												تعداد : {cart_item.count}
											</small>
										</div>
										<p className="fw-bolder text-end m-0">
											{(products.find(
												(product) => cart_item.product_id === product._id
											).price *
												(100 -
													products.find(
														(product) =>
															cart_item.product_id === product._id
													).discount_percentage)) /
												100}{" "}
											تومان
										</p>
									</div>
								</div>
							))}
					</div>
					<div className="border-top pt-3">
						<div className="d-flex justify-content-between align-items-center">
							<p className="m-0 fw-bolder">مجموع کل</p>
							<p className="m-0 fw-bolder">{cart_items_sum()} تومان</p>
						</div>
						<a
							href="/checkout"
							className="btn btn-orange btn-orange-chunky mt-5 mb-2 d-block text-center"
						>
							ثبت نهایی سفارش
						</a>
						<a
							href="/cart"
							className="btn btn-dark fw-bolder d-block text-center transition-all opacity-50-hover"
						>
							مشاهده سبد خرید
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};
