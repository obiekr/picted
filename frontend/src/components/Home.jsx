import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';
import "./Home.css";

// https://codepen.io/mirandalwashburn/pen/MWawdxr
export default function Home(){
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
        if(isLoading){
            return <h2>Loading...</h2>
        }

        if (article.length > 0){
            let res = article.map((c, index) => {
                if(c.thumbnail){
                    return( 
                        <Link to={"/article/" + c.id} className="card-sm" style={{backgroundImage: 'url(' + c.thumbnail + ')'}}>
                                <p className="card__text-sm">{c.author}</p>
                                <h1 className="card__text-lg">{c.title}</h1>
                        </Link>         
                    )
                }
                return( 
                    <Link to={"/article/" + c.id} className="card-sm" style={{backgroundImage: 'url(' + thumbImg[index].urls.small + ')'}}>
                            <p className="card__text-sm">{c.author}</p>
                            <h1 className="card__text-lg">{c.title}</h1>
                    </Link>         
                )
            })
            return(
                <div className="row">
                    {res}
                </div>
            )
        }else{
            return (
                <div className="">
                    <h2>No article yet</h2>
                </div>
    
            )
        }
    }

    useEffect(()=>{
        getArticle();
    }, [])



    return(
        <div className="home-body">
            <main className="main">
                <div className="d-flex justify-content-center container text-center">
                    <h1 className="title">Picted</h1>
                    <h4 className="subtitle">Picture Education Article</h4>
                </div>
            </main> 
            <div className="container-fluid article-prev" style={{backgroundColor: "#F123F2"}}>
                <h2 className="text-center pt-4 article-text">Article</h2>
                <section className="card-sm__container container pb-4">
                    {renderArticleList()}
                </section>
            </div>
        </div>
    )
}