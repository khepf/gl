import React, { Component } from 'react';
import {
  Card,
  CardTitle,
  CardText,
  CardImg,
  CardImgOverlay,
  NavLink
} from 'reactstrap';
import { Link } from 'react-router-dom';
import Header from './Header';
import Navigation from './Navigation';
import Jumbo from './Jumbo';
import Cards from './Cards';
import Footer from './Footer';
import servicesLandscaping from '../img/services-landscaping.jpg';
import servicesDemolition from '../img/services-demolition.jpg';
import servicesHauling from '../img/services-hauling.jpg';

class Services extends Component {
  render() {
    return (
      <div className="Services">
        <Header />
        <Navigation />
        <Jumbo tagline="SERVICING LANDSCAPES SINCE 1987" />
        <section className="ServicesSection">
          <div className="LandRow" />

          <a
            href="https://docs.google.com/forms/d/1cpPw-0eEZ_3iWxFt02Mm9ygkQJRC6J5ZvHUSRZWzU6g"
            target="_blank"
          >
            <Card className="Card" inverse>
              <CardImg
                width="100%"
                src={servicesLandscaping}
                alt="Card image cap"
              />
              <CardImgOverlay>
                <CardTitle className="CardTitle">LANDSCAPING</CardTitle>
                <CardText className="CardText"> </CardText>
              </CardImgOverlay>
            </Card>
          </a>

          <ul>
            <li>Spring and Fall Clean Up</li>
            <li>Weeding Flower Beds</li>
            <li>Sprinkler Start Up and Repair</li>
            <li>Regular Yard Maintenance</li>
            <li>Rain Gutter Cleaning</li>
            <li>Soil and Mulch Installation</li>
            <li>Lawn Aeration </li>
            <li>Hedging and Pruning</li>
            <li>Lawn Fertilization </li>
            <li>Weekly Mowing, Trimming and Edging</li>
          </ul>
        </section>
        <section className="ServicesSection ServicesSectionDemo">
          <p className="DemolitionPara">
            Demolition destroys a building and the valuable, reusable materials
            inside. Pre-demolition puts money in your pocket and helps you "go
            green".
            <br /> In as little as 1 day, our rapid-salvage crews reclaim
            cabinets, appliances, fixtures, flooring, and more
            <br /> Reduce your disposal costs, prolong our landfills, and put
            material in the hands of people who need them.
            <br /> Contact us today for more information and a no-obligation
            walk-through!
          </p>
          <a
            href="https://docs.google.com/forms/d/1cpPw-0eEZ_3iWxFt02Mm9ygkQJRC6J5ZvHUSRZWzU6g"
            target="_blank"
          >
            <Card className="Card" inverse>
              <CardImg
                width="100%"
                src={servicesDemolition}
                alt="Card image cap"
              />
              <CardImgOverlay>
                <CardTitle className="CardTitle">DEMOLITION</CardTitle>
                <CardText className="CardText"> </CardText>
              </CardImgOverlay>
            </Card>
          </a>
        </section>
        <section className="ServicesSection">
          <a
            href="https://docs.google.com/forms/d/1cpPw-0eEZ_3iWxFt02Mm9ygkQJRC6J5ZvHUSRZWzU6g"
            target="_blank"
          >
            <Card className="Card" inverse>
              <CardImg
                width="100%"
                src={servicesHauling}
                alt="Card image cap"
              />
              <CardImgOverlay>
                <CardTitle className="CardTitle">HAULING</CardTitle>
                <CardText className="CardText"> </CardText>
              </CardImgOverlay>
            </Card>
          </a>

          <p className="HaulingPara">
            We deliver and haul off bulk materials: Topsoil, Gravel, Decorative
            Rock, and Patio Stone.
          </p>
        </section>
        <Footer />{' '}
      </div>
    );
  }
}

export default Services;
