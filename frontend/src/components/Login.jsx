import React, { useState, useEffect, useRef } from 'react';
import { FormControl, Form, Button, Collapse } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import axios from 'axios';

// https://www.youtube.com/watch?v=EmAc4wQikwY
export default function Login({setUniversalToken}){

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    // const [token, setToken] = useState("");
    // error state
    const [userErrorMsg, setUserErrorMsg] = useState("");
    const [isUserError, setUserIsError] = useState(false);
    const [passwordErrorMsg, setPasswordErrorMsg] = useState("");
    const [isPasswordError, setIsPasswordError] = useState(false);
    const [invalidCredentialsMsg, setInvalidCredentialsMsg] = useState("");
    const [isInvalidCredentials, setIsInvalidCredentials] = useState(false);
    // const [isError, setIsError] = useState(false);

    function onSubmit(e){
        e.preventDefault();
        setUserIsError(false);
        setIsPasswordError(false);
        setIsInvalidCredentials(false);
        var loginData = {
            "username": username,
            "password": password,
        };
        const config = {
            headers: {
                "Content-Type": "application/json",
            }
        };
        
        axios.post("/account/api/auth/signin", loginData)
        .then(res=>{
            console.log(res)
            if(res.data.token){
                config.headers["Authorization"] = `Token ${res.data.token}`;
                setUniversalToken(res.data.token);
                localStorage.setItem("token", res.data.token);
            }
            if(res.data.username){
                setUserIsError(true)
                setUserErrorMsg(res.data.username[0])
            }
            if(res.data.password){
                setIsPasswordError(true)
                setPasswordErrorMsg(res.data.username[0])
            }
            if(res.data.non_field_errors){
                setIsInvalidCredentials(true)
                setInvalidCredentialsMsg(res.data.non_field_errors[0])
            }
        })
        .catch(err=>{
            console.log(err)
        })
        
    }
    return(
        <div className="container">
            <Collapse in={isInvalidCredentials}>
                <div className="">
                    <h3 className="text-danger">
                        {invalidCredentialsMsg}
                    </h3>
                </div>
            </Collapse>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label><h5>Username</h5></Form.Label>
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

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label><h5>Password</h5></Form.Label>
                    <Form.Control type="password" placeholder="Password" value={password}
                    onChange={e=>{setPassword(e.target.value)}}/>
                    <Collapse in={isPasswordError}>
                        <div className="">
                            <Form.Text className="text-danger">
                                {passwordErrorMsg}
                            </Form.Text>
                        </div>
                    </Collapse>
                </Form.Group>
                
                <Button className="btn btn-primary me-3" type="submit" onClick={(e)=>{onSubmit(e)}}>
                    Log In
                </Button>
                <Link to="/register" className="btn btn-dark">
                    Register
                </Link>
            </Form>
            
        </div>
    )
}