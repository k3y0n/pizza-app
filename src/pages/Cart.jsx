import React, { useEffect } from "react";
import { ReactComponent as CartIcon } from "../assets/cart.svg";
import { ReactComponent as TrashIcon } from "../assets/trash.svg";
import { ReactComponent as BackIcon } from "../assets/back.svg";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  getTotalPrice,
  removeProducts,
  removeProduct,
} from "../redux/cart/cartSlice";
import { CartEmpty } from "../components/CartEmpty/CartEmpty";
import { CartItem } from "../components/CartItem/CartItem";

const Cart = () => {
  const pizzaItems = useSelector((state) => state.cart.items);
  const totalPrice = useSelector((state) => state.cart.totalPrice);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTotalPrice());
  }, [dispatch]);

  if (!pizzaItems.length) {
    return <CartEmpty />;
  }

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
            <span onClick={() => dispatch(removeProducts())}>
              Очистить корзину
            </span>
          </div>
        </div>
        <div className="content__items">
          {pizzaItems.map((pizza) => (
            <CartItem key={pizza.id} {...pizza} />
          ))}
        </div>
        <div className="cart__bottom">
          <div className="cart__bottom-details">
            <span>
              Всего пицц: <b>{pizzaItems.length} шт.</b>
            </span>
            <span>
              Сумма заказа: <b>{totalPrice} ₽</b>
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
