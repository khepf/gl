import React, { Component } from 'react';
import { Card, CardTitle, CardImg, CardImgOverlay, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';
import landscaping from '../img/landscaping.jpg';
import demolition from '../img/demolition.jpg';
import hauling from '../img/hauling.jpg';

class Cards extends Component {
  render() {
    return (
      <div className="Cards">
        <NavLink to="/services" className="NavLink" tag={Link}>
          <Card className="Card Landscaping" inverse>
            <CardImg src={landscaping} width="100%" alt="Card image cap" />
            <CardImgOverlay>
              <CardTitle className="CardTitle">LANDSCAPING</CardTitle>
            </CardImgOverlay>
          </Card>
        </NavLink>
        <NavLink to="/services" className="NavLink" tag={Link}>
          <Card className="Card " inverse>
            <CardImg width="100%" src={demolition} alt="Card image cap" />
            <CardImgOverlay>
              <CardTitle className="CardTitle">DEMOLITION</CardTitle>
            </CardImgOverlay>
          </Card>
        </NavLink>
        <NavLink to="/services" className="NavLink" tag={Link}>
          <Card className="Card" inverse>
            <CardImg width="100%" src={hauling} alt="Card image cap" />
            <CardImgOverlay>
              <CardTitle className="CardTitle">HAULING</CardTitle>
            </CardImgOverlay>
          </Card>
        </NavLink>
      </div>
    );
  }
}

export default Cards;
