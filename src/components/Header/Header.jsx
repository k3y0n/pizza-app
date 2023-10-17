import React from "react";
import { ReactComponent as Cart } from "../../assets/cart.svg";
import { ReactComponent as Logo } from "../../assets/logo.svg";
import { Link } from "react-router-dom";
import Search from "../Search/Search";
import { useSelector } from "react-redux";

const Header = () => {
  const pizzaItems = useSelector((state) => state.cart.items);
  const totalPrice = useSelector((state) => state.cart.totalPrice);

  const totalPizzas = pizzaItems.reduce(
    (acc, item) => (acc += item.quantity),
    0
  );

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
            <span>{totalPrice} ₽</span>
            <div className="button__delimiter"></div>
            <Cart />
            <span>{totalPizzas}</span>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
