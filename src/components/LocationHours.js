import React, { Component } from 'react';
import Header from './Header';
import Navigation from './Navigation';
import Jumbo from './Jumbo';

import Footer from './Footer';
import aboutPic1 from '../img/homeoffice.jpg';

class LocationHours extends Component {
  render() {
    return (
      <div className="LocationHours">
        <Header />
        <Navigation />
        <Jumbo tagline="SERVICING LANDSCAPES SINCE 1987" />
        <section className="LocationHoursSection">
          <div className="LocationHoursParagraphs">
            <div className="LocationHoursParagraph">
              <h3>Stop By and Say Hello!</h3>
              <br />
              11908 Kemper Rd
              <br />
              Loveland, OH
              <br /> 45140-2413
              <br />
              <br />
              Phone: (513) 200-3498
              <br />
              Fax: (513) 200-3499
              <br />
              <br />
              Hours:
              <br />
              Mon-Fri: 7am-6pm
              <br />
              Sat: 7am-4pm
              <br />
              Sun: 10am-4pm{' '}
            </div>
          </div>
          <img
            src={aboutPic1}
            alt="LocationHours Pic"
            className="LocationHoursPic"
          />
        </section>
        <Footer />{' '}
      </div>
    );
  }
}

export default LocationHours;
