import React from 'react';
import {HashRouter as Router, Switch, Route} from 'react-router-dom';
import HomePage from './components/HomePage';
import AboutPage from './components/AboutPage';
import CoachingPage from './components/CoachingPage';
import PhotosPage from './components/PhotosPage';
import VideosPage from './components/VideosPage';
import NHCNav from './components/NHCNav';
import Footer from './components/Footer';
import './style.css';

function App() {
  return (
    <Router>
      <div className="App">
        <NHCNav/>
        <Switch>
          <Route path="/" exact component={HomePage}/>
          <Route path="/about" exact component={AboutPage}/>
          <Route path="/coaching" exact component={CoachingPage}/>
          <Route path="/photos" exact component={PhotosPage}/>
          <Route path="/videos" exact component={VideosPage}/>
        </Switch>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;