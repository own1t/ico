import React from "react";

import { Link as LinkRouter } from "react-router-dom";

import ShopIcon from "@material-ui/icons/Shop";
import PaymentIcon from "@material-ui/icons/Payment";
import ListAltIcon from "@material-ui/icons/ListAlt";
import SupervisedUserCircleIcon from "@material-ui/icons/SupervisedUserCircle";

const Header = () => {
  return (
    <nav className="header">
      <div className="header__container">
        <ul className="header__menu">
          <li className="header__items">
            <LinkRouter to="/" className="header__links">
              <PaymentIcon className="header__icons" />
            </LinkRouter>
          </li>
          <li className="header__items">
            <LinkRouter to="/whitelist" className="header__links">
              <ListAltIcon className="header__icons" />
            </LinkRouter>
          </li>
          <li className="header__items">
            <LinkRouter to="/admin" className="header__links">
              <SupervisedUserCircleIcon className="header__icons" />
            </LinkRouter>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
