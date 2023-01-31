import React, { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { useContext } from "react";
import { UserDetils } from "../App";

import avatarImg from "../assets/img/avatars/7.png";

const Admin = () => {
	const { user } = useContext(UserDetils);

	const [profileDrop, setProfileDrop] = useState("");
	const [isActive1, setActive1] = useState(false);
	const [isActive2, setActive2] = useState(false);

	const ToggleClass1 = () => {
		setActive2(false);
		setActive1(!isActive1);
	};

	const ToggleClass2 = () => {
		setActive1(false);
		setActive2(!isActive2);
	};
	let adminDate = new Date().getFullYear();

	return (
		<div className="layout-wrapper layout-content-navbar">
			<div className="layout-container">
				{/* Menu  */}

				<aside
					id="layout-menu"
					className="layout-menu menu-vertical menu bg-menu-theme"
				>
					<div className="app-brand demo">
						<NavLink to="/" className="app-brand-link">
							<span className="app-brand-logo demo">
								<svg
									width="25"
									viewBox="0 0 25 42"
									version="1.1"
									xmlns="http://www.w3.org/2000/svg"
									xmlnsXlink="http://www.w3.org/1999/xlink"
								>
									<defs>
										<path
											d="M13.7918663,0.358365126 L3.39788168,7.44174259 C0.566865006,9.69408886 -0.379795268,12.4788597 0.557900856,15.7960551 C0.68998853,16.2305145 1.09562888,17.7872135 3.12357076,19.2293357 C3.8146334,19.7207684 5.32369333,20.3834223 7.65075054,21.2172976 L7.59773219,21.2525164 L2.63468769,24.5493413 C0.445452254,26.3002124 0.0884951797,28.5083815 1.56381646,31.1738486 C2.83770406,32.8170431 5.20850219,33.2640127 7.09180128,32.5391577 C8.347334,32.0559211 11.4559176,30.0011079 16.4175519,26.3747182 C18.0338572,24.4997857 18.6973423,22.4544883 18.4080071,20.2388261 C17.963753,17.5346866 16.1776345,15.5799961 13.0496516,14.3747546 L10.9194936,13.4715819 L18.6192054,7.984237 L13.7918663,0.358365126 Z"
											id="path-1"
										></path>
										<path
											d="M5.47320593,6.00457225 C4.05321814,8.216144 4.36334763,10.0722806 6.40359441,11.5729822 C8.61520715,12.571656 10.0999176,13.2171421 10.8577257,13.5094407 L15.5088241,14.433041 L18.6192054,7.984237 C15.5364148,3.11535317 13.9273018,0.573395879 13.7918663,0.358365126 C13.5790555,0.511491653 10.8061687,2.3935607 5.47320593,6.00457225 Z"
											id="path-3"
										></path>
										<path
											d="M7.50063644,21.2294429 L12.3234468,23.3159332 C14.1688022,24.7579751 14.397098,26.4880487 13.008334,28.506154 C11.6195701,30.5242593 10.3099883,31.790241 9.07958868,32.3040991 C5.78142938,33.4346997 4.13234973,34 4.13234973,34 C4.13234973,34 2.75489982,33.0538207 2.37032616e-14,31.1614621 C-0.55822714,27.8186216 -0.55822714,26.0572515 -4.05231404e-15,25.8773518 C0.83734071,25.6075023 2.77988457,22.8248993 3.3049379,22.52991 C3.65497346,22.3332504 5.05353963,21.8997614 7.50063644,21.2294429 Z"
											id="path-4"
										></path>
										<path
											d="M20.6,7.13333333 L25.6,13.8 C26.2627417,14.6836556 26.0836556,15.9372583 25.2,16.6 C24.8538077,16.8596443 24.4327404,17 24,17 L14,17 C12.8954305,17 12,16.1045695 12,15 C12,14.5672596 12.1403557,14.1461923 12.4,13.8 L17.4,7.13333333 C18.0627417,6.24967773 19.3163444,6.07059163 20.2,6.73333333 C20.3516113,6.84704183 20.4862915,6.981722 20.6,7.13333333 Z"
											id="path-5"
										></path>
									</defs>
									<g
										id="g-app-brand"
										stroke="none"
										strokeWidth="1"
										fill="none"
										fillRule="evenodd"
									>
										<g
											id="Brand-Logo"
											transform="translate(-27.000000, -15.000000)"
										>
											<g id="Icon" transform="translate(27.000000, 15.000000)">
												<g id="Mask" transform="translate(0.000000, 8.000000)">
													<mask id="mask-2" fill="white">
														<use xlinkHref="#path-1"></use>
													</mask>
													<use fill="#696cff" xlinkHref="#path-1"></use>
													<g id="Path-3" mask="url(#mask-2)">
														<use fill="#696cff" xlinkHref="#path-3"></use>
														<use
															fillOpacity="0.2"
															fill="#FFFFFF"
															xlinkHref="#path-3"
														></use>
													</g>
													<g id="Path-4" mask="url(#mask-2)">
														<use fill="#696cff" xlinkHref="#path-4"></use>
														<use
															fillOpacity="0.2"
															fill="#FFFFFF"
															xlinkHref="#path-4"
														></use>
													</g>
												</g>
												<g
													id="Triangle"
													transform="translate(19.000000, 11.000000) rotate(-300.000000) translate(-19.000000, -11.000000) "
												>
													<use fill="#696cff" xlinkHref="#path-5"></use>
													<use
														fillOpacity="0.2"
														fill="#FFFFFF"
														xlinkHref="#path-5"
													></use>
												</g>
											</g>
										</g>
									</g>
								</svg>
							</span>
							<span className="app-brand-text demo menu-text fw-bolder ms-2">
								Sneat
							</span>
						</NavLink>

						<NavLink
							to="/"
							className="layout-menu-toggle menu-link text-large ms-auto d-block d-xl-none"
						>
							<i className="bx bx-chevron-left bx-sm align-middle"></i>
						</NavLink>
					</div>

					<div className="menu-inner-shadow"></div>

					<ul className="menu-inner py-1">
						{/* Dashboard  */}
						<li className="menu-item">
							<NavLink to="/dashboard" className="menu-link">
								<i className="menu-icon tf-icons bx bx-home-circle"></i>
								<div data-i18n="Dashboard">Dashboard</div>
							</NavLink>
						</li>

						{/* Layouts  */}
						{/* <li className="menu-item">
							<NavLink to="" className="menu-link menu-toggle">
								<i className="menu-icon tf-icons bx bx-layout"></i>
								<div data-i18n="Layouts">Layouts</div>
							</NavLink>

							<ul className="menu-sub">
								<li className="menu-item">
									<NavLink
										href="layouts-without-menu.html"
										className="menu-link"
									>
										<div data-i18n="Without menu">Without menu</div>
									</NavLink>
								</li>
								<li className="menu-item">
									<NavLink
										href="layouts-without-navbar.html"
										className="menu-link"
									>
										<div data-i18n="Without navbar">Without navbar</div>
									</NavLink>
								</li>
								<li className="menu-item">
									<NavLink href="layouts-container.html" className="menu-link">
										<div data-i18n="Container">Container</div>
									</NavLink>
								</li>
								<li className="menu-item">
									<NavLink href="layouts-fluid.html" className="menu-link">
										<div data-i18n="Fluid">Fluid</div>
									</NavLink>
								</li>
								<li className="menu-item">
									<NavLink href="layouts-blank.html" className="menu-link">
										<div data-i18n="Blank">Blank</div>
									</NavLink>
								</li>
							</ul>
						</li> */}

						{/* <li className="menu-header small text-uppercase">
							<span className="menu-header-text">Inventory</span>
						</li> */}
						<li className={isActive1 ? "menu-item open" : "menu-item"}>
							<div
								className="menu-link menu-toggle"
								onClick={() => {
									ToggleClass1();
								}}
							>
								<i className="menu-icon tf-icons bx bx-dock-top"></i>
								<div data-i18n="Inventory">Inventory</div>
							</div>
							<ul className="menu-sub">
								<li className="menu-item">
									<NavLink to="/inventory/categories" className="menu-link">
										<div data-i18n="Categories">Categories</div>
									</NavLink>
								</li>
								<li className="menu-item">
									<NavLink to="/inventory/products" className="menu-link">
										{/* <NavLink to="#" className="menu-link"> */}
										<div data-i18n="Products">Products</div>
									</NavLink>
								</li>
							</ul>
						</li>
						<li className={isActive2 ? "menu-item open" : "menu-item"}>
							<div
								className="menu-link menu-toggle"
								onClick={() => {
									ToggleClass2();
								}}
							>
								<i className="menu-icon tf-icons bx bx-lock-open-alt"></i>
								<div data-i18n="ACM">ACM</div>
							</div>
							<ul className="menu-sub">
								<li className="menu-item">
									<NavLink to="#" className="menu-link">
										<div data-i18n="Roles">Roles</div>
									</NavLink>
								</li>
								<li className="menu-item">
									<NavLink to="#" className="menu-link">
										<div data-i18n="Privileges">Privileges</div>
									</NavLink>
								</li>
								<li className="menu-item">
									<NavLink to="#" className="menu-link">
										<div data-i18n="Assign Rights">Assign Rights</div>
									</NavLink>
								</li>
							</ul>
						</li>

						{/* Components  */}
						{/* <li className="menu-header small text-uppercase">
							<span className="menu-header-text">Components</span>
						</li> */}
						{/* Cards  */}
						{/* <li className="menu-item">
							<NavLink to="cards-basic.html" className="menu-link">
								<i className="menu-icon tf-icons bx bx-collection"></i>
								<div data-i18n="Basic">Cards</div>
							</NavLink>
						</li> */}
						{/* User interface  */}
						{/* <li className="menu-item">
							<NavLink to="/" className="menu-link menu-toggle">
								<i className="menu-icon tf-icons bx bx-box"></i>
								<div data-i18n="User interface">User interface</div>
							</NavLink>
							<ul className="menu-sub">
								<li className="menu-item">
									<NavLink to="ui-accordion.html" className="menu-link">
										<div data-i18n="Accordion">Accordion</div>
									</NavLink>
								</li>
								<li className="menu-item">
									<NavLink to="ui-alerts.html" className="menu-link">
										<div data-i18n="Alerts">Alerts</div>
									</NavLink>
								</li>
								<li className="menu-item">
									<NavLink to="ui-badges.html" className="menu-link">
										<div data-i18n="Badges">Badges</div>
									</NavLink>
								</li>
								<li className="menu-item">
									<NavLink to="ui-buttons.html" className="menu-link">
										<div data-i18n="Buttons">Buttons</div>
									</NavLink>
								</li>
								<li className="menu-item">
									<NavLink to="ui-carousel.html" className="menu-link">
										<div data-i18n="Carousel">Carousel</div>
									</NavLink>
								</li>
								<li className="menu-item">
									<NavLink to="ui-collapse.html" className="menu-link">
										<div data-i18n="Collapse">Collapse</div>
									</NavLink>
								</li>
								<li className="menu-item">
									<NavLink to="ui-dropdowns.html" className="menu-link">
										<div data-i18n="Dropdowns">Dropdowns</div>
									</NavLink>
								</li>
								<li className="menu-item">
									<NavLink to="ui-footer.html" className="menu-link">
										<div data-i18n="Footer">Footer</div>
									</NavLink>
								</li>
								<li className="menu-item">
									<NavLink to="ui-list-groups.html" className="menu-link">
										<div data-i18n="List Groups">List groups</div>
									</NavLink>
								</li>
								<li className="menu-item">
									<NavLink to="ui-modals.html" className="menu-link">
										<div data-i18n="Modals">Modals</div>
									</NavLink>
								</li>
								<li className="menu-item">
									<NavLink to="ui-navbar.html" className="menu-link">
										<div data-i18n="Navbar">Navbar</div>
									</NavLink>
								</li>
								<li className="menu-item">
									<NavLink to="ui-offcanvas.html" className="menu-link">
										<div data-i18n="Offcanvas">Offcanvas</div>
									</NavLink>
								</li>
								<li className="menu-item">
									<NavLink
										to="ui-pagination-breadcrumbs.html"
										className="menu-link"
									>
										<div data-i18n="Pagination &amp; Breadcrumbs">
											Pagination &amp; Breadcrumbs
										</div>
									</NavLink>
								</li>
								<li className="menu-item">
									<NavLink to="ui-progress.html" className="menu-link">
										<div data-i18n="Progress">Progress</div>
									</NavLink>
								</li>
								<li className="menu-item">
									<NavLink to="ui-spinners.html" className="menu-link">
										<div data-i18n="Spinners">Spinners</div>
									</NavLink>
								</li>
								<li className="menu-item">
									<NavLink to="ui-tabs-pills.html" className="menu-link">
										<div data-i18n="Tabs &amp; Pills">Tabs &amp; Pills</div>
									</NavLink>
								</li>
								<li className="menu-item">
									<NavLink to="ui-toasts.html" className="menu-link">
										<div data-i18n="Toasts">Toasts</div>
									</NavLink>
								</li>
								<li className="menu-item">
									<NavLink to="ui-tooltips-popovers.html" className="menu-link">
										<div data-i18n="Tooltips & Popovers">
											Tooltips &amp; popovers
										</div>
									</NavLink>
								</li>
								<li className="menu-item">
									<NavLink to="ui-typography.html" className="menu-link">
										<div data-i18n="Typography">Typography</div>
									</NavLink>
								</li>
							</ul>
						</li> */}

						{/* Extended components  */}
						{/* <li className="menu-item">
							<NavLink to="/" className="menu-link menu-toggle">
								<i className="menu-icon tf-icons bx bx-copy"></i>
								<div data-i18n="Extended UI">Extended UI</div>
							</NavLink>
							<ul className="menu-sub">
								<li className="menu-item">
									<NavLink
										to="extended-ui-perfect-scrollbar.html"
										className="menu-link"
									>
										<div data-i18n="Perfect Scrollbar">Perfect scrollbar</div>
									</NavLink>
								</li>
								<li className="menu-item">
									<NavLink
										to="extended-ui-text-divider.html"
										className="menu-link"
									>
										<div data-i18n="Text Divider">Text Divider</div>
									</NavLink>
								</li>
							</ul>
						</li>

						<li className="menu-item">
							<NavLink to="icons-boxicons.html" className="menu-link">
								<i className="menu-icon tf-icons bx bx-crown"></i>
								<div data-i18n="Boxicons">Boxicons</div>
							</NavLink>
						</li> */}

						{/* Forms & Tables  */}
						{/* <li className="menu-header small text-uppercase">
							<span className="menu-header-text">Forms &amp; Tables</span>
						</li> */}
						{/* Forms  */}
						{/* <li className="menu-item">
							<NavLink to="/" className="menu-link menu-toggle">
								<i className="menu-icon tf-icons bx bx-detail"></i>
								<div data-i18n="Form Elements">Form Elements</div>
							</NavLink>
							<ul className="menu-sub">
								<li className="menu-item">
									<NavLink to="forms-basic-inputs.html" className="menu-link">
										<div data-i18n="Basic Inputs">Basic Inputs</div>
									</NavLink>
								</li>
								<li className="menu-item">
									<NavLink to="forms-input-groups.html" className="menu-link">
										<div data-i18n="Input groups">Input groups</div>
									</NavLink>
								</li>
							</ul>
						</li>
						<li className="menu-item">
							<NavLink to="/" className="menu-link menu-toggle">
								<i className="menu-icon tf-icons bx bx-detail"></i>
								<div data-i18n="Form Layouts">Form Layouts</div>
							</NavLink>
							<ul className="menu-sub">
								<li className="menu-item">
									<NavLink
										to="form-layouts-vertical.html"
										className="menu-link"
									>
										<div data-i18n="Vertical Form">Vertical Form</div>
									</NavLink>
								</li>
								<li className="menu-item">
									<NavLink
										to="form-layouts-horizontal.html"
										className="menu-link"
									>
										<div data-i18n="Horizontal Form">Horizontal Form</div>
									</NavLink>
								</li>
							</ul>
						</li> */}
						{/* Tables  */}
						{/* <li className="menu-item">
							<NavLink to="tables-basic.html" className="menu-link">
								<i className="menu-icon tf-icons bx bx-table"></i>
								<div data-i18n="Tables">Tables</div>
							</NavLink>
						</li> */}
						{/* Misc  */}
						{/* <li className="menu-header small text-uppercase">
							<span className="menu-header-text">Misc</span>
						</li>
						<li className="menu-item">
							<NavLink
								to="https://github.com/themeselection/sneat-html-admin-template-free/issues"
								target="_blank"
								className="menu-link"
							>
								<i className="menu-icon tf-icons bx bx-support"></i>
								<div data-i18n="Support">Support</div>
							</NavLink>
						</li>
						<li className="menu-item">
							<NavLink
								to="https://themeselection.com/demo/sneat-bootstrap-html-admin-template/documentation/"
								target="_blank"
								className="menu-link"
							>
								<i className="menu-icon tf-icons bx bx-file"></i>
								<div data-i18n="Documentation">Documentation</div>
							</NavLink>
						</li> */}
					</ul>
				</aside>
				{/* / Menu  */}

				{/* Layout container  */}
				<div className="layout-page">
					{/* Navbar  */}

					<nav
						className="layout-navbar container-xxl navbar navbar-expand-xl navbar-detached align-items-center bg-navbar-theme"
						id="layout-navbar"
					>
						<div className="layout-menu-toggle navbar-nav align-items-xl-center me-3 me-xl-0 d-xl-none">
							<NavLink className="nav-item nav-link px-0 me-xl-4" to="/">
								<i className="bx bx-menu bx-sm"></i>
							</NavLink>
						</div>

						<div
							className="navbar-nav-right d-flex align-items-center"
							id="navbar-collapse"
						>
							{/* Search  */}
							<div className="navbar-nav align-items-center">
								<div className="nav-item d-flex align-items-center">
									<i className="bx bx-search fs-4 lh-0"></i>
									<input
										type="text"
										className="form-control border-0 shadow-none"
										placeholder="Search..."
										aria-label="Search..."
									/>
								</div>
							</div>
							{/* /Search  */}

							<ul className="navbar-nav flex-row align-items-center ms-auto">
								{/* Place this tag where you want the button to render.  */}

								{/* User  */}
								<li className="nav-item navbar-dropdown dropdown-user dropdown">
									<NavLink
										className="nav-link dropdown-toggle hide-arrow"
										to="#"
										data-bs-toggle="dropdown"
										onClick={() => {
											profileDrop === "show"
												? setProfileDrop("")
												: setProfileDrop("show");
										}}
									>
										<div className="avatar avatar-online">
											<img
												src={avatarImg}
												alt="avatar img"
												className="w-px-40 h-auto rounded-circle"
											/>
										</div>
									</NavLink>
									<ul
										className={`dropdown-menu dropdown-menu-end ${profileDrop}`}
									>
										<li>
											<NavLink className="dropdown-item" to="/">
												<div className="d-flex">
													<div className="flex-shrink-0 me-3">
														<div className="avatar avatar-online">
															<img
																src={avatarImg}
																alt="avatar img"
																className="w-px-40 h-auto rounded-circle"
															/>
														</div>
													</div>
													<div className="flex-grow-1">
														<span className="fw-semibold d-block">
															{user.username}
														</span>
														<small className="text-muted">Admin</small>
													</div>
												</div>
											</NavLink>
										</li>
										<li>
											<div className="dropdown-divider"></div>
										</li>
										<li>
											<NavLink className="dropdown-item" to="/account/profile">
												<i className="bx bx-user me-2"></i>
												<span className="align-middle">My Profile</span>
											</NavLink>
										</li>
										<li>
											<NavLink className="dropdown-item" to="/">
												<i className="bx bx-cog me-2"></i>
												<span className="align-middle">Settings</span>
											</NavLink>
										</li>
										<li>
											<NavLink className="dropdown-item" to="/">
												<span className="d-flex align-items-center align-middle">
													<i className="flex-shrink-0 bx bx-credit-card me-2"></i>
													<span className="flex-grow-1 align-middle">
														Billing
													</span>
													<span className="flex-shrink-0 badge badge-center rounded-pill bg-danger w-px-20 h-px-20">
														4
													</span>
												</span>
											</NavLink>
										</li>
										<li>
											<div className="dropdown-divider"></div>
										</li>
										<li>
											<NavLink
												className="dropdown-item"
												to="/login"
												onClick={() => {
													localStorage.removeItem("userId");
												}}
											>
												<i className="bx bx-power-off me-2"></i>
												<span className="align-middle">Log Out</span>
											</NavLink>
										</li>
									</ul>
								</li>
								{/* / User  */}
							</ul>
						</div>
					</nav>

					{/* / Navbar  */}

					{/* Content wrapper  */}
					<div className="content-wrapper">
						{/* Content  */}

						<Outlet />

						{/* / Content  */}

						{/* Footer  */}
						<footer className="content-footer footer bg-footer-theme">
							<div className="container-xxl d-flex flex-wrap justify-content-between py-2 flex-md-row flex-column">
								<div className="mb-2 mb-md-0">
									©{adminDate}, made with ❤️ by{" "}
									<NavLink to="/" className="footer-link fw-bolder">
										Saurav
									</NavLink>
								</div>
								<div>
									<NavLink to="/" className="footer-link me-4">
										License
									</NavLink>
									<NavLink to="/" className="footer-link me-4">
										More Themes
									</NavLink>

									<NavLink to="/" className="footer-link me-4">
										Documentation
									</NavLink>

									<NavLink to="/" className="footer-link me-4">
										Support
									</NavLink>
								</div>
							</div>
						</footer>
						{/* / Footer  */}

						<div className="content-backdrop fade"></div>
					</div>
					{/* Content wrapper  */}
				</div>
				{/* / Layout page  */}
			</div>

			{/* Overlay  */}
			<div className="layout-overlay layout-menu-toggle"></div>
		</div>
	);
};

export default Admin;
