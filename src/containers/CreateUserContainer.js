import React, { Component } from 'react'
import {Container} from 'reactstrap';
import BackComponent from '../components/BackComponent';
import FormComponent from '../components/FormComponent';
import {connect} from 'react-redux';
// import md5 from 'md5';
import {postUserCreate} from '../actions/userAction';
import swal from 'sweetalert'; //sweet alert


const mapStateToProps=(state) => {
	return {
		getResponDataUser: state.users.getResponDataUser,
		errorResponDataUser: state.users.errorResponDataUser
	};
}

class CreateUserContainer extends Component {
	handleSubmit(data) {
		this.props.dispatch(postUserCreate(data));

	}
	
	render() {
		if(this.props.getResponDataUser||this.props.errorResponDataUser) {
			if(this.props.errorResponDataUser) {
				swal("Failed to Create!", "Store user data failed, Please Try Again!","error");
			}
			else{
				swal("User Created!", "New user data successfully stored","success");
			}
		}
		return (
			<div>
				<Container>
					<BackComponent/>
					<h2>Create New User</h2>
					<FormComponent onSubmit={(data)=> this.handleSubmit(data)}/>
				</Container>
			</div>
		)
	}
}

export default connect(mapStateToProps, null)(CreateUserContainer);