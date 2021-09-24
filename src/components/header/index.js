import React from "react";
import { NavLink } from "react-router-dom";

import style from "./style.module.scss";

const Header = () => {
  return (
    <div className={style.header__container}>
      <div className={style.nav__container}>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/contact">Contact</NavLink>
        <NavLink to="/people">People</NavLink>
      </div>
    </div>
  );
};

export default Header;
