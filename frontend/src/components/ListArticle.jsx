import axios from 'axios';
import React, { useState, useEffect } from 'react'
import { Card, CardGroup, Container, Button, NavItem, PageItem } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';

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
                return(
                    <Card key={c.id} style={{margin: "1em"}}>
                        <Card.Img variant="top" src="holder.js/100px160" />
                        <Link to={"./article/"+c.id}>
                            <Card.Body>
                                <Card.Title>{c.title}</Card.Title>
                                <Card.Text>{c.content}</Card.Text>
                            </Card.Body>
                        </Link>
                        <Card.Footer>
                        <small className="text-muted">{c.author}</small>
                        </Card.Footer>
                    </Card>                 
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
        
        <Container className="center">
            <CardGroup>
            {displayArticle(article)}
            </CardGroup>
        </Container>
    )
}