import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'

export default function NavbarMenu() {
    return (
        <Navbar bg='primary' expand='lg' variant='dark'>
            <Navbar.Brand href='#'>TPMAnnotation</Navbar.Brand>
            <Navbar.Toggle aria-controls='basic-navbar-nav' />
            <Navbar.Collapse id='basic-navbar-nav'>
                <Nav className='mr-auto'>
                    <Nav.Link href='/'>Home</Nav.Link>
                    <Nav.Link href='/'>Logout</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}