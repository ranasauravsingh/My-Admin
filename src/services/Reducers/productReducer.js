import { INSERT_PRODUCT_DATA, VIEW_PRODUCT_DATA } from "../Constants/constant";

export const productData = (state = [], action) => {
	// console.log("Reducer data ", action);

	switch (action.type) {
		case INSERT_PRODUCT_DATA:
			return [...state, action.data];

		case VIEW_PRODUCT_DATA:
			// console.log([...action.data], " saga se aaya data");
			return [...action.data];

		default:
			return state;
	}
};
