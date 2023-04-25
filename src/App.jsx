import React from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import "./assets/scss/libs.scss";
import "./assets/scss/theme.scss";
import { Cart } from "./components/Cart";
import { Category } from "./components/Category";
import { Checkout } from "./components/Checkout";
import { Index } from "./components/Index";
import { Product } from "./components/Product";
import { templateName } from "../env.json";
import { NewProduct } from "./partials/AdminDashboard/NewProduct";
import { GlobalContextProvider } from "./GlobalContextProvider";
import { Footer } from "./partials/footer/Footer";
import { Offcanvas } from "./partials/offcanvas/Offcanvas";
import { SearchOverlay } from "./partials/search/SearchOverlay";
import { AdminDashboard } from "./components/AdminDashboard";
import { Register } from "./components/Register";
import { Login } from "./components/Login";
import { FAQ } from "./components/FAQ";
import { NewSupportMessage } from "./components/NewSupportMessage";
import { ContactUs } from "./components/ContactUs";
import { AboutUs } from "./components/AboutUs";
import { MyProfile } from "./components/MyProfile";
import { LikedProducts } from "./components/LikedProducts";
import { register } from "swiper/element/bundle";
import { OverallReviews } from "./components/OverallReviews";
import { NewOverallReview } from "./components/NewOverallReview";
import { DownloadCenter } from "./components/DownloadCenter";
import { Products } from "./components/Products";
import { Categories } from "./components/Categories";

register();

function CommonBottomWrapper({ children }) {
	return (
		<>
			{children}
			<Footer />
			<Offcanvas />
			<SearchOverlay />
		</>
	);
}
export const App = () => {
	return (
		<>
			<title>{templateName}</title>
			<GlobalContextProvider>
				<BrowserRouter>
					<Routes>
						<Route
							path="/"
							element={
								<CommonBottomWrapper>
									<Index />
								</CommonBottomWrapper>
							}
						/>
						<Route
							path="/download_center"
							element={
								<CommonBottomWrapper>
									<DownloadCenter />
								</CommonBottomWrapper>
							}
						/>
						<Route path="/overall_reviews" element={<OverallReviews />} />
						<Route path="/overall_reviews/new" element={<NewOverallReview />} />

						<Route
							path="/products/:product_id"
							element={
								<CommonBottomWrapper>
									<Product />
								</CommonBottomWrapper>
							}
						/>
						<Route
							path="/products"
							element={
								<CommonBottomWrapper>
									<Products />{" "}
								</CommonBottomWrapper>
							}
						/>
						<Route
							path="/categories"
							element={
								<CommonBottomWrapper>
									<Categories />{" "}
								</CommonBottomWrapper>
							}
						/>
						<Route
							path="/checkout"
							element={
								<CommonBottomWrapper>
									<Checkout />
								</CommonBottomWrapper>
							}
						/>
						<Route
							path="/categories/:category_id"
							element={
								<CommonBottomWrapper>
									<Category />
								</CommonBottomWrapper>
							}
						/>
						<Route
							path="/cart"
							element={
								<CommonBottomWrapper>
									<Cart />
								</CommonBottomWrapper>
							}
						/>

						<Route path="/products/new" element={<NewProduct />} />
						<Route path="/admin-dashboard/*" element={<AdminDashboard />} />
						<Route path="/register" element={<Register />} />
						<Route path="/login" element={<Login />} />
						<Route path="/faq" element={<FAQ />} />
						<Route path="/support-messages/new" element={<NewSupportMessage />} />
						<Route path="/contact-us" element={<ContactUs />} />
						<Route path="/about-us" element={<AboutUs />} />
						<Route path="/my-profile" element={<MyProfile />} />
						<Route path="/my-profile/liked_products" element={<LikedProducts />} />
					</Routes>
				</BrowserRouter>
			</GlobalContextProvider>
		</>
	);
};
