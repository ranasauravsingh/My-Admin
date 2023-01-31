import {
	DELETE_DATA,
	INSERT_DATA,
	UPDATE_DATA,
	VIEW_DATA,
} from "../Constants/constant";

export const insertData = (model, viewType, data) => {
	// console.log(model, " Action data ", data);

	return {
		type: INSERT_DATA,
		payload: {
			model,
			viewType,
			data,
		},
	};
};
export const viewData = (model, viewType) => {
	// console.log("Action data ", model);

	return {
		type: VIEW_DATA,
		payload: {
			model,
			viewType,
		},
	};
};

export const updateData = (model, viewType, id, data) => {
	// console.log("Action data ", model);

	return {
		type: UPDATE_DATA,
		payload: {
			model,
			viewType,
			id,
			data,
		},
	};
};

export const deleteData = (model, viewType, id) => {
	// console.log("Action data ", model);

	return {
		type: DELETE_DATA,
		payload: {
			model,
			viewType,
			id,
		},
	};
};
