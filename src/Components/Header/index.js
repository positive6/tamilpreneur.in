import { Container } from "./style";
import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <Container>
      <div className="title">TAMILPRENEUR</div>
      <div className="links">
        <NavLink
          to="/"
          exact={true}
          activeClassName="is-active"
          activeStyle={{ color: "#ed5863" }}
        >
          HOME
        </NavLink>
        <NavLink
          to="/blog"
          activeClassName="is-active"
          activeStyle={{ color: "#ed5863" }}
        >
          BLOG
        </NavLink>
        <NavLink
          to="/podcast"
          activeClassName="is-active"
          activeStyle={{ color: "#ed5863" }}
        >
          PODCAST
        </NavLink>
        <NavLink
          to="/contacts"
          activeClassName="is-active"
          activeStyle={{ color: "#ed5863" }}
        >
          CONTACTS
        </NavLink>
      </div>
    </Container>
  );
};

export default Header;
