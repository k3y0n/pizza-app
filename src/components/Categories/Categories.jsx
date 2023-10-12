import React, { useId } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setCategory } from "../../redux/category/categorySlice";

const Categories = () => {
  const id = useId();
  const categories = [
    "Все",
    "Мясные",
    "Вегетарианская",
    "Гриль",
    "Острые",
    "Закрытые",
  ];

  const categoryId = useSelector((state) => state.category.value);
  const dispatch = useDispatch();

  return (
    <div className="categories">
      <ul>
        {categories.map((item, i) => (
          <li
            key={id + i}
            onClick={() => dispatch(setCategory(i))}
            className={`${categoryId === i ? "active" : ""}`}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Categories;
