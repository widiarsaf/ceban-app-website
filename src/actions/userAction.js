import axios from 'axios';

export const GET_USERS_LIST='GET_USERS_LIST';

export const getUsersList = () => {
	return (dispatch) => {
		axios.get('/users')
			.then(function(response) {
				let result=response.data;
				dispatch({
					type: GET_USERS_LIST,
					payload: {
						data: result,
						erorMessage : false
					}
				})
			})
			.catch(function(error) {
				dispatch({
					type: GET_USERS_LIST,
					payload: {
						data: false,
						erorMessage: error.message
					}
				})
			})
	}
}


