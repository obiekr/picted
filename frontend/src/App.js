import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Routes from './Routes';
import { BrowserRouter as Router } from 'react-router-dom';
import GetUser from './GetUser';

// components
import ListArticle from './components/ListArticle';

function App() {

  return (
      <Router>
          <div className="App">
              <Routes />
          </div>
      </Router>
  );
}

export default App;
