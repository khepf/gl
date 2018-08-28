import React, { Component } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from 'reactstrap';
import { Link } from 'react-router-dom';

class Navigation extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div className="Navigation">
        <Navbar dark expand="md">
          <NavbarToggler onClick={this.toggle} className="NavbarToggler" />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto Nav" navbar>
              <NavItem className="NavItem">
                <NavLink to="/" className="NavLink" tag={Link}>
                  HOME
                </NavLink>
              </NavItem>
              <NavItem className="NavItem">
                <NavLink to="/about" className="NavLink" tag={Link}>
                  ABOUT US
                </NavLink>
              </NavItem>
              <UncontrolledDropdown
                className="UncontrolledDropdown"
                nav
                inNavbar
              >
                <DropdownToggle className="DropdownToggle" nav caret>
                  OUR SERVICES
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem
                    to="/services"
                    tag={Link}
                    className="DropdownItem"
                  >
                    LANDSCAPING
                  </DropdownItem>
                  <DropdownItem
                    to="/services"
                    tag={Link}
                    className="DropdownItem"
                  >
                    DEMOLITION
                  </DropdownItem>

                  <DropdownItem
                    to="/services"
                    tag={Link}
                    className="DropdownItem"
                  >
                    HAULING
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
              <NavItem className="NavItem">
                <NavLink
                  to="/location_and_hours"
                  className="NavLink"
                  tag={Link}
                >
                  LOCATION/HOURS
                </NavLink>
              </NavItem>
              <NavItem className="NavItem">
                <NavLink
                  href="https://docs.google.com/forms/d/1cpPw-0eEZ_3iWxFt02Mm9ygkQJRC6J5ZvHUSRZWzU6g"
                  target="_blank"
                  className="NavLink"
                >
                  PLACE AN ORDER
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

export default Navigation;
