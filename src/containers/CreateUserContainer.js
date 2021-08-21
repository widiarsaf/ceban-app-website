import React, { Component } from 'react'
import {Container} from 'reactstrap';
import BackComponent from '../components/BackComponent';
import FormComponent from '../components/FormComponent';
import {connect} from 'react-redux';
// import md5 from 'md5';
import {postUserCreate} from '../actions/userAction';

class CreateUserContainer extends Component {
	handleSubmit(data) {
		this.props.dispatch(postUserCreate(data));

	}
	
	render() {
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

export default connect()(CreateUserContainer);