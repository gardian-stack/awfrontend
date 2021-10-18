import React from 'react';
import Navbar from './components/navbar/Navbar';
import './App.css';
import FNB from './components/food/index';
import Healt from './components/healt/index';
import Home from './components/home/index';
import Product from './components/food/product';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
          <Route path="/home"><Home /></Route>
          <Route path="/food"><FNB /></Route>
          <Route path="/health"><Healt /></Route>
          <Route path="/product/:id"><Product /></Route>
      </Switch>
    </Router>
  );
  function BlogPosts() {
    return (
      <div>
        <Home />
        <FNB />
        <Healt />
      </div>
    );
  }
}

export default App;