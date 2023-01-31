import Http from "./HttpClient";

export const insert = (model, data) => {
	return Http.post(model, data)
		.then((response) => {
			if (response.status === 200 && response != null) {
				// console.log(response);
				return response.data;
			} else {
				return response.statusText;
			}
		})
		.catch((error) => {
			return error;
		});
};

export const view = (model) => {
	return Http.get(model)
		.then((response) => {
			if (response.status === 200 && response != null) {
				// console.log(response);
				return response.data;
			} else {
				return response.statusText;
			}
		})
		.catch((error) => {
			return error;
		});
};

export const updateU = (model, id, data) => {
	return Http.put(`${model}/${id}`, data)
		.then((response) => {
			if (response.status === 200 && response != null) {
				// console.log(response);
				return response.data;
			} else {
				return response.statusText;
			}
		})
		.catch((error) => {
			return error;
		});
};

export const deleteD = (model, id) => {
	return Http.delete(`${model}/${id}`)
		.then((response) => {
			if (response.status === 200 && response != null) {
				// console.log(response);
				return response.data;
			} else {
				return response.statusText;
			}
		})
		.catch((error) => {
			return error;
		});
};
