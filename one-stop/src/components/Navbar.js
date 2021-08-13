import {
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
} from 'reactstrap';
import { useState } from "react";
const Navbars = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <div>
            <Navbar  color="light" light expand="md">
                <NavbarBrand href="/"><span ></span>Dashboard</NavbarBrand>
                <NavbarToggler onClick={toggle} />
            </Navbar>
            {isOpen && 
                <div>
                    <Nav className="mr-auto" navbar>
                        <NavItem>
                            <NavLink href="/components/">Components</NavLink>
                        </NavItem>
                    </Nav>
                </div>}
        </div>
    );
}

export default Navbars;