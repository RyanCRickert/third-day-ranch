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
      <header className="header">
        <div className="content-container__header">
          <div className="header__content">
            <div>
            <Link to="/" style={{ textDecoration: 'none' }}>
              <div className={this.state.width >= 830 ? "header__title" : "header__title header-shrink"}>
              {this.state.width >= 830 ? <h1><img className="header__image" src="/images/logo-only.png" /><div className="header__company">Neural Dynamics Technologies LLC</div></h1> : <div className="header-shrunk"><img className="header__image" src="/images/logo-only.png" /><h1><div>Neural</div><div>Dynamics</div><div>Technologies LLC</div></h1></div>}
              </div>
            </Link>
            </div>
            {this.state.width > 700 ?
            <div className="header__buttons">
              <Link to="/" className="header__link" style={{ textDecoration: 'none' }}>
                HOME
              </Link>
              <Link to="/about" className="header__link" style={{ textDecoration: 'none' }}>
                ABOUT
              </Link>
              <Link to="/technology" className="header__link" style={{ textDecoration: 'none' }}>
                TECHNOLOGY
              </Link>
              <Link to="/contact" className="header__link" style={{ textDecoration: 'none' }}>
                CONTACT
              </Link>
            </div>
            :
              <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
              <DropdownToggle caret className="header__dropdown">
                Navigation
              </DropdownToggle>
              <DropdownMenu style={{ zIndex: 1002}}>
                <DropdownItem>
                  <Link to="/" className="header__link" style={{ textDecoration: 'none' }}>
                  HOME
                  </Link>
                </DropdownItem>
                <DropdownItem>
                  <Link to="/about" className="header__link" style={{ textDecoration: 'none' }}>
                  ABOUT
                  </Link>
                </DropdownItem>
                <DropdownItem>
                  <Link to="/technology" className="header__link" style={{ textDecoration: 'none' }}>
                  TECHNOLOGY
                  </Link>
                </DropdownItem>
                <DropdownItem>
                  <Link to="/contact" className="header__link" style={{ textDecoration: 'none' }}>
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