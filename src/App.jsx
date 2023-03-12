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
export const App = () => {
	return (
		<>
			<title>{templateName}</title>
			<GlobalContextProvider>
				<BrowserRouter>
					<Routes>
						<Route path="/" element={<Index />} />
						<Route path="/product" element={<Product />} />
						<Route path="/checkout" element={<Checkout />} />
						<Route path="/category" element={<Category />} />
						<Route path="/cart" element={<Cart />} />
						<Route path="/products/new" element={<Newproduct />} />
					</Routes>
				</BrowserRouter>
			</GlobalContextProvider>
		</>
	);
};
