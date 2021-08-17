import React from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
import {Container,Button,Row,Col} from "reactstrap";
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
import { connect } from 'react-redux';


const {SearchBar}=Search;
const columns=[{
	dataField: 'id',
	text: 'ID',
	headerStyle: () => {
		return {width: "5%"};
	},
	sort: true
},{
	dataField: 'nama',
	text: 'Nama',
	sort: true
},{
	dataField: 'umur',
	text: 'Umur',
	sort: true
},{
	dataField: 'alamat',
	text: 'Alamat',
	sort: true
},
{
	dataField: "link",
	text: "Action",
	formatter: (rowContent,row) => {
		return (
			<div style={{"gap": "20px","display": "inline"}}>
				<Link to={"detail/"+row.id}>
					<Button color="info" className="mr-2">
						<FontAwesomeIcon icon={faInfo} /> Detail
					</Button>{' '}
				</Link>
				<Link to={"edit/"+row.id}>
					<Button color="warning" className="mr-2">
						<FontAwesomeIcon icon={faEdit} />
					</Button>{' '}
				</Link>
				<Link>
					<Button color="danger" className="mr-2">
						<FontAwesomeIcon icon={faTrash} />
					</Button>{' '}
				</Link>
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
		users : state.users.users
	};
};

const TableComponent=(props) => {
	return (
		<div>
			<Container>
				<ToolkitProvider
					bootstrap4
					keyField='id'
					data={props.users}
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
			</Container>
		</div>
	);
};

export default connect(mapStateToProps, null)(TableComponent);
