import React,{Component} from 'react';
import {Container} from 'reactstrap';
import BackComponent from '../components/BackComponent';
import {connect} from 'react-redux';
import {getUserDetail, putUserEdit} from '../actions/userAction';
import FormComponent from '../components/FormComponent';
import swal from 'sweetalert'; //sweet alert

const mapStateToProps=(state) => {
	return {
		getResponDataUser: state.users.getResponDataUser,
		errorResponDataUser: state.users.errorResponDataUser
	};
}

class EditUserContainer extends Component {
	componentDidMount() {
		this.props.dispatch(getUserDetail(this.props.match.params.id));
	}

	handleSubmit(data) {
		this.props.dispatch(putUserEdit(data, this.props.match.params.id));

	}

	render() {
		if(this.props.getResponDataUser||this.props.errorResponDataUser) {
			if(this.props.errorResponDataUser) {
				swal("Failed to Update!","Update user data failed, Please Try Again!","error");
			}
			else {
				swal("User Updated!","New user data successfully updated","success");
			}
		}
		return (
			<div>
				<Container>
					<BackComponent />
					<h2>Edit User Data</h2>
					<FormComponent onSubmit={(data) => this.handleSubmit(data)}/>
				</Container>
			</div>
		);
	}
}

export default connect(mapStateToProps, null)(EditUserContainer);
