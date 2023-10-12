import React, { useId, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Skeleton from "../components/Pizza/Skeleton";
import Categories from "../components/Categories/Categories";
import Sort from "../components/Sort/Sort";
import PizzaList from "../components/PizzaList/PizzaList";
import Pagination from "../components/Pagination/Pagination";
import axios from "axios";

const Home = () => {
  const id = useId();
  const [isLoading, setIsLoading] = useState(true);
  const [pizzaList, setPizzaList] = useState([]);

  const currentPage = useSelector((state) => state.page.value);
  const { sort, type } = useSelector((state) => state.sort);
  const categoryId = useSelector((state) => state.category.value);
  const search = useSelector((state) => state.search.value);

  const categories = [
    "Все",
    "Мясные",
    "Вегетарианская",
    "Гриль",
    "Острые",
    "Закрытые",
  ];

  const pizzas = (
    <PizzaList
      pizzaList={pizzaList.filter((item) =>
        item.title.toLocaleLowerCase().includes(search.toLocaleLowerCase())
          ? item
          : null
      )}
    />
  );
  const skeletons = [...new Array(10)].map((_, i) => <Skeleton key={id + i} />);

  const getData = async () => {
    setIsLoading(true);
    const response = await axios.get(
      `https://651124e6829fa0248e3f8e9e.mockapi.io/items?page=${currentPage}&limit=4&${
        categoryId === 0 ? "" : `category=${categoryId}`
      }&sortBy=${sort}&order=${type}`
    );
    const data = await response.data;
    setPizzaList(data);
  };

  useEffect(() => {
    getData();
    setIsLoading(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [categoryId, sort, currentPage, type]);

  return (
    <div className="container">
      <div className="content__top">
        <Categories />
        <Sort />
      </div>
      <h2 className="content__title">{categories[categoryId]} пиццы</h2>
      <div className="content__items">{isLoading ? skeletons : pizzas}</div>
      <Pagination />
    </div>
  );
};

export default Home;
