import "./App.css";
// import "./assets/css/style.scss";
// import "bootstrap/dist/css/bootstrap.css";
import "./assets/css/boxicons.css";
import "./assets/css/core.css";
import "./assets/css/theme-default.css";
import "./assets/css/demo.css";
import "./assets/css/page-auth.css";
// import "../assets/css/perfect-scrollbar.css";
import "./assets/css/apex-charts.css";

import { createContext, useState } from "react";
import { Routes, Route } from "react-router-dom";

import Login from "./components/Login";
import Register from "./components/Register";
import Page404 from "./components/Page404";
import Admin from "./components/Admin";
import Authguard from "./components/Authguard";
import Dashboard from "./components/Dashboard";
import Account from "./components/Account";
import Profile from "./components/Profile";
import Connection from "./components/Connection";
import Notification from "./components/Notification";
import Category from "./components/Category";
import Product from "./components/Product";

export const UserDetils = createContext();

function App() {
	let obj = {
		id: "",
		username: "",
		email: "",
		password: "",
	};
	const [user, setUser] = useState(obj);

	return (
		<div>
			<UserDetils.Provider value={{ user, setUser }}>
				<Routes>
					<Route path="/" element={<Authguard Component={Admin} />}>
						<Route path="dashboard" element={<Dashboard />} />
						<Route path="account" element={<Account />}>
							<Route path="profile" element={<Profile />} />
							<Route path="notification" element={<Notification />} />
							<Route path="connection" element={<Connection />} />
						</Route>
						<Route path="inventory">
							<Route path="categories" element={<Category />} />
							<Route path="products" element={<Product />} />
						</Route>
					</Route>

					<Route path="/login" element={<Login />}></Route>
					<Route path="/register" element={<Register />}></Route>

					<Route path="/*" element={<Page404 />}></Route>
				</Routes>
			</UserDetils.Provider>
		</div>
	);
}

export default App;
