import React from "react";
import logo from "../../../logo.svg";
import "./__style.scss";

const header = () => (
  <header>
    <img src={logo} className="app-logo" alt="mobile.de" title="mobile.de" />
    <p>Deutschlands größter Fahrzeugmarkt</p>
  </header>
);
export default header;
