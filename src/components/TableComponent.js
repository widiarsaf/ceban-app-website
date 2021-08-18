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


const {SearchBar}=Search;
const columns=[{
	dataField: 'id',
	text: 'ID',
	headerStyle: () => {
		return {width: "5%"};
	},
	sort: true
},{
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
					<Button color="warning"data-toggle="tooltip" title="Edit Data Users">
						<FontAwesomeIcon icon={faEdit} color= "white"/>
					</Button>
				</Link>
				{' '}
				<Link>
					<Button color="danger"  data-toggle="tooltip" title="Hapus Data Users">
						<FontAwesomeIcon icon={faTrash} />
					</Button>
				</Link>
				{' '}
			</div>
		);
	},
},
];

const defaultSorted=[{
	dataField: 'name',
	order: 'desc'
}];


const mapStateToProps=(state) => {
	return {
		getUsersList: state.users.getUsersList,
		errorUsersList : state.users.errorUsersList
	};
};

const TableComponent=(props) => {
	return (
		<div>
			<Container>
				{props.getUsersList ?
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
									<div className="float-right">
										<SearchBar {...props.searchProps} placeholder="Cari.." />
									</div>
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
							{props.errorUsersList ? <h3>{props.errorUsersList}</h3> :
								<Spinner color="dark" children=" " />
							}
						</div>
					 )}
			</Container>
		</div>
	);
};

export default connect(mapStateToProps,null)(TableComponent);
