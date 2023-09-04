import React, { useState, useEffect } from "react";

const AuthContext = React.createContext({
	isLoggedIn: false,
	onLogout: () => {},
	onLogin: () => {},
});

export const AuthContextProvider = (props) => {
	const [isLoggedIn, setIsLoggedIn] = useState(false);
	const loginInfo = localStorage.getItem("isLoggedIn");
	useEffect(() => {
		if (loginInfo === "true") {
			setIsLoggedIn(true);
		}
	}, [loginInfo]);

	const loginHandler = (e) => {
		setIsLoggedIn(true);
		localStorage.setItem("isLoggedIn", true);
	};
	const logOutHandler = () => {
		setIsLoggedIn(false);
		localStorage.setItem("isLoggedIn", false);
	};
	return (
		<AuthContext.Provider
			value={{
				isLoggedIn: isLoggedIn,
				onLogin: loginHandler,
				onLogout: logOutHandler,
			}}>
			{props.children}
		</AuthContext.Provider>
	);
};

export default AuthContext;
