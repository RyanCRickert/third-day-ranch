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
                HOME
              </Link>
              <Link to="/about" className="header__link" style={{ textDecoration: 'none' }}>
                ABOUT
              </Link>
              <div>
                Third Day Farm and Ranch
              </div>
              <Link to="/technology" className="header__link" style={{ textDecoration: 'none' }}>
                TECHNOLOGY
              </Link>
              <Link to="/contact" className="header__link" style={{ textDecoration: 'none' }}>
                CONTACT
              </Link>
            </div>
          </div>
        </div>
      </header>
    )
  }
}