import React, { Component } from 'react';
import { BrowserRouter as Router,
  Route,
  Link } from "react-router-dom";
import Navbar from './components/Navbar';
import Accueil from './contents/Accueil';
import Apropos from './contents/Apropos';
import Competences from './contents/Competences';
import Contact from './contents/Contact';
import Experiences from './contents/Experiences';
import Formation from './contents/Formation';
import Realisation from './contents/Realisation';

import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Route exact path="/" >
          <Accueil />
        </Route>

        <Route path="/apropos" >
          <Apropos />
        </Route>

        <Route path="/competences" >
          <Competences />
        </Route>

        <Route path="/experiences" >
          <Experiences />
        </Route>

        <Route path="/formation" >
          <Formation />
        </Route>

        <Route path="/realisations" >
          <Realisation />
        </Route>

        <Route path="/contact" >
          <Contact />
        </Route>

      </div>
    </Router>
  );
}

export default App;
