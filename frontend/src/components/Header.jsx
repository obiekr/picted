import React, { useState } from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap'
import axios from 'axios';


function renderRightButton(){
    return(
        
        <Nav>
            <Nav.Link href="#deets">More deets</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">Dank memes</Nav.Link>
        </Nav>
    )
}

export default function Header(){
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const token = localStorage.getItem("token");

    const config = {
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Token ${token}`
        }
    };
    
    axios.get("/account/api/auth/user", config)
    .then(res=>{
        console.log(res)
        }
    )

    return(
        <div className="header">
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="/">Navbar</Navbar.Brand>
                        <Nav className="me-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/article">Articles</Nav.Link>
                        <Nav.Link href="/about">About Us</Nav.Link>
                    </Nav>
                    {}
                </Container>
            </Navbar>
        </div>
    )
}