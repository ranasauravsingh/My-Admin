import React from "react";

const Notification = () => {
	return (
		<div>
			<div className="card">
				{/* Notifications  */}
				<h5 className="card-header">Recent Devices</h5>
				<div className="card-body">
					<span>
						We need permission from your browser to show notifications.
						<span className="notificationRequest">
							<strong> Request Permission</strong>
						</span>
					</span>
					<div className="error"></div>
				</div>
				<div className="table-responsive">
					<table className="table table-striped table-borderless border-bottom">
						<thead>
							<tr>
								<th className="text-nowrap">Type</th>
								<th className="text-nowrap text-center">✉️ Email</th>
								<th className="text-nowrap text-center">🖥 Browser</th>
								<th className="text-nowrap text-center">👩🏻‍💻 App</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td className="text-nowrap">New for you</td>
								<td>
									<div className="form-check d-flex justify-content-center">
										<input
											className="form-check-input"
											type="checkbox"
											id="defaultCheck1"
										/>
									</div>
								</td>
								<td>
									<div className="form-check d-flex justify-content-center">
										<input
											className="form-check-input"
											type="checkbox"
											id="defaultCheck2"
										/>
									</div>
								</td>
								<td>
									<div className="form-check d-flex justify-content-center">
										<input
											className="form-check-input"
											type="checkbox"
											id="defaultCheck3"
										/>
									</div>
								</td>
							</tr>
							<tr>
								<td className="text-nowrap">Account activity</td>
								<td>
									<div className="form-check d-flex justify-content-center">
										<input
											className="form-check-input"
											type="checkbox"
											id="defaultCheck4"
											defaultChecked
										/>
									</div>
								</td>
								<td>
									<div className="form-check d-flex justify-content-center">
										<input
											className="form-check-input"
											type="checkbox"
											id="defaultCheck5"
										/>
									</div>
								</td>
								<td>
									<div className="form-check d-flex justify-content-center">
										<input
											className="form-check-input"
											type="checkbox"
											id="defaultCheck6"
										/>
									</div>
								</td>
							</tr>
							<tr>
								<td className="text-nowrap">A new browser used to sign in</td>
								<td>
									<div className="form-check d-flex justify-content-center">
										<input
											className="form-check-input"
											type="checkbox"
											id="defaultCheck7"
										/>
									</div>
								</td>
								<td>
									<div className="form-check d-flex justify-content-center">
										<input
											className="form-check-input"
											type="checkbox"
											id="defaultCheck8"
										/>
									</div>
								</td>
								<td>
									<div className="form-check d-flex justify-content-center">
										<input
											className="form-check-input"
											type="checkbox"
											id="defaultCheck9"
										/>
									</div>
								</td>
							</tr>
							<tr>
								<td className="text-nowrap">A new device is linked</td>
								<td>
									<div className="form-check d-flex justify-content-center">
										<input
											className="form-check-input"
											type="checkbox"
											id="defaultCheck10"
										/>
									</div>
								</td>
								<td>
									<div className="form-check d-flex justify-content-center">
										<input
											className="form-check-input"
											type="checkbox"
											id="defaultCheck11"
										/>
									</div>
								</td>
								<td>
									<div className="form-check d-flex justify-content-center">
										<input
											className="form-check-input"
											type="checkbox"
											id="defaultCheck12"
											defaultChecked
										/>
									</div>
								</td>
							</tr>
						</tbody>
					</table>
				</div>
				<div className="card-body">
					<h6>When should we send you notifications?</h6>
					<form>
						<div className="row">
							<div className="col-sm-6">
								<select
									id="sendNotification"
									className="form-select"
									name="sendNotification"
									defaultValue={"Only when I'm online"}
								>
									<option>Only when I'm online</option>
									<option>Anytime</option>
								</select>
							</div>
							<div className="mt-4">
								<button type="submit" className="btn btn-primary me-2">
									Save changes
								</button>
								<button type="reset" className="btn btn-outline-secondary">
									Discard
								</button>
							</div>
						</div>
					</form>
				</div>
				{/* /Notifications  */}
			</div>
		</div>
	);
};

export default Notification;
