import React from 'react';
import {connect} from 'react-redux';
import {Table} from "reactstrap";
// import reverseMd5 from 'reverse-md5';

const mapStateToProps=(state) => {
	return {
		getUserDetail: state.users.getUserDetail,
		errorUserDetail: state.users.errorUserDetail
	};
};

const DetailUserComponent=(props) => {
	return (
		<Table striped>
			<tbody>
				<tr>
					<td>Nama</td>
					<td>:</td>
					<td>{props.getUserDetail.name}</td>
				</tr>
				<tr>
					<td>Username</td>
					<td>:</td>
					<td>{props.getUserDetail.username}</td>
				</tr>
				<tr>
					<td>Password</td>
					<td>:</td>
					<td>{props.getUserDetail.password}</td>
				</tr>
				<tr>
					<td>Telp</td>
					<td>:</td>
					<td>{props.getUserDetail.telp}</td>
				</tr>
				<tr>
					<td>Level</td>
					<td>:</td>
					<td>{props.getUserDetail.level}</td>
				</tr>
				<tr>
					<td>Entry Year</td>
					<td>:</td>
					<td>{props.getUserDetail.entry_year}</td>
				</tr>
			</tbody>
		</Table>
	);
};

export default connect(mapStateToProps,null)(DetailUserComponent);
