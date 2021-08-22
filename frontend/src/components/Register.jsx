import React, { useState, useEffect, useRef } from 'react';
import { FormControl, Form, Button, Alert, Collapse } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import axios from 'axios';

// https://www.youtube.com/watch?v=EmAc4wQikwY
export default function Register(props){

    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [rePassword, setRePassword] = useState("");
    const [token, setToken] = useState("");
    
    // Error state
    const [userErrorMsg, setUserErrorMsg] = useState("");
    const [isUserError, setUserIsError] = useState(false);
    const [emailErrorMsg, setEmailErrorMsg] = useState("");
    const [isEmailError, setEmailIsError] = useState(false);
    // const [isError, setIsError] = useState(false);


    function onSubmit(e){
        e.preventDefault();
        setUserIsError(false)
        setEmailIsError(false)
        var registerData = {
            "username": username,
            "email": email,
            "password": password,
        }
        const config = {
            headers: {
                "Content-Type": "application/json",
            }
        }
        if (password === rePassword) {
            axios.post("/account/api/auth/register", registerData)
            .then(res=>{
                if(res.data.token){
                    setToken(res.data.token)
                    localStorage.setItem("token", res.data.token);
                    
                } 
                // if username error
                if(res.data.username){ 
                    setUserIsError(true);
                    setUserErrorMsg(res.data.username[0])
                }
                // if email error
                if(res.data.email){
                    setEmailIsError(true);
                    setEmailErrorMsg(res.data.email[0])
                }
            })
            .catch(err=>{
                console.log(err)
                // setIsError(true)
            })
        }
    }
    return(
        <div className="container">
            <Form>
                <Form.Group className="mb-3">
                    <Form.Label>Username</Form.Label>
                    <Form.Control type="username" placeholder="Username" value={username}
                    onChange={e=>{setUsername(e.target.value)}}/>
                    <Collapse in={isUserError}>
                        <div className="">
                            <Form.Text className="text-danger">
                                {userErrorMsg}
                            </Form.Text>
                        </div>
                    </Collapse>
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="Email" placeholder="Email" value={email}
                    onChange={e=>{setEmail(e.target.value)}}/>
                    <Collapse in={isEmailError}>
                        <div className="">
                            <Form.Text className="text-danger">
                                {emailErrorMsg}
                            </Form.Text>
                        </div>
                    </Collapse>
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" value={password}
                    onChange={e=>{setPassword(e.target.value)}}/>
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" value={rePassword}
                    onChange={e=>{setRePassword(e.target.value)}}/>
                </Form.Group>
                
                <Button className="btn btn-primary me-3" type="submit" onClick={(e)=>{onSubmit(e)}}>
                    Register
                </Button>
                <Link to="/login" className="btn btn-dark">
                    Login
                </Link>
            </Form>
            
        </div>
    )
}