import React, { useState, useEffect } from 'react'
import axios from 'axios';


export default function SingleArticle(props){
    const [article, setArticle] = useState({});

    function getArticle(props){
        axios.get("/api/article/"+props.ID).then(response => {
                setArticle(response.data);        
        })
    }
    
    useEffect(() => {
        getArticle(props);
    }, [props])

    if (!(Object.keys(article).length === 0 && article.constructor === Object)){
        return(
            <article className="post">
                <div>
                    <div className="absolute-bg"></div>
                </div>
                <div className="post__container">
                    <span className="post__category">{article.author}</span>
                    
                    <div className="post__content">
                    <header>
                        <time className="post__time">Jan 22 2017</time>
                        <h1 className="post__header"><h1>{article.title}</h1></h1>
                    </header>
                    
                    <p className="post__text">{article.content}</p>
                    </div>
                    <div className="post__link">
                    </div>
                </div>
            </article>

            // <div className="container">
            //     <h1>{article.title}</h1>
            //     <p>{article.content}</p>
            // </div>
        )
    }else{
        return(
            <div className="container h-100 vh-100 d-flex align-items-center justify-content-center">
                <h2 className="">Sorry, the article you are looking for is not available</h2>
            </div>
        )
    }
}



// find object in array by id:
// function test(article){
//     return article.find(x => x.id === 1)
// }