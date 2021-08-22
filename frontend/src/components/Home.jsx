import React, { useState, useEffect } from 'react'

export default function Home(){
    return(
        <div className="container">
            <a href="/login">
                <button className="btn btn-primary">login</button>
            </a>
            <a href="/article">
                <button className="btn btn-success">show article</button>
            </a>
        </div>
    )
}