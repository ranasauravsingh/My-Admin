import React from "react";
import { NavLink } from "react-router-dom";

const Connection = () => {
	return (
		<div>
			<div className="row">
				<div className="col-md-6 col-12 mb-md-0 mb-4">
					<div className="card">
						<h5 className="card-header">Connected Accounts</h5>
						<div className="card-body">
							<p>Display content from your connected accounts on your site</p>
							{/* Connections  */}
							<div className="d-flex mb-3">
								<div className="flex-shrink-0 mx-3">
									<i className="bx bxl-google" style={{ fontSize: "30px" }}></i>
								</div>
								<div className="flex-grow-1 row">
									<div className="col-9 mb-sm-0 mb-2">
										<h6 className="mb-0">Google</h6>
										<small className="text-muted">Calendar and contacts</small>
									</div>
									<div className="col-3 text-end">
										<div className="form-check form-switch">
											<input
												className="form-check-input float-end"
												type="checkbox"
												role="switch"
											/>
										</div>
									</div>
								</div>
							</div>
							<div className="d-flex mb-3">
								<div className="flex-shrink-0 mx-3">
									<i className="bx bxl-slack" style={{ fontSize: "30px" }}></i>
								</div>
								<div className="flex-grow-1 row">
									<div className="col-9 mb-sm-0 mb-2">
										<h6 className="mb-0">Slack</h6>
										<small className="text-muted">Communication</small>
									</div>
									<div className="col-3 text-end">
										<div className="form-check form-switch">
											<input
												className="form-check-input float-end"
												type="checkbox"
												role="switch"
												defaultChecked
											/>
										</div>
									</div>
								</div>
							</div>
							<div className="d-flex mb-3">
								<div className="flex-shrink-0 mx-3">
									<i className="bx bxl-github" style={{ fontSize: "30px" }}></i>
								</div>
								<div className="flex-grow-1 row">
									<div className="col-9 mb-sm-0 mb-2">
										<h6 className="mb-0">Github</h6>
										<small className="text-muted">
											Manage your Git repositories
										</small>
									</div>
									<div className="col-3 text-end">
										<div className="form-check form-switch">
											<input
												className="form-check-input float-end"
												type="checkbox"
												role="switch"
											/>
										</div>
									</div>
								</div>
							</div>
							<div className="d-flex mb-3">
								<div className="flex-shrink-0 mx-3">
									<i
										className="bx bxl-mailchimp"
										style={{ fontSize: "30px" }}
									></i>
								</div>
								<div className="flex-grow-1 row">
									<div className="col-9 mb-sm-0 mb-2">
										<h6 className="mb-0">Mailchimp</h6>
										<small className="text-muted">
											Email marketing service
										</small>
									</div>
									<div className="col-3 text-end">
										<div className="form-check form-switch">
											<input
												className="form-check-input float-end"
												type="checkbox"
												role="switch"
												defaultChecked
											/>
										</div>
									</div>
								</div>
							</div>

							{/* /Connections  */}
						</div>
					</div>
				</div>
				<div className="col-md-6 col-12">
					<div className="card">
						<h5 className="card-header">Social Accounts</h5>
						<div className="card-body">
							<p>Display content from social accounts on your site</p>
							{/* Social Accounts  */}
							<div className="d-flex mb-3">
								<div className="flex-shrink-0 mx-3">
									<i
										className="bx bxl-facebook"
										style={{ fontSize: "30px" }}
									></i>
								</div>
								<div className="flex-grow-1 row">
									<div className="col-8 col-sm-7 mb-sm-0 mb-2">
										<h6 className="mb-0">Facebook</h6>
										<small className="text-muted">Not Connected</small>
									</div>
									<div className="col-4 col-sm-5 text-end">
										<button
											type="button"
											className="btn btn-icon btn-outline-secondary"
										>
											<i className="bx bx-link-alt"></i>
										</button>
									</div>
								</div>
							</div>
							<div className="d-flex mb-3">
								<div className="flex-shrink-0 mx-3">
									<i
										className="bx bxl-twitter"
										style={{ fontSize: "30px" }}
									></i>
								</div>
								<div className="flex-grow-1 row">
									<div className="col-8 col-sm-7 mb-sm-0 mb-2">
										<h6 className="mb-0">Twitter</h6>
										<NavLink
											href="https://twitter.com/Theme_Selection"
											target="_blank"
										>
											@ThemeSelection
										</NavLink>
									</div>
									<div className="col-4 col-sm-5 text-end">
										<button
											type="button"
											className="btn btn-icon btn-outline-danger"
										>
											<i className="bx bx-trash-alt"></i>
										</button>
									</div>
								</div>
							</div>
							<div className="d-flex mb-3">
								<div className="flex-shrink-0 mx-3">
									<i
										className="bx bxl-instagram"
										style={{ fontSize: "30px" }}
									></i>
								</div>
								<div className="flex-grow-1 row">
									<div className="col-8 col-sm-7 mb-sm-0 mb-2">
										<h6 className="mb-0">instagram</h6>
										<NavLink to="#">@ThemeSelection</NavLink>
									</div>
									<div className="col-4 col-sm-5 text-end">
										<button
											type="button"
											className="btn btn-icon btn-outline-danger"
										>
											<i className="bx bx-trash-alt"></i>
										</button>
									</div>
								</div>
							</div>
							<div className="d-flex mb-3">
								<div className="flex-shrink-0 mx-3">
									<i
										className="bx bxl-dribbble"
										style={{ fontSize: "30px" }}
									></i>
								</div>
								<div className="flex-grow-1 row">
									<div className="col-8 col-sm-7 mb-sm-0 mb-2">
										<h6 className="mb-0">Dribbble</h6>
										<small className="text-muted">Not Connected</small>
									</div>
									<div className="col-4 col-sm-5 text-end">
										<button
											type="button"
											className="btn btn-icon btn-outline-secondary"
										>
											<i className="bx bx-link-alt"></i>
										</button>
									</div>
								</div>
							</div>
							<div className="d-flex">
								<div className="flex-shrink-0 mx-3">
									<i
										className="bx bxl-behance"
										style={{ fontSize: "30px" }}
									></i>
								</div>
								<div className="flex-grow-1 row">
									<div className="col-8 col-sm-7 mb-sm-0 mb-2">
										<h6 className="mb-0">Behance</h6>
										<small className="text-muted">Not Connected</small>
									</div>
									<div className="col-4 col-sm-5 text-end">
										<button
											type="button"
											className="btn btn-icon btn-outline-secondary"
										>
											<i className="bx bx-link-alt"></i>
										</button>
									</div>
								</div>
							</div>
							{/* /Social Accounts  */}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Connection;
