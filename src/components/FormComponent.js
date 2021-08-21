import React,{Component} from 'react';
import {reduxForm,Field} from "redux-form";
import {connect} from "react-redux";
import {FormGroup,Col,Label,Input,Row,Button} from "reactstrap";
import UserValidation from '../validations/UserValidation';

const renderField=({
	input,
	type,
	placeholder,
	label,
	disabled,
	readOnly,
	meta: {touched,error,warning},
}) => (
	<Row>
		<Col md="12">
			<Label htmlFor="{input}" className="col-form-label">
				{label}
			</Label>
		</Col>
		<Col md="12">
			<Input
				{...input}
				type={type}
				placeholder={placeholder}
				disabled={disabled}
				readOnly={readOnly}
			></Input>
			{touched&&
				((error&&<p style={{color: "red"}}>{error}</p>)||
					(warning&&<p style={{color: "brown"}}>{warning}</p>))}
		</Col>
	</Row>
);


const mapStateToProps=(state) => {
	return {
		initialValues: {
			name: state.users.getUserDetail.name,
			username: state.users.getUserDetail.username,
			// password: state.users.getUserDetail.password,
			telp: state.users.getUserDetail.telp,
			level: state.users.getUserDetail.level,
			entry_year: state.users.getUserDetail.entry_year,
		}
	};
};


class FormComponent extends Component {
	render() {
		return (
			<form onSubmit={this.props.handleSubmit}>
				<FormGroup row>
					<Col md={6}>
						<FormGroup>
							<Field
								type="text"
								name="name"
								component={renderField}
								label="Name :"
							/>
						</FormGroup>
					</Col>

					<Col md={6}>
						<FormGroup>
							<Field
								type="text"
								name="username"
								component={renderField}
								label="Username :"
							/>
						</FormGroup>
					</Col>

					<Col md={6}>
						<FormGroup>
							<Field
								type="text"
								name="password"
								component={renderField}
								label="Password :"
							/>
						</FormGroup>
						<p style={{"fontSize" : "10px"}}>* Masukkan password baru</p>
					</Col>

					<Col md={6}>
						<FormGroup>
							<Field
								type="text"
								name="telp"
								component={renderField}
								label="Telp :"
							/>
						</FormGroup>
					</Col>

					<Col md={6}>
						<FormGroup>
							<Field
								type="number"
								name="entry_year"
								component={renderField}
								label="Entry Year :"
							/>
						</FormGroup>
					</Col>

					<Col md={6}>
						<FormGroup>
							<Label htmlFor="{input}" className="col-form-label">Level: </Label>
							<Col>
								<Field component="select" name="level" style={{"height": "37px","borderRadius": "3px","width": "200px","border": "1px solid #cccccc"}}>
									<option value="Admin">Admin</option>
									<option value="Student">Siswa</option>
									<option value="Teacher">Guru</option>
								</Field>
							</Col>
						</FormGroup>
					</Col>
				</FormGroup>

				<FormGroup row className="mt-4">
					<Col md="12">
						<FormGroup>
							<Button
								color="primary"
								type="submit"
								disabled={this.props.submitting}
							>
								Submit
							</Button>
						</FormGroup>
					</Col>
				</FormGroup>
			</form>
		);
	}
}


FormComponent=reduxForm({
	form: "formCreateUser",
	enableReinitialize: true,
	validate: UserValidation,
})(FormComponent);
export default connect(mapStateToProps,null)(FormComponent);
