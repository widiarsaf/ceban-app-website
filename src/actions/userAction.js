import axios from 'axios';

export const GET_USERS_LIST='GET_USERS_LIST';
export const GET_USER_DETAIL='GET_USER_DETAIL';
export const POST_USER_CREATE='POST_USER_CREATE';
export const PUT_USER_EDIT='PUT_USER_EDIT';

export const getUsersList=() => {
	return (dispatch) => {
		axios.get('/users')
			.then(function(response) {
				let result=response.data;
				dispatch({
					type: GET_USERS_LIST,
					payload: {
						data: result,
						erorMessage: false
					}
				});
			})
			.catch(function(error) {
				dispatch({
					type: GET_USERS_LIST,
					payload: {
						data: false,
						erorMessage: error.message
					}
				});
			});
	};
};

export const getUserDetail=(id) => {
	return (dispatch) => {
		axios.get('/users/'+id)
			.then(function(response) {
				let result=response.data;
				dispatch({
					type: GET_USER_DETAIL,
					payload: {
						data: result,
						erorMessage: false
					}
				});
			})
			.catch(function(error) {
				dispatch({
					type: GET_USER_DETAIL,
					payload: {
						data: false,
						erorMessage: error.message
					}
				});
			});
	};
};

export const deleteDataUser=() => {
	return (dispatch) => {
		dispatch({
			type: GET_USER_DETAIL,
			payload: {
				data: false,
				erorMessage: false
			}
		});
		dispatch({
			type: POST_USER_CREATE,
			payload: {
				data: false,
				erorMessage: false
			}
		});
	};
};


export const postUserCreate=(data) => {
	return (dispatch) => {
		axios.post('/users/' , data)
			.then(function(response) {
				let result=response.data;
				dispatch({
					type: POST_USER_CREATE,
					payload: {
						data: result,
						erorMessage: false
					}
				});
			})
			.catch(function(error) {
				dispatch({
					type: POST_USER_CREATE,
					payload: {
						data: false,
						erorMessage: error.message
					}
				});
			});
	};
};

export const putUserEdit=(data, id) => {
	return (dispatch) => {
		axios.put('/users/'+ id,data)
			.then(function(response) {
				let result=response.data;
				dispatch({
					type: PUT_USER_EDIT,
					payload: {
						data: result,
						erorMessage: false
					}
				});
			})
			.catch(function(error) {
				dispatch({
					type: PUT_USER_EDIT,
					payload: {
						data: false,
						erorMessage: error.message
					}
				});
			});
	};
};

export const deleteUser=(id) => {
	return (dispatch) => {
		axios.delete('/users/'+id)
			.then(function(response) {
				console.log(response)
			})
			.catch(function(error) {
				console.log(error)
			});
	};
};
