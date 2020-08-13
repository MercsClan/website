import React, { Component } from 'react';
import {
  Collapse,
  Container,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap';

export default class Navigation extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false,
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }

  render() {
    return (
      <div>
        <Navbar
          expand="md"
          className="navbar navbar-top navbar-sticky navbar-autohide"
        >
          <Container>
            <NavbarBrand href="/">
              <img
                src="/images/Wordmark.png"
                className="nav-logo"
                height="80"
                width="199"
              />
            </NavbarBrand>
            <NavbarToggler onClick={this.toggle} className="mr-2" />
            <Collapse isOpen={this.state.isOpen} navbar color="primary">
              <Nav className="ml-auto nav" navbar>
                <NavItem>
                  <NavLink href="/components/">About Us</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="https://discord.gg/rH8Mvr7">Discord</NavLink>
                </NavItem>
                <UncontrolledDropdown nav inNavbar>
                  <DropdownToggle nav caret>
                    Options
                  </DropdownToggle>
                  <DropdownMenu right>
                    <DropdownItem>Option 1</DropdownItem>
                    <DropdownItem>Option 2</DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem>Reset</DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
              </Nav>
            </Collapse>
          </Container>
        </Navbar>
      </div>

      //<nav className="navbar navbar-top navbar-sticky navbar-autohide">
      //<div className="container">
      //<div className="nav-table">
      //<a href="/" className="nav-logo">
      //<img src="/images/Wordmark.png" alt="Mercs Clan" width="199px"/>
      //</a>
      //<ul className="nav nav-right d-none d-lg-table-cell" data-nav-mobile="#nav-mobile">
      // <li><a href="/somewhere">About Us</a></li>
      //</ul>
      //<ul className="nav nav-right nav-icons">
    );
  }
}
