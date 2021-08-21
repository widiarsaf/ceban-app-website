
const UserValidation=(values) => {
	const errors={};

	if(!values.name||values.name==="") {
		errors.name="Name must be entered";
	}
	if(!values.username||values.username==="") {
		errors.username="Username must be entered";
	}
	if(!values.password||values.password==="") {
		errors.password="Password must be entered";
	}
	if(!values.telp||values.telp==="") {
		errors.telp="Telephone must be entered";
	}
	if(!values.level||values.level==="") {
		errors.level="Level must be entered";
	}

	return errors;
};

export default UserValidation;