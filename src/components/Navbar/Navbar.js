import React, { useContext } from "react";
import AuthContext from "../../store/auth-context";

const Navbar = () => {
	const ckx = useContext(AuthContext);
	return (
		<nav className="bg-blue-500 p-4">
			<div className="max-w-6xl mx-auto flex justify-between items-center">
				<div className="text-white font-semibold text-lg">My App</div>
				<ul className="flex space-x-4">
					{ckx.isLoggedIn && (
						<>
							<li>
								<a href="#home" className="text-white hover:underline">
									Home
								</a>
							</li>

							<li>
								<a href="#." className="text-white hover:underline">
									About
								</a>
							</li>
							<li>
								<a href="#." className="text-white hover:underline">
									Services
								</a>
							</li>
							<li>
								<a href="#." className="text-white hover:underline">
									Contact
								</a>
							</li>
							<li>
								<a
									href="#."
									className="text-white hover:underline"
									onClick={ckx.onLogout}>
									Logout
								</a>
							</li>
						</>
					)}
				</ul>
			</div>
		</nav>
	);
};

export default Navbar;
