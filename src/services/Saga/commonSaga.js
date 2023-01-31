import Http from "../HttpClient";
import { toast } from "react-toastify";
import Swal from "sweetalert2";

import { takeEvery, put } from "redux-saga/effects";
import {
	DELETE_DATA,
	INSERT_DATA,
	UPDATE_DATA,
	VIEW_DATA,
} from "../Constants/constant";

function* postDatas(action) {
	// console.log(action);
	let data = yield Http.post(action.payload.model, action.payload.data)
		.then((response) => {
			if (response.status === 201 && response != null) {
				// console.log("INSERT", response.data);
				return response.data;
			} else {
				return response.statusText;
			}
		})
		.then((res) => {
			toast.success("Category inserted successfully", {
				theme: "colored",
				autoClose: 2000,
			});
			return res;
		})
		.catch((error) => {
			toast.error("Error occur while inserting category", {
				theme: "colored",
				autoClose: 2000,
			});
			return error;
		});

	yield put({ type: action.payload.viewType, data: data });
}

function* putDatas(action) {
	yield Http.put(
		`${action.payload.model}/${action.payload.id}`,
		action.payload.data
	)
		.then((response) => {
			if (response.status === 201 && response != null) {
				// console.log("INSERT", response.data);
				return response.data;
			} else {
				return response.statusText;
			}
		})
		.then((res) => {
			toast.success("Category updated successfully", {
				theme: "colored",
				autoClose: 2000,
			});
			return res;
		})
		.catch((error) => {
			toast.error("Error occur while updating category", {
				theme: "colored",
				autoClose: 2000,
			});
			return error;
		});

	yield getDatas(action);
	// yield put({ type: SET_INSERT_DATA, data: data });
}

function* getDatas(action) {
	// console.log(action);
	let data = yield Http.get(action.payload.model)
		.then((response) => {
			if (response.status === 200 && response != null) {
				return response.data;
			} else {
				return response.statusText;
			}
		})
		.then((res) => {
			// console.log(res, " saga ka data");
			return res;
		})
		.catch((error) => {
			return error;
		});

	yield put({ type: action.payload.viewType, data: data });
}

function* deleteDatas(action) {
	let data = yield Swal.fire({
		title: "Are you sure want to remove?",
		text: "You will not be able to recover this file!",
		icon: "warning",
		showCancelButton: true,
		confirmButtonText: "Yes, delete it!",
		cancelButtonText: "No, keep it",
	}).then((result) => {
		if (result.value) {
			return result.value;
		} else if (result.dismiss === Swal.DismissReason.cancel) {
		}
	});

	if (data) {
		yield Http.delete(`${action.payload.model}/${action.payload.id}`)
			.then((response) => {
				if (response.status === 200 && response != null) {
					// console.log(response.data, " saga ka data");

					return response.data;
				} else {
					return response.statusText;
				}
			})
			.then((res) => {
				toast.success("Category deleted successfully", {
					theme: "colored",
					autoClose: 2000,
				});
				return res;
			})
			.catch((error) => {
				toast.error("Error occur while inserting category", {
					theme: "colored",
					autoClose: 2000,
				});
				return error;
			});

		yield getDatas(action);
	}
}

function* commonSaga() {
	yield takeEvery(INSERT_DATA, postDatas);
	yield takeEvery(VIEW_DATA, getDatas);
	yield takeEvery(UPDATE_DATA, putDatas);
	yield takeEvery(DELETE_DATA, deleteDatas);
}

export default commonSaga;
