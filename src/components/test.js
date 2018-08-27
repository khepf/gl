<div className="Navigation">
<Navbar color="light" light expand="md">
  <NavbarBrand href="/">reactstrap</NavbarBrand>
  <NavbarToggler onClick={this.toggle} />
  <Collapse isOpen={this.state.isOpen} navbar>
    <Nav className="ml-auto Nav" navbar>
      <NavItem className="NavItem">
        <NavLink href="#" className="NavLink">HOME</NavLink>
      </NavItem>
      <NavItem className="NavItem">
        <NavLink href="https://github.com/reactstrap/reactstrap" className="NavLink">ABOUT US</NavLink>
      </NavItem>
      <UncontrolledDropdown nav inNavbar>
        <DropdownToggle nav caret>
          OUR SERVICES
        </DropdownToggle>
        <DropdownMenu right>
          <DropdownItem>
            Option 1
          </DropdownItem>
          <DropdownItem>
            Option 2
          </DropdownItem>
          <DropdownItem divider />
          <DropdownItem>
            Reset
          </DropdownItem>
        </DropdownMenu>
      </UncontrolledDropdown>
      <NavItem className="NavItem">
        <NavLink href="#"  className="NavLink">LOCATION/HOURS</NavLink>
      </NavItem>
      <NavItem className="NavItem">
        <NavLink href="#"  className="NavLink">PLACE AN ORDER</NavLink>
      </NavItem>
    </Nav>
  </Collapse>
</Navbar>
</div>