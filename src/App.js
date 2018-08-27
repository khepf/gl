import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import Landing from './components/Landing';
import About from './components/About';
import LocationHours from './components/LocationHours';
import Services from './components/Services';


class App extends Component {
  render() {
    return (
      <div className="App">
      <Route exact path="/" component={Landing} />
      <Route path="/about" component={About} />
      <Route path="/location_and_hours" component={LocationHours} />
      <Route path="/services" component={Services} />
      </div>
    );
  }
}

export default App;
