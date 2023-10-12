import React from "react";
import { ReactComponent as Cart } from "../../assets/cart.svg";
import { ReactComponent as Logo } from "../../assets/logo.svg";
import { Link } from "react-router-dom";
import Search from "../Search/Search";

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <Link to="/">
          <div className="header__logo">
            <Logo />
            <div>
              <h1>Pizza App</h1>
              <p>самая вкусная пицца во вселенной</p>
            </div>
          </div>
        </Link>
        <Search />
        <div className="header__cart">
          <Link to="/Cart" className="button button--cart">
            <span>0 ₽</span>
            <div className="button__delimiter"></div>
            <Cart />
            <span>0</span>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
