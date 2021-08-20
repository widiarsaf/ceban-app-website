import React,{Component} from 'react';
import {Container} from 'reactstrap';
import BackComponent from '../components/BackComponent';
import {connect} from 'react-redux';
import {getUserDetail} from '../actions/userAction';
import DetailUserComponent from '../components/DetailUserComponent';

class DetailUserContainer extends Component {
	componentDidMount() {
		this.props.dispatch(getUserDetail(this.props.match.params.id))
	}
	render() { 
		return (
			<div>
				<Container>
					<BackComponent/>
					<h2>Detail User {this.props.match.params.id}</h2>
					<DetailUserComponent/>
				</Container>
			</div>
		);
	}
}

export default connect()(DetailUserContainer);
