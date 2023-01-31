import React, { useEffect, useState } from "react";

import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// import { updateU } from "../services/AxiosService";
// import { reducer } from "../services/Reducers/reducer";
// import { list1 } from "../services/Constants/initialData";

import {
	deleteData,
	insertData,
	updateData,
	viewData,
} from "../services/Actions/action";
import { useDispatch, useSelector } from "react-redux";
import {
	INSERT_CATEGORY_DATA,
	VIEW_CATEGORY_DATA,
} from "../services/Constants/constant";

const Category = () => {
	// let [list, dispatch] = useReducer(reducer, list1);
	const dispatch = useDispatch();
	const categoryModel = useSelector((state) => state.categoryData);

	const [show, setShow] = useState(false);
	const handleClose = () => {
		setShow(false);
		setInputs({});
	};
	const handleShow = () => setShow(true);

	let obj = {
		categoryName: "",
		other: "",
	};
	const [errors, setErrors] = useState({});
	const [inputs, setInputs] = useState(obj);
	const [updatedId, setUpdatedId] = useState(0);

	// const displayModel = () => {
	// 	dispatch(viewData("categoryModel"));

	// 	// dispatch({
	// 	// 	type: "VIEW",
	// 	// 	payload: { url: "categoryModel", list: list },
	// 	// });
	// 	// setCategoryModel(list);
	// 	// view("categoryModel").then((res) => {
	// 	// 	let output = res;
	// 	// 	setCategoryModel(output);
	// 	// });
	// };

	useEffect(() => {
		dispatch(viewData("categoryModel", VIEW_CATEGORY_DATA));

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const handleChange = (event) => {
		const name = event.target.name;
		const value = event.target.value;
		setInputs((ccc) => ({ ...ccc, [name]: value }));
	};

	const handleUpdate = (item) => {
		handleShow();
		setInputs(item);
		setUpdatedId(item.id);
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		if (inputs.categoryName === "" || inputs.categoryName === undefined) {
			setErrors((ccc) => ({
				...ccc,
				categoryName: "Plz Insert Category Name First.",
			}));
			toast.error("Plz Insert Cateogry Name First.", {
				theme: "colored",
				autoClose: 2000,
			});
		} else {
			if (updatedId !== 0) {
				dispatch(
					updateData("categoryModel", VIEW_CATEGORY_DATA, updatedId, inputs)
				);

				// updateU("categoryModel", updatedId, inputs).then((res) => {
				// 	if (res === "") {
				// 		toast.error("Error occur while updating category", {
				// 			theme: "colored",
				// 			autoClose: 2000,
				// 		});
				// 	} else {
				// 		toast.success("Category updated successfully", {
				// 			theme: "colored",
				// 			autoClose: 2000,
				// 		});
				// 		displayModel();
				// 		handleClose();
				// 	}
				// });
				setUpdatedId(0);
			} else {
				dispatch(insertData("categoryModel", INSERT_CATEGORY_DATA, inputs));

				// dispatch({
				// 	type: "INSERT",
				// 	payload: { data: inputs, url: "categoryModel", list: list },
				// });

				// insert( "categoryModel", inputs).then((res) => {
				// 	if (res === "") {
				// 		toast.error("Error occur while inserting category", {
				// 			theme: "colored",
				// 			autoClose: 2000,
				// 		});
				// 	} else {
				// 		toast.success("Category inserted successfully", {
				// 			theme: "colored",
				// 			autoClose: 2000,
				// 		});
				// 		displayModel();
				// 		handleClose();
				// 	}
				// });
				// displayModel();
			}
			handleClose();
			setErrors({});
			setInputs(obj);
		}
	};

	const handleDelete = (item) => {
		dispatch(deleteData("categoryModel", VIEW_CATEGORY_DATA, item.id));

		// deleteD("categoryModel", item.id).then((res) => {
		// 	if (res === "") {
		// 		toast.error("Error occur while deleting category", {
		// 			theme: "colored",
		// 			autoClose: 2000,
		// 		});
		// 	} else {
		// 		toast.success("Category deleted successfully", {
		// 			theme: "colored",
		// 			autoClose: 2000,
		// 		});
		// 		displayModel();
		// 	}
		// });
	};

	return (
		<div>
			<div className="container-xxl flex-grow-1 container-p-y">
				<h4 className="fw-bold py-3 mb-4">
					<span className="text-muted fw-light">Inventory /</span> Categories
				</h4>
				<ToastContainer />

				<div className="card">
					<h5 className="card-header">Category Table</h5>
					<div className="table-responsive text-nowrap">
						<table className="table">
							<thead className="table-light">
								<tr>
									<th>Sr No.</th>

									<th>Category Name</th>
									<th>Other</th>
									<th>Status</th>
									<th>Actions</th>
								</tr>
							</thead>
							<tbody className="table-border-bottom-0">
								{categoryModel.length > 0 &&
									categoryModel.map((item, i) => {
										return (
											<tr key={i}>
												<td>{i + 1}</td>
												<td>
													<strong>{item.categoryName}</strong>
												</td>
												<td>{item.other}</td>
												<td>
													<span className="badge bg-label-primary me-1">
														Active
													</span>
												</td>
												<td>
													<DropdownButton
														title=""
														variant="Secondary"
														drop="down"
														size="sm"
													>
														<Dropdown.Item
															onClick={() => {
																handleUpdate(item);
															}}
														>
															<i className="bx bx-edit-alt me-1"></i> Edit
														</Dropdown.Item>
														<Dropdown.Item
															onClick={() => {
																handleDelete(item);
															}}
														>
															<i className="bx bx-trash me-1"></i> Delete
														</Dropdown.Item>
													</DropdownButton>
												</td>
											</tr>
										);
									})}
							</tbody>
						</table>
					</div>
				</div>

				<div className="col-lg-4 col-md-6">
					<div className="mt-3">
						<Button variant="primary" onClick={handleShow}>
							<i className="bx bx-plus" style={{ fontSize: "25px" }}></i>
						</Button>

						<Modal
							show={show}
							onHide={handleClose}
							backdrop="static"
							keyboard={false}
						>
							<Modal.Header closeButton>
								<Modal.Title>Category Modal</Modal.Title>
							</Modal.Header>
							<Modal.Body>
								<div className="modal-body">
									<div className="row">
										<div className="col mb-3">
											<label htmlFor="categoryName" className="form-label">
												Category Name
											</label>
											<span style={{ float: "right", color: "red" }}>
												{errors.categoryName}
											</span>
											<input
												type="text"
												id="categoryName"
												name="categoryName"
												className="form-control"
												placeholder="Category Name"
												value={inputs.categoryName || ""}
												onChange={(e) => {
													handleChange(e);
												}}
											/>
										</div>
									</div>
									<div className="row g-2">
										<div className="col mb-0">
											<label htmlFor="other" className="form-label">
												Other
											</label>
											<input
												type="text"
												id="other"
												name="other"
												className="form-control"
												placeholder="Other"
												value={inputs.other || ""}
												onChange={(e) => {
													handleChange(e);
												}}
											/>
										</div>
									</div>
								</div>
							</Modal.Body>
							<Modal.Footer>
								<Button
									variant="secondary"
									onClick={() => {
										handleClose();
									}}
								>
									Close
								</Button>
								<Button
									variant="primary"
									onClick={(e) => {
										handleSubmit(e);
									}}
								>
									Submit
								</Button>
							</Modal.Footer>
						</Modal>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Category;
