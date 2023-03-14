import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import "./assets/scss/libs.scss";
import "./assets/scss/theme.scss";
import { Cart } from "./components/Cart";
import { Category } from "./components/Category";
import { Checkout } from "./components/Checkout";
import { Index } from "./components/Index";
import { Product } from "./components/Product";
import { templateName } from "../env.json";
import { Newproduct } from "./partials/AdminDashboard/Newproduct";
import { GlobalContextProvider } from "./GlobalContextProvider";
import { Footer } from "./partials/footer/Footer";
import { Offcanvas } from "./partials/offcanvas/Offcanvas";
import { SearchOverlay } from "./partials/search/SearchOverlay";
import { AdminDashboard } from "./components/AdminDashboard";
import { Posts } from "./partials/posts/Posts";
import { Post } from "./partials/posts/Post";
import { Register } from "./components/Register";
import { Login } from "./components/Login";
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
							path="/products/:product_id"
							element={
								<CommonBottomWrapper>
									<Product />
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
						<Route path="/posts" element={<Posts />} />
						<Route path="/posts/:post_id" element={<Post />} />
						<Route path="/products/new" element={<Newproduct />} />
						<Route path="/admin-dashboard" element={<AdminDashboard />} />
						<Route path="/register" element={<Register />} />
						<Route path="/login" element={<Login />} />
					</Routes>
				</BrowserRouter>
			</GlobalContextProvider>
		</>
	);
};
