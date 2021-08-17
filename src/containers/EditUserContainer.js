import React,{Component} from 'react';
import {Container} from 'reactstrap';
import BackComponent from '../components/BackComponent';

export default class EditUserContainer extends Component {
	render() {
		return (
			<div>
				<Container>
					<BackComponent/>
					<h2>Edit User Data</h2>
				</Container>
			</div>
		);
	}
}
