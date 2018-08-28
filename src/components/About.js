import React, { Component } from 'react';
import Header from './Header';
import Navigation from './Navigation';
import Jumbo from './Jumbo';

import Footer from './Footer';
import aboutPic1 from '../img/aboutPic1.jpg';

class About extends Component {
  render() {
    return (
      <div className="About">
        <Header />
        <Navigation />
        <Jumbo tagline="SERVICING LANDSCAPES SINCE 1987" />
        <section className="AboutSection">
          <img src={aboutPic1} alt="About Pic" className="AboutPic" />
          <div className="AboutParagraphs">
            <p className="AboutParagraph">
              We have been installing landscapes in the Greater Cincinnati area
              since 1987, and servicing existing landscapes since 1982.
            </p>
            <p className="AboutParagraph">
              Our company was started by William Glaner at the age of 13 as WDG
              Landscaping that was later changed to TerraFirma to allow
              customers to understand the full capabilities we offer.
            </p>
            <p className="AboutParagraph">
              Since then, the company has grown steadily to the point where we
              now serve customers in the residential and commercial landscaping
              industry. We employ a year-round staff plus a crew of seasonal
              employees.
            </p>
            <p className="AboutParagraph">
              We've replaced our first pickup with a fleet of trailers, trucks,
              and equipment, but the real key to our success is that we are
              still willing and able to do the "hands-on" hard work to meet the
              needs of our customers.
            </p>
          </div>
        </section>
        <Footer />{' '}
      </div>
    );
  }
}

export default About;
