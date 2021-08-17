import React,{Component} from 'react';
import {Container} from 'reactstrap';
import BackComponent from '../components/BackComponent';

class DetailUserContainer extends Component {
	render() {
		return (
			<div>
				<Container>
					<BackComponent/>
					<h2>Detail User</h2>
				</Container>
			</div>
		);
	}
}

export default DetailUserContainer;
