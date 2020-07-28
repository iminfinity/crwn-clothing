import React from "react";

import "./contact.styles.scss";
import myface from "../../assets/myface.jpg";
const ContactPage = () => (
  <div className="contact-page">
    <div className="contact-me">
      <img className="myface" alt="Portrait of Suwarna Thapa" src={myface} />
      <div className="contact-info">
        <h2>
          Suwarna Thapa <span> React Developer</span>
        </h2>
        Github:
        <a href="https://github.com/iminfinity" rel="noopener noreferrer">
          https://github.com/iminfinity
        </a>
        <br />
        Linkedin:
        <a
          href="https://www.linkedin.com/in/iminfinity"
          rel="noopener noreferrer"
        >
          https://www.linkedin.com/in/iminfinity
        </a>
        <br />
        Portfolio:
        <a href="https:/www.suwarnathapa.com" rel="noopener noreferrer">
          https:/www.suwarnathapa.com
        </a>
        <br />
      </div>
    </div>
  </div>
);

export default ContactPage;
