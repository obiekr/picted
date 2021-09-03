import axios from 'axios';
import React, { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom';
import "./ListArticle.css"

export default function ListArticle(){
    const [article, setArticle] = useState({});
    const [thumbImg, setThumbImg] = useState([]);
    const [isLoading, setLoading] = useState(true);


    function getArticle(){

        axios.get("/api/article").then(response => {
            setArticle(response.data);   
            var config ={
                headers: {
                    "Accept-Version": "v1",
                    "Authorization": "Client-ID b_oOP9fLWgawnVSEWkoWlHMzoGD7J3uOk4DLp8u9E0w",
                },
                params: {
                    "count": response.data.length,
                    "orientation": "squarish",
                }
            }          
            return axios.get("https://api.unsplash.com/photos/random", config) 
        }).then(response => {
            setThumbImg(response.data);
            setLoading(false);
        })
    }

    function renderArticleList(){
        if (article.length > 0){
            let res = article.map((c, index) => {
                var content = "";
                console.log(thumbImg[index].urls.full)
                if(c.content.length > 180){
                    content = c.content.substring(0, 180)+"..." 
                }else{
                    content = c.content
                }
                return(
                    
                    <Link to={"/article/" + c.id}>
                        <div class="tile"> 
                            {/* <img src={'https://source.unsplash.com/random?sig='+ c.id} alt="unsplah image"/> */}
                            <img src={thumbImg[index].urls.full} alt="unsplah"/>
                            <div class="text">
                                <h1>{c.title}.</h1>
                                <h2 class="animate-text">{c.author}</h2>
                                <p class="animate-text">{content}</p>
                            </div>
                        </div> 
                    </Link>         
                )
            })
            return(
                <div className="wrap container">
                    {res}
                </div>
            )
        }else{
            return (
                <div class="wrap">
                    <h2>You don't have any articles</h2>
                </div>
    
            )
        }
    }

    useEffect(() => {
        getArticle()
    }, [])
    if(isLoading){
        return (
            <div className="container text-center" style={{padding: "40vh"}}>
                <h1>Loading...</h1>
            </div>
        )
    }else{
        return renderArticleList()
    }

    
    
}