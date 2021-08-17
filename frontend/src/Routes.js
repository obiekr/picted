import React from 'react';
import { Route, useParams } from "react-router-dom";

import ListArticle from './components/ListArticle';
import SingleArticle from './components/SingleArticle';
import Home from './components/Home';
import Login from "./components/Login"

function GetSingleArticle(){
    const { articleID } = useParams()
    return <SingleArticle ID={articleID} />
}

export default function Routes(){
    return(
        <div>
        <Route exact path="/"><Home /></Route>
        <Route exact path="/article"><ListArticle /></Route>
        <Route exact path="/article/:articleID"><GetSingleArticle /></Route>
        <Route exact path="/login"><Login /></Route>
        </div>
    )
}