import React from "react";
import scrollToComponent from 'react-scroll-to-component';

export default class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <header className={window.scrollY == 1 ? "header header_shrink" : "header"}>
        <div className="content-container__header">
          <div className="header__content">
            <div>
              <div className="header__title">
                <h1>Neural Dynamics Technologies</h1>
              </div>
            </div>
            <div className="header__buttons">
              <div className="header__link" onClick={() => scrollToComponent(this.props.refs.About, { duration: 1000, ease: "inQuad" })}>
                About Us
              </div>
              <div className="header__link" onClick={() => scrollToComponent(this.props.refs.Large, { duration: 1000, ease: "inQuad" })}>
                Innovative Technology
              </div>
              <div className="header__link" onClick={() => scrollToComponent(this.props.refs.Design, { duration: 1000, ease: "inQuad" })}>
                Custom Designs
              </div>
              <div className="header__link" onClick={() => scrollToComponent(this.props.refs.Contact, { duration: 1000, ease: "inQuad" })}>
                Contact
              </div>
            </div>
          </div>
        </div>
      </header>
    )
  }
}