import axios from "axios";
import React from "react";
import { Link, useNavigate } from "react-router-dom";

export const Login = () => {
	var nav = useNavigate();
	async function login_handler() {
		var username = document.getElementById("username_input").value;
		var password = document.getElementById("password_input").value;

		var response;
		response = await axios({
			url: `/collections/users`,
			baseURL: api_endpoint,
		});
		var user = response.data.find((i) => i.username === username);
		if (user === undefined) {
			alert("کاربری با این نام کاربری وجود ندارد");
			return;
		}

		response = await axios({
			url: "/auth/password_verification",
			baseURL: api_endpoint,
			method: "post",
			data: {
				password: document.getElementById("password_input").value,
				user_id: user._id,
			},
		});
		if (response.data.verified === true) {
			window.localStorage.setItem("user_id", user._id);
			window.localStorage.setItem("jwt", response.data.jwt);
			nav("/my-profile");
		} else {
			alert("رمز عبور شما تایید نشد دوباره امتحان کنید ");
		}
	}
	return (
		<>
			<h1>username : </h1>
			<input id="username_input" />

			<h1>password : </h1>
			<input id="password_input" type="password" />

			<button onClick={login_handler}>login</button>
			<p>
				and if you have not registered you can register <Link to="/register">here</Link>
			</p>
		</>
	);
};
