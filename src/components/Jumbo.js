import React, { Component } from 'react';
import { Jumbotron, Container } from 'reactstrap';

class Jumbo extends Component {
  render() {
    return ( 
    <div className="Jumbo"> <Jumbotron className="JumboTron" fluid>
    <Container fluid>
      <h1 className="display-3 JumboText">{this.props.tagline}</h1>
      
    </Container>
  </Jumbotron></div>
  );
  }
}

export default Jumbo;