import React from "react";
import { ReactComponent as CartIcon } from "../assets/cart.svg";
import { ReactComponent as TrashIcon } from "../assets/trash.svg";
import { ReactComponent as BackIcon } from "../assets/back.svg";
import { Link } from "react-router-dom";

const Cart = () => {
  return (
    <div className="container container--cart">
      <div className="cart">
        <div className="cart__top">
          <h2 className="content__title">
            <CartIcon />
            Корзина
          </h2>
          <div className="cart__clear">
            <TrashIcon />
            <span>Очистить корзину</span>
          </div>
        </div>
        <div className="content__items"></div>
        <div className="cart__bottom">
          <div className="cart__bottom-details">
            <span>
              Всего пицц: <b> шт.</b>
            </span>
            <span>
              Сумма заказа: <b> ₽</b>
            </span>
          </div>
          <div className="cart__bottom-buttons">
            <Link
              to="/"
              className="button button--outline button--add go-back-btn"
            >
              <BackIcon />
              <span>Вернуться назад</span>
            </Link>
            <div className="button pay-btn">
              <span>Оплатить сейчас</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
