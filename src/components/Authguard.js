import { useContext, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { UserDetils } from "../App";

import { view } from "../services/AxiosService";

const Authguard = (props) => {
	const { Component } = props;
	const navigate = useNavigate();
	const location = useLocation();

	const { setUser } = useContext(UserDetils);

	useEffect(() => {
		let loc = location.pathname;
		let returnLoc = "";
		if (loc !== "/login") {
			returnLoc = `?returnURL=${loc}`;
		}

		let userID = parseInt(localStorage.getItem("userId"));

		if (!userID) {
			// navigate("/login");
			navigate(`/login${returnLoc}`);
		} else {
			view("userData").then((res) => {
				res.forEach((item) => {
					if (item.id === userID) {
						navigate("/dashboard");
						setUser(item);
					}
				});
			});
		}
		// if (user.id === "") {
		// 	navigate("/login");
		// }
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<div>
			<Component />
		</div>
	);
};

export default Authguard;
