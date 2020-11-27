import React from 'react';
import styled from 'styled-components';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

const CustomNav = styled.div`

    #nhc-navbar {
    padding: 0.75rem 3rem;
    background-color: #1e2022;
    }

    #nhc-navbar .nhc-brand {
    color: #c9d6df;
    }

    #nhc-navbar .nhc-nav-link {
    color: #c9d6df;
    transition: 0.25s ease;
    }

    #nhc-navbar .nhc-nav-link:hover {
    color: #f0f5f9;
    }

    .nav-link {
    margin: 0 1rem;
    }

    .nhc-title {
    margin: 0 auto;
    }

    .nhc-title h1 {
        font-size: 3rem;
        line-height: 1.5;
    }

`;

function NHCNav() {
    return(
        <CustomNav>
            <Navbar id="nhc-navbar" variant="dark" expand="lg">
                <Navbar.Brand href="/" className="nhc-brand">Nick Hodge</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto nhc-nav-list">
                        <Nav.Link className="nhc-nav-link" href="#about">About</Nav.Link>
                        <Nav.Link className="nhc-nav-link" href="#coaching">Coaching</Nav.Link>
                        <Nav.Link className="nhc-nav-link" href="#photos">Photos</Nav.Link>
                        <Nav.Link className="nhc-nav-link" href="#videos">Videos</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </CustomNav>
    );
}

export default NHCNav;