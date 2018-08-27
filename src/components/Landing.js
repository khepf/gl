import React, { Component } from 'react';
import Header from './Header';
import Navigation from './Navigation';
import Jumbo from './Jumbo';
import Cards from './Cards';
import Footer from './Footer';

class Landing extends Component {
  render() {
    return ( 
    <div className="Landing">
    <Header />
      <Navigation />
      <Jumbo tagline="AT GLANER, THE GRASS IS ALWAYS GREENER" />
      <Cards />
      <Footer /> </div>
  );
  }
}

export default Landing;