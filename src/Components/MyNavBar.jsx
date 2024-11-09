import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';


function MyNavBar(props) {
    const [isChecked, setIsChecked] = useState(true);

    const handleSwitchChange = (event) => {
        setIsChecked(event.target.checked);
        props.onSwitchChange();

    };
    return (
        <div className='bg-dark'>
            <Navbar expand="lg" bg="dark" data-bs-theme="dark" className="bg-body-tertiary">
                <Container fluid>
                    <Navbar.Brand href="#">React-Bootstrap</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#">Home</Nav.Link>
                            {/* <Nav.Link href="#link">About Me</Nav.Link> */}

                        </Nav>
                        <span className='text-white me-3'>Under 18</span>
                        <Form.Check // prettier-ignore
                            type="switch"
                            id="custom-switch"
                            bg="dark" data-bs-theme="dark"
                            className='text-white'
                            checked={isChecked}
                            onChange={handleSwitchChange}

                        />
                        <span className='text-white me-3'>Above 18</span>

                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default MyNavBar
