import React, { useState, useEffect, useReducer } from 'react';
import { BrowserRouter as Router, Route, useParams } from 'react-router-dom';
import useToken from './useToken';

import ListArticle from './components/ListArticle';
import SingleArticle from './components/SingleArticle';
import Home from './components/Home';
import Login from "./components/Login"
import Register from './components/Register';

function GetSingleArticle(){
    const { articleID } = useParams()
    return <SingleArticle ID={articleID} />
}


function App() {
    const [universalToken, setUniversalToken] = useState("");

    return (
            <Router>
                <Route exact path="/"><Home token={universalToken}/></Route>
                <Route exact path="/article"><ListArticle token={universalToken}/></Route>
                <Route exact path="/article/:articleID"><GetSingleArticle token={universalToken}/></Route>
                <Route exact path="/login"><Login setUniversalToken={setUniversalToken}/></Route>
                <Route exact path="/register"><Register setUniversalToken={setUniversalToken}/></Route>
            </Router>
        );
    
}

export default App;
