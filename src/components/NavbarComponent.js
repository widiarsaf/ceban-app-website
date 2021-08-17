import React,{useState} from 'react';
import {
	Collapse,
	Navbar,
	NavbarToggler,
	NavbarBrand,
	Nav,
	NavItem,
	NavLink,
	NavbarText,
	Container
} from 'reactstrap';

const NavbarComponent=(props) => {
	const [isOpen,setIsOpen]=useState(false);

	const toggle=() => setIsOpen(!isOpen);

	return (
		<div>
			<Navbar color="dark" dark expand="md" className = "mb-5">
				<Container>
					<NavbarBrand href="/">CEBAN</NavbarBrand>
					<NavbarToggler onClick={toggle} />
					<Collapse isOpen={isOpen} navbar>
						<Nav className="mr-auto" navbar>
							<NavItem>
								<NavLink href = "#">Users</NavLink>
							</NavItem>
							<NavItem>
								<NavLink href="https://github.com/reactstrap/reactstrap">About Us</NavLink>
							</NavItem>
						</Nav>
					</Collapse>
					<NavbarText>Admin</NavbarText>
				</Container>
			</Navbar>
		</div>
	);
};

export default NavbarComponent;