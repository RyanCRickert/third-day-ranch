import React from "react";
import { Link } from "react-router-dom";
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

export default class Header extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      width: 0,
      height: 0,
      dropdownOpen: false
    };

    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
    this.toggle = this.toggle.bind(this);
  }

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
  }
  
  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }
  
  updateWindowDimensions() {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
  }

  toggle() {
    this.setState(prevState => ({
      dropdownOpen: !prevState.dropdownOpen
    }));
  }

  render() {
    return (
      <header className="landing-header">
        <div className="content-container__header">
          <div className="landing-header__content">
            <div />
            {this.state.width > 700 ?
            <div className="landing-header__buttons">
              <Link to="/about" className="landing-header__link" style={{ textDecoration: 'none' }}>
                ABOUT
              </Link>
              <Link to="/technology" className="landing-header__link" style={{ textDecoration: 'none' }}>
                TECHNOLOGY
              </Link>
              <Link to="/contact" className="landing-header__link" style={{ textDecoration: 'none' }}>
                CONTACT
              </Link>
            </div>
            :
              <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
              <DropdownToggle caret className="landing-header__dropdown">
                Navigation
              </DropdownToggle>
              <DropdownMenu style={{ zIndex: 1002}}>
                <DropdownItem>
                  <Link to="/about" className="landing-header__link" style={{ textDecoration: 'none' }}>
                  ABOUT
                  </Link>
                </DropdownItem>
                <DropdownItem>
                  <Link to="/technology" className="landing-header__link" style={{ textDecoration: 'none' }}>
                  TECHNOLOGY
                  </Link>
                </DropdownItem>
                <DropdownItem>
                  <Link to="/contact" className="landing-header__link" style={{ textDecoration: 'none' }}>
                  CONTACT
                  </Link>
                </DropdownItem>
              </DropdownMenu>
              </Dropdown>
            }
          </div>
        </div>
      </header>
    )
  }
}