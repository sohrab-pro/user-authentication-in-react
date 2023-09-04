import React, { useContext, useEffect, useReducer, useState } from "react";
import AuthContext from "../../store/auth-context";
import Input from "./Input";

const emailReducer = (state, action) => {
	if (action.type === "CHANGE") {
		return { value: action.value, isValid: action.value.length > 4 };
	}
	return state;
};

const passwordReducer = (state, action) => {
	if (action.type === "CHANGE") {
		return { value: action.value, isValid: action.value.length > 7 };
	}
	return state;
};

const usernames = ["sohrab", "rahim"];

const Login = () => {
	const cfx = useContext(AuthContext);
	const [formValidation, setFormValidation] = useState(false);
	const [usernameAvail, setUsernameAvail] = useState(true);
	const [emailValid, dispatchEmail] = useReducer(emailReducer, {
		value: "",
		isValid: false,
	});
	const [passwordValid, dispatchPassword] = useReducer(passwordReducer, {
		value: "",
		isValid: false,
	});

	const usernameHandler = (e) => {
		const value = e.target.value;
		dispatchEmail({ type: "CHANGE", value: value });
	};

	const passwordHandler = (e) => {
		const value = e.target.value;
		dispatchPassword({ type: "CHANGE", value: value });
	};

	useEffect(() => {
		const isUsernameAvailable = !usernames.includes(emailValid.value);
		setUsernameAvail(isUsernameAvailable);

		setFormValidation(
			emailValid.isValid && passwordValid.isValid && usernameAvail
		);
	}, [emailValid, passwordValid, usernameAvail]);

	const handleLogin = (e) => {
		e.preventDefault();
		if (formValidation) {
			cfx.onLogin();
		}
	};

	return (
		<div className="flex justify-center items-center mt-5">
			<div className="shadow-md bg-slate-300 p-6 rounded-lg sm:w-11/12 md:w-11/12 lg:w-1/2">
				<form onSubmit={handleLogin}>
					<Input
						label="Username"
						type="text"
						onChange={usernameHandler}
						value={emailValid.value}
						id="username"
						className="p-2 w-full mb-3"
						required={true}
					/>
					<p className="text-red-600">
						{usernameAvail ? "" : "Username not available"}
					</p>
					<Input
						label="Password"
						type="password"
						onChange={passwordHandler}
						value={passwordValid.value}
						id="password"
						className="p-2 w-full mb-3"
						required={true}
					/>
					<div className="flex justify-center">
						<button
							disabled={!formValidation}
							type="submit"
							className={`bg-blue-500  text-white font-semibold px-3 py-2 rounded ${
								!formValidation ? "bg-slate-400" : "hover:bg-blue-600"
							}`}>
							Login
						</button>
					</div>
				</form>
			</div>
		</div>
	);
};

export default Login;
