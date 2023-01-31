import React, { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";

const Account = () => {
	const [pageTitle, setPageTitle] = useState("Profile");
	const handleTitle = (title) => {
		setPageTitle(title);
	};
	return (
		<div>
			<div className="container-xxl flex-grow-1 container-p-y">
				<h4 className="fw-bold py-3 mb-4">
					<span className="text-muted fw-light">Account Settings / </span>
					{pageTitle}
				</h4>

				<div className="row">
					<div className="col-md-12">
						<ul className="nav nav-pills flex-column flex-md-row mb-3">
							<li className="nav-item">
								<NavLink
									className="nav-link"
									to="/account/profile"
									onClick={() => {
										handleTitle("Profile");
									}}
								>
									<i className="bx bx-user me-1"></i> Profile
								</NavLink>
							</li>
							<li className="nav-item">
								<NavLink
									className="nav-link"
									to="/account/notification"
									onClick={() => {
										handleTitle("Notifications");
									}}
								>
									<i className="bx bx-bell me-1"></i> Notifications
								</NavLink>
							</li>
							<li className="nav-item">
								<NavLink
									className="nav-link"
									to="/account/connection"
									onClick={() => {
										handleTitle("Connections");
									}}
								>
									<i className="bx bx-link-alt me-1"></i> Connections
								</NavLink>
							</li>
						</ul>
						<Outlet />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Account;
