import React, { useEffect, useRef, useState } from "react";
import { ReactComponent as Vector } from "../../assets/vector.svg";
import { useSelector, useDispatch } from "react-redux";
import { setSort, setType } from "../../redux/sort/sortSlice";

const Sort = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [sortBy, setSortBy] = useState("популярности");

  const sortRef = useRef();

  const sortList = [
    { name: "популярности", sort: "rating" },
    { name: "цене", sort: "price" },
    { name: "алфавиту", sort: "title" },
  ];

  const { sort, type } = useSelector((state) => state.sort);
  const dispatch = useDispatch();

  const order = type === "asc" ? "desc" : "asc";

  const onSortBy = (type, sort) => {
    dispatch(setSort(sort));
    setSortBy(type);
    setIsVisible(!isVisible);
  };

  const orderClassName = type === "asc" ? "asc" : "desc";

  useEffect(() => {
    const closePopup = (event) => {
      if (!sortRef.current.contains(event.target)) {
        setIsVisible(false);
      }
    };
  
    document.body.addEventListener("click", closePopup);
  
    return () => {
      document.body.removeEventListener("click", closePopup);
    };
  }, []);
  

  return (
    <div ref={sortRef} className="sort">
      <div className="sort__label">
        <Vector
          onClick={() => dispatch(setType(order))}
          className={`sort__icon sort__icon-${orderClassName}`}
        />
        <b onClick={() => dispatch(setType(order))} className="sort__type">
          Сортировка по:
        </b>
        <span onClick={() => setIsVisible(!isVisible)}>{sortBy}</span>
      </div>
      {isVisible && (
        <div className="sort__popup">
          <ul>
            {sortList.map((item) => (
              <li
                key={item.name}
                className={`${item.sort === sort ? "active" : ""}`}
                onClick={() => onSortBy(item.name, item.sort)}
              >
                {item.name}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Sort;
