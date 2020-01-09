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
            <div className="header__buttons">
              <Link to="/" className="header__link" style={{ textDecoration: 'none' }}>
                Home
              </Link>
              <Link to="/who" className="header__link" style={{ textDecoration: 'none' }}>
                Who We Are
              </Link>
              <div>
                <img className="header__image" src="/images/logo.png" />
              </div>
              <Link to="/for-sale" className="header__link" style={{ textDecoration: 'none' }}>
                For Sale
              </Link>
              <Link to="/contact" className="header__link" style={{ textDecoration: 'none' }}>
                Contact
              </Link>
            </div>
          </div>
        </div>
      </header>
    )
  }
}