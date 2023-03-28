import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";

export const Register = () => {
	var nav = useNavigate();
	async function register_handler() {
		var username = document.getElementById("username_input").value;
		var password = document.getElementById("password_input").value;
		var response = await axios({
			url: "/collections/users",
			baseURL: api_endpoint,
			data: {
				document: {
					username,
					password,
				},
			},
			method: "post",
		});
		alert("کاربر جدید با موفقیت ساخته شد لطفا وارد حساب کاربری خود شوید");
		nav("/login");
	}
	return (
		<>
			<h1>ثبت نام کاربر جدید</h1>

			<h1>نام کاربری : </h1>
			<input id="username_input" />

			<h1>رمز عبور :</h1>
			<input id="password_input" />

			<button onClick={register_handler}>ثبت نام کاربر جدید </button>
		</>
	);
};
