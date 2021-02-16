import React from 'react';
import { Navbar } from "react-bootstrap";

const Header = () => {
    return (
        <div>
            <Navbar bg="dark">
                <Navbar.Brand href="#home">UserData</Navbar.Brand>
            </Navbar>
        </div>
    );
};

export default Header;