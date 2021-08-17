import React, { Component } from 'react'
import {Container} from 'reactstrap';
import BackComponent from '../components/BackComponent';

export default class CreateUserContainer extends Component {
	render() {
		return (
			<div>
				<Container>
					<BackComponent/>
					<h2>Create New User</h2>
				</Container>
			</div>
		)
	}
}
