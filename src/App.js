import { useState, useEffect } from "react";
import "./App.css";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login.js";
import Navbar from "./components/Navbar/Navbar";

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
		<div className="">
			{isLoggedIn ? (
				<>
					<Navbar onLogout={logOutHandler} />
					<Home />
				</>
			) : (
				<Login onLogin={loginHandler} />
			)}
		</div>
	);
}

export default App;
