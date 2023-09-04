import { useState, useEffect } from "react";
import "./App.css";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login.js";
import AuthContext from "./store/auth-context";

function App() {
	const [isLoggedIn, setIsLoggedIn] = useState(false);
	const loginInfo = localStorage.getItem("isLoggedIn");
	useEffect(() => {
		if (loginInfo === "true") {
			setIsLoggedIn(true);
		}
	}, []);

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
				onLogout: logOutHandler,
				onLogin: loginHandler,
			}}>
			{!isLoggedIn && <Login />}
			{isLoggedIn && <Home />}
		</AuthContext.Provider>
	);
}

export default App;
