import React, { useContext } from "react";
import "./App.css";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login.js";
import AuthContext from "./store/auth-context";

function App() {
	const authCtx = useContext(AuthContext);
	return (
		<>
			{!authCtx.isLoggedIn && <Login />}
			{authCtx.isLoggedIn && <Home />}
		</>
	);
}

export default App;
