import axios from 'axios';
import React, { useState, useEffect } from 'react'
import { Card, CardGroup, Container, Button, NavItem, PageItem } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import "./ListArticle.css"

export default function ListArticle(){
    const [article, setArticle] = useState({});

    function getArticle(){
        axios.get("/api/article").then(response => {
                setArticle(response.data);        
        })
    }



    function displayArticle(item){
        if (item.length > 0){
            let res = article.map(c => {
                if(c.content.length > 180){
                    var content = c.content.substring(0, 180)+"..." 
                }else{
                    var content = c.content
                }
                console.log(c)
                return(
                    <Link to={"/article/" + c.id}>
                        <div class="tile"> 
                            <img src={'https://source.unsplash.com/random?sig='+ c.id} alt="unsplah image"/>
                            <div class="text">
                                <h1>{c.title}.</h1>
                                <h2 class="animate-text">{c.author}</h2>
                                <p class="animate-text">{content}</p>
                            </div>
                        </div> 
                    </Link>              
                )
            })
            return res
        }else{
            return <h2>You don't have any articles</h2>
        }
    }

    useEffect(() => {
        getArticle()
    }, [])
    return(
        <div class="wrap">
            {displayArticle(article)}
        </div>
  


    )
}