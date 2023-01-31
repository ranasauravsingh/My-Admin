import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import {
	deleteData,
	insertData,
	updateData,
	viewData,
} from "../services/Actions/action";
import {
	INSERT_PRODUCT_DATA,
	VIEW_CATEGORY_DATA,
	VIEW_PRODUCT_DATA,
} from "../services/Constants/constant";

import NoImg from "../assets/img/noImage.jpg";

// import { insert, view, deleteD, updateU } from "../services/AxiosService";
// import { event } from "jquery";

const Product = () => {
	const dispatch = useDispatch();
	const productModel = useSelector((state) => state.productData);
	const categoryModel = useSelector((state) => state.categoryData);

	const [show, setShow] = useState(false);
	const [noImage, setNoImage] = useState(NoImg);
	const handleClose = () => {
		setShow(false);
		setNoImage(NoImg);
		setInputs({});
	};
	const handleShow = () => {
		setShow(true);
	};

	let obj = {
		categoryName: "",
		productName: "",
		productImage: {},
		productPrice: "",
		cutPrice: "",
		other: "",
	};

	const [errors, setErrors] = useState({});
	const [inputs, setInputs] = useState(obj);
	const [updatedId, setUpdatedId] = useState(0);

	// const displayModel = () => {
	// 	view("productModel").then((res) => {
	// 		let output = res;
	// 		setProductModel(output);
	// 		// setFormData(res);
	// 	});
	// 	view("categoryModel").then((res) => {
	// 		let output = res;
	// 		setCategoryModel(output);
	// 		// setFormData(res);
	// 	});
	// };

	useEffect(() => {
		// displayModel();
		dispatch(viewData("categoryModel", VIEW_CATEGORY_DATA));
		dispatch(viewData("productModel", VIEW_PRODUCT_DATA));

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const handleChange = (event) => {
		const name = event.target.name;
		if (name === "productImage") {
			const value = event.target.files[0];

			const fr = new FileReader();
			fr.readAsDataURL(value);
			fr.addEventListener("load", () => {
				const res = fr.result;
				// console.log(res);
				setNoImage(res);
				setInputs((ccc) => ({ ...ccc, [name]: res }));
			});

			// setNoImage(URL.createObjectURL(value));
			// setInputs((ccc) => ({ ...ccc, [name]: URL.createObjectURL(value) }));
		} else {
			const value = event.target.value;
			setInputs((ccc) => ({ ...ccc, [name]: value }));
		}
	};

	const handleUpdate = (item) => {
		handleShow();
		setInputs(item);
		setNoImage(item.productImage);
		setUpdatedId(item.id);
	};

	const handleSubmit = async (event) => {
		event.preventDefault();

		if (inputs.categoryName === "" || inputs.categoryName === undefined) {
			setErrors((ccc) => ({
				...ccc,
				categoryName: "Plz Select Category Name First.",
			}));
			toast.error("Plz Select Cateogry Name First.", {
				theme: "colored",
				autoClose: 2000,
			});
		} else if (inputs.productName === "" || inputs.productName === undefined) {
			setErrors((ccc) => ({
				...ccc,
				productName: "Plz Insert Product Name First.",
			}));
			toast.error("Plz Insert Product Name First.", {
				theme: "colored",
				autoClose: 2000,
			});
		} else if (
			inputs.productPrice === "" ||
			inputs.productPrice === undefined
		) {
			setErrors((ccc) => ({
				...ccc,
				productPrice: "Plz Insert Product Price First.",
			}));
			toast.error("Plz Insert Product Price First.", {
				theme: "colored",
				autoClose: 2000,
			});
		} else {
			if (updatedId !== 0) {
				dispatch(
					updateData("productModel", VIEW_PRODUCT_DATA, updatedId, inputs)
				);

				// 	updateU(updatedId, "categoryModel", inputs).then((res) => {
				// 		if (res === "") {
				// 			toast.error("Error occur while updating category", {
				// 				theme: "colored",
				// 				autoClose: 2000,
				// 			});
				// 		} else {
				// 			toast.success("Category updated successfully", {
				// 				theme: "colored",
				// 				autoClose: 2000,
				// 			});
				// 			displayModel();
				// 			handleClose();
				// 		}
				// 	});
				setUpdatedId(0);
			} else {
				dispatch(insertData("productModel", INSERT_PRODUCT_DATA, inputs));

				// insert(inputs, "categoryModel").then((res) => {
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
			}
			handleClose();
			setErrors({});
			setInputs(obj);
		}
	};

	const handleDelete = (item) => {
		dispatch(deleteData("productModel", VIEW_PRODUCT_DATA, item.id));

		// deleteD(item.id, "categoryModel").then((res) => {
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
					<span className="text-muted fw-light">Inventory /</span> Products
				</h4>
				<ToastContainer />

				<div className="card">
					<h5 className="card-header">Product Table</h5>
					<div className="table-responsive text-nowrap">
						<table className="table">
							<thead className="table-light">
								<tr>
									<th>Sr No.</th>

									<th>Product Image</th>
									<th>Product Name</th>
									<th>Category Name</th>
									<th>Product Price</th>
									<th>Status</th>
									<th>Actions</th>
								</tr>
							</thead>
							<tbody className="table-border-bottom-0">
								{productModel &&
									productModel.map((item, i) => {
										return (
											<tr key={i}>
												<td>{i + 1}</td>
												<td>
													<img
														src={item.productImage}
														alt="productImage"
														style={{
															width: "50px",
															height: "50px",
															borderRadius: "5px",
														}}
													/>
												</td>
												<td>
													<strong>{item.productName}</strong>
												</td>
												<td>
													{categoryModel.map((cate, j) => (
														<strong key={j}>
															{cate.id === parseInt(item.categoryName)
																? cate.categoryName
																: ""}
														</strong>
													))}
												</td>
												<td>{item.productPrice}</td>
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
								<Modal.Title>Product Modal</Modal.Title>
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
											<select
												id="categoryName"
												name="categoryName"
												className="form-control"
												onChange={handleChange}
												value={inputs.categoryName || ""}
											>
												<option value="">--Please select Category--</option>
												{categoryModel.map((cate, i) => (
													<option key={i} value={cate.id}>
														{cate.categoryName}
													</option>
												))}
											</select>
										</div>
										<div className="col mb-3">
											<label htmlFor="productName" className="form-label">
												Product Name
											</label>
											<span style={{ float: "right", color: "red" }}>
												{errors.productName}
											</span>
											<input
												type="text"
												id="productName"
												name="productName"
												className="form-control"
												placeholder="Product Name"
												value={inputs.productName || ""}
												onChange={(e) => {
													handleChange(e);
												}}
											/>
										</div>
									</div>
									<div className="row g-2">
										<div className="col mb-3">
											<label htmlFor="productImage" className="form-label">
												Product Image
											</label>
											<input
												className="form-control"
												type="file"
												id="productImage"
												name="productImage"
												// value={inputs.productImage || ""}
												onChange={(e) => {
													handleChange(e);
												}}
											/>
											<img
												src={noImage}
												alt="productImage"
												style={{
													width: "50px",
													height: "50px",
													borderRadius: "5px",
												}}
											/>
										</div>
									</div>
									<div className="row">
										<div className="col mb-3">
											<label htmlFor="productPrice" className="form-label">
												Product Price
											</label>
											<span style={{ float: "right", color: "red" }}>
												{errors.productPrice}
											</span>
											<input
												type="text"
												id="productPrice"
												name="productPrice"
												className="form-control"
												placeholder="Product Price"
												value={inputs.productPrice || ""}
												onChange={(e) => {
													handleChange(e);
												}}
											/>
										</div>
										<div className="col mb-3">
											<label htmlFor="cutPrice" className="form-label">
												Cut Price
											</label>
											<span style={{ float: "right", color: "red" }}>
												{errors.cutPrice}
											</span>
											<input
												type="text"
												id="cutPrice"
												name="cutPrice"
												className="form-control"
												placeholder="Cut Price"
												value={inputs.cutPrice || ""}
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

export default Product;
