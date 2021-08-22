import React, { useState } from 'react'
import { Navbar, Nav, Container, Button } from 'react-bootstrap'
import axios from 'axios';




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
        setIsLoggedIn(true);
        return res.data
        })
    
    
    function renderRightButton(){
        if(isLoggedIn){
            return(
                <Nav className="me-auto">
                    <Nav.Link href="/"></Nav.Link>
                    <Button className="nav-link">Log Out</Button>
                </Nav>
            )
        }else{
            return(
                <Nav className="me-auto">
                    <Nav.Link href="/login">Log In</Nav.Link>
                    <Nav.Link href="/register">Register</Nav.Link>
                </Nav>
            )
        }
    }
    

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
                    {renderRightButton()}
                </Container>
            </Navbar>
        </div>
    )
}