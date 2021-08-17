import React, { useState, useEffect } from 'react';
import { FormControl } from 'react-bootstrap';
import axios from 'axios';

// https://www.youtube.com/watch?v=EmAc4wQikwY
export default function About(){

    const [username, setUsername] = useState("front")
    const [password, setPassword] = useState("front") 


    function postLogin(){
        var loginData = {
            "username": username,
            "password": password,
        }
        const config = {
            headers: {
                "Content-Type": "application/json",
            }
        }
        
        axios.post("/account/api/auth/signin", loginData)
        .then(res=>{
            config.headers["Authorization"] = `Token ${res.data.token}`
        })
        .then(a=>{
            axios.post("/account/api/auth/logout", null, config)
            console.log(config)

        })
        console.log(username)
        
    }
    return(
        <div className="container">
            <h1>this is the login page </h1>
            <button className="btn btn-primary" onClick={postLogin}>Test</button>
        </div>
    )
}