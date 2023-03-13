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
import { Newproduct } from "./components/Newproduct";
import { GlobalContextProvider } from "./GlobalContextProvider";
import { Footer } from "./partials/footer/Footer";
import { Offcanvas } from "./partials/offcanvas/Offcanvas";
import { SearchOverlay } from "./partials/search/SearchOverlay";
import { AdminDashboard } from "./components/AdminDashboard";
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
							path="/product"
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
							path="/category"
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

						<Route path="/products/new" element={<Newproduct />} />
						<Route path="/admin-dashboard" element={<AdminDashboard />} />
					</Routes>
				</BrowserRouter>
			</GlobalContextProvider>
		</>
	);
};
