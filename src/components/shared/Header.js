import React from "react";
import { Link } from "react-router-dom";
//assets
import Logo from "../../assets/img/logo-mini.png";

export default function Header({ history }) {
  return (
    <nav class="navbar navbar-light bg-light">
      <div class="container">
        <Link to="/" className="navbar-brand navbar-logo">
          <img
            src={Logo}
            alt="Logo"
            class="d-inline-block align-text-top logo"
          />
          Harry Porter
        </Link>
      </div>
    </nav>
  );
}
