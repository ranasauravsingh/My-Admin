// import Http from "../HttpClient";
import {
	INSERT_CATEGORY_DATA,
	VIEW_CATEGORY_DATA,
} from "../Constants/constant";

export const categoryData = (state = [], action) => {
	// console.log("Reducer data ", action);

	switch (action.type) {
		case INSERT_CATEGORY_DATA:
			return [...state, action.data];

		case VIEW_CATEGORY_DATA:
			// console.log([...action.data], " saga se aaya data");
			return [...action.data];

		default:
			return state;
	}
};

// export const reducer = (state = [], action) => {
// 	// console.log(state);
// 	const newState = [...state];
// 	switch (action.type) {
// 		case "INSERT":
// 			let output = Http.post(action.payload.url, action.payload.data)
// 				.then((response) => {
// 					if (response.status === 201 && response != null) {
// 						// console.log("INSERT", response.data);
// 						return response.data;
// 					} else {
// 						return response.statusText;
// 					}
// 				})
// 				.catch((error) => {
// 					return error;
// 				});
// 			output.then((res) => {
// 				newState.push(res);
// 				action.payload.list.push(res);
// 				console.log(action.payload.list);
// 			});

// 			return newState;

// 		case "VIEW":
// 			let output1 = Http.get(action.payload.url)
// 				.then((response) => {
// 					if (response.status === 200 && response != null) {
// 						// console.log("VIEW", response.data);

// 						return response.data;
// 					} else {
// 						return response.statusText;
// 					}
// 				})
// 				.catch((error) => {
// 					return error;
// 				});

// 			output1.then((res) => {
// 				action.payload.list = [...res];
// 				console.log(res);
// 			});
// 			return action.payload.list;

// 		case "UPDATE":
// 			return;

// 		case "DELETE":
// 			return;

// 		default:
// 			return state;
// 	}
// };
