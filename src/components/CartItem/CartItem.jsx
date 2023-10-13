import React from "react";
import { useDispatch } from "react-redux";
import {
  addQuantity,
  removeProduct,
  subtractQuantity,
} from "../../redux/cart/cartSlice";
import { ReactComponent  as MinusIcon } from "../../assets/minus.svg";
import { ReactComponent  as PlusIcon } from "../../assets/plus.svg";
import { ReactComponent  as RemoveIcon } from "../../assets/remove.svg";

export const CartItem = ({ id, title, type, size, price, count, imageUrl }) => {
  const dispatch = useDispatch();

  const onClickAdd = () => {
    dispatch(
      addQuantity({
        id,
      })
    );
  };

  const onClickSubtract = () => {
    dispatch(subtractQuantity(id));
  };

  const onClickRemove = () => {
    if (window.confirm("Вы действительно хотите удалить товар?")) {
      dispatch(removeProduct(id));
    }
  };

  return (
    <div className="cart__item">
      <div className="cart__item-img">
        <img className="pizza-block__image" src={imageUrl} alt="Pizza" />
      </div>
      <div className="cart__item-info">
        <h3>{title}</h3>
        <p>
          {type}, {size} см.
        </p>
      </div>
      <div className="cart__item-count">
        <button
          disabled={count === 1}
          onClick={onClickSubtract}
          className="button button--outline button--circle cart__item-count-minus"
        >
          <MinusIcon />
        </button>
        <b>{count}</b>
        <button
          onClick={onClickAdd}
          className="button button--outline button--circle cart__item-count-plus"
        >
          <PlusIcon />
        </button>
      </div>
      <div className="cart__item-price">
        <b>{price * count} ₽</b>
      </div>
      <div className="cart__item-remove">
        <div
          onClick={onClickRemove}
          className="button button--outline button--circle"
        >
          <RemoveIcon />
        </div>
      </div>
    </div>
  );
};
