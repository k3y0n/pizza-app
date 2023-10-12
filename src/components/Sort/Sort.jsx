import React, { useState } from "react";
import { ReactComponent as Vector } from "../../assets/vector.svg";
import { useSelector, useDispatch } from "react-redux";
import { setSort } from "../../redux/sort/sortSlice";

const Sort = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [sortBy, setSortBy] = useState("популярности");
  const sortList = [
    { name: "популярности", sort: "rating" },
    { name: "цене", sort: "price" },
    { name: "алфавиту", sort: "title" },
  ];
  const sort = useSelector((state) => state.sort.value);
  const dispatch = useDispatch();

  const onSortBy = (type, sort) => {
    dispatch(setSort(sort));
    setSortBy(type);
    setIsVisible(!isVisible);
  };

  return (
    <div className="sort">
      <div className="sort__label">
        <Vector />
        <b>Сортировка по:</b>
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
