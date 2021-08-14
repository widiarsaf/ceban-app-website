import React from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
import {Container,Button} from "reactstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import ToolkitProvider,{Search} from 'react-bootstrap-table2-toolkit';
import paginationFactory from 'react-bootstrap-table2-paginator';

import {
	faInfo,
	faEdit,
	faTrash,
} from "@fortawesome/free-solid-svg-icons";


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
				<Button color="info" className="mr-2">
					<FontAwesomeIcon icon={faInfo} /> Detail
				</Button>{' '}
				<Button color="warning" className="mr-2">
					<FontAwesomeIcon icon={faEdit} />
				</Button>{' '}
				<Button color="danger" className="mr-2">
					<FontAwesomeIcon icon={faTrash} />
				</Button>{' '}
			</div>
		);
	},
},
];

const defaultSorted=[{
	dataField: 'name',
	order: 'desc'
}];




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
							<div className="float-right">
								<SearchBar {...props.searchProps} placeholder = "Cari.."/>
							</div>
							<br/>
							<BootstrapTable {...props.baseProps} pagination={paginationFactory()}/>
						</div>
						)
					}
				</ToolkitProvider>
			</Container>
		</div>
	);
};

export default TableComponent;
