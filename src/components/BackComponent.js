import React from 'react';
import {Row,Col,Button} from 'reactstrap';
import {Link} from 'react-router-dom';
import {
	faArrowLeft,
} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const BackComponent = () => {
	return (
		<div>
			<Row className = "mb-3">
				<Col>
					<Link to={"/"}>
						<Button color="dark">
							<FontAwesomeIcon icon={faArrowLeft} /> Back
						</Button>{' '}
					</Link>
				</Col>
			</Row>
		</div>
	)
}

export default BackComponent
