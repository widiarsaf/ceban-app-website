import React from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
import {Container,Button,Row,Col,Spinner} from "reactstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import ToolkitProvider,{Search} from 'react-bootstrap-table2-toolkit';
import paginationFactory from 'react-bootstrap-table2-paginator';
import {
	Link
} from "react-router-dom";
import {
	faInfo,
	faEdit,
	faTrash,
	faPlus,
} from "@fortawesome/free-solid-svg-icons";
import {connect} from 'react-redux';
import swal from 'sweetalert'; //sweet alert
import {deleteUser} from '../actions/userAction';



const {SearchBar}=Search;

const handleClick=(dispatch, id) => {
	swal({
		text: "Are you sure to delete this user data?",
		icon: "warning",
		buttons: true,
		dangerMode: true,
	})
		.then((willDelete) => {
			if(willDelete) {
				dispatch(deleteUser(id))
				swal("Success! User Data Deleted",{
					icon: "success",
				});
				function reload() {
					document.location.reload();
				}
				setTimeout(reload,1500);
			} else {
				swal("User data is safe!");
			}
		});

}

const defaultSorted=[{
	dataField: 'name',
	order: 'desc'
}];


const mapStateToProps=(state) => {
	return {
		getUsersList: state.users.getUsersList,
		errorUsersList: state.users.errorUsersList
	};
};

const TableComponent=(props) => {

	const columns=[{
		dataField: 'name',
		text: 'Name',
		sort: true
	},{
		dataField: 'username',
		text: 'Username',
		sort: true
	},{
		dataField: 'telp',
		text: 'Telp',
		sort: true
	},{
		dataField: 'level',
		text: 'Level',
		sort: true
	},{
		dataField: 'entry_year',
		text: 'Entry Year',
		sort: true
	},
	{
		dataField: "link",
		text: "Action",
		formatter: (rowContent,row) => {
			return (
				<div >
					<Link to={"detail/"+row.id}>
						<Button color="info" data-toggle="tooltip" title="Lihat Detail">
							<FontAwesomeIcon icon={faInfo} color="white" />
						</Button>
					</Link>
					{' '}
					<Link to={"edit/"+row.id}>
						<Button color="warning" data-toggle="tooltip" title="Edit Data Users">
							<FontAwesomeIcon icon={faEdit} color="white" />
						</Button>
					</Link>
					{' '}
					<Link>
						<Button color="danger" data-toggle="tooltip" title="Hapus Data Users" onClick={() => {handleClick(props.dispatch, row.id);}}>
							<FontAwesomeIcon icon={faTrash} />
						</Button>
					</Link>
					{' '}
				</div>
			);
		},
	},
	];

	return (
		<div>
			<Container>
				{props.getUsersList?
					<ToolkitProvider
						bootstrap4
						keyField='id'
						data={props.getUsersList}
						columns={columns}
						defaultSorted={defaultSorted}
						search
					>
						{(props) => (
							<div>
								<Row>
									<Col>
										<Link to={"create/"}>
											<Button color="info" className="mr-2">
												<FontAwesomeIcon icon={faPlus} /> Tambah User
											</Button>{' '}
										</Link>
									</Col>
									<Col>
										<Row>
											<Col>
												<div className="float-right"><b>Cari : </b>
													<SearchBar style={{minWidth: "440px"}}{...props.searchProps} placeholder="masukkan kata kunci pencarian.." className="float-right" />
												</div>
											</Col>
										</Row>
									</Col>
								</Row>

								<br />
								<BootstrapTable {...props.baseProps} pagination={paginationFactory()} />
							</div>
						)
						}
					</ToolkitProvider>
					:(
						<div className="text-center">
							{props.errorUsersList? <h3>{props.errorUsersList}</h3>:
								<Spinner color="dark" children=" " />
							}
						</div>
					)}
			</Container>
		</div>
	);
};

export default connect(mapStateToProps,null)(TableComponent);
