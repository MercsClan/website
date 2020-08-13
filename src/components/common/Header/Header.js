import React, { Component } from 'react';
import {
  Button,
  Popover,
  PopoverBody,
  ListGroup,
  ListGroupItem,
} from 'reactstrap';

class Header extends Component {
  constructor() {
    super();
    this.state = {
      loginModalOpen: false,
      profileMenuOpen: false,
      activeTab: '1',
    };
    this.toggleLoginModal = this.toggleLoginModal.bind(this);
    this.toggleProfileMenu = this.toggleProfileMenu.bind(this);
  }

  toggleLoginModal() {
    this.setState({
      loginModalOpen: !this.state.loginModalOpen,
    });
  }

  toggleProfileMenu() {
    this.setState({
      profileMenuOpen: !this.state.profileMenuOpen,
    });
  }
  render() {
    return (
      <header className="header header-opaque">
        <div className="contacts-top">
          <div className="container">
            <div className="contacts-left" />
            <div className="contacts-right">
              <ul className="contacts-icons">
                <li>
                  <a href="#">
                    <span className="fa fa-search"></span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span
                      className="fa fa-user"
                      id="userPopover"
                      onClick={this.toggleProfileMenu}
                    ></span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <Popover
          placement="bottom-end"
          isOpen={this.state.profileMenuOpen}
          toggle={this.toggleProfileMenu}
          target="userPopover"
          className="p-0 border-0"
          style={{ minWidth: 250 }}
        >
          <PopoverBody className="p-0 border-dark"></PopoverBody>
        </Popover>
      </header>
    );
  }
}

export default Header;
