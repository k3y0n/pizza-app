import React, { useId, useEffect, useState, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setFiltersSort } from "../redux/sort/sortSlice";
import { setFiltersCategory } from "../redux/category/categorySlice";
import { setFiltersPage } from "../redux/page/pageSlice";

import Skeleton from "../components/Pizza/Skeleton";
import Categories from "../components/Categories/Categories";
import Sort from "../components/Sort/Sort";
import PizzaList from "../components/PizzaList/PizzaList";
import Pagination from "../components/Pagination/Pagination";

import qs from "qs";
import { useNavigate } from "react-router-dom";
import { setPizzas, fetchPizza } from "../redux/pizza/pizzaSlice";

const Home = () => {
  const id = useId();
  const [isLoading, setIsLoading] = useState(true);
  const { items: pizzaList, status } = useSelector((state) => state.pizza);
  const navigate = useNavigate();
  const isMounted = useRef(false);

  const currentPage = useSelector((state) => state.page.value);
  const { sort, type } = useSelector((state) => state.sort);
  const categoryId = useSelector((state) => state.category.value);
  const search = useSelector((state) => state.search.value);
  const dispatch = useDispatch();

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

  const skeletons = [...new Array(4)].map((_, i) => <Skeleton key={id + i} />);

  const getData = async () => {
    try {
      setIsLoading(true);
      dispatch(fetchPizza({ currentPage, categoryId, sort, type }));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (isMounted.current) {
      const queryString = qs.stringify({
        sort,
        categoryId,
        currentPage,
      });

      navigate(`?${queryString}`);
    }

    getData();
    setIsLoading(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [categoryId, sort, currentPage, type]);

  useEffect(() => {
    if (window.location.search) {
      const params = qs.parse(window.location.search.substring(1));

      dispatch(setFiltersSort(params.sort));
      dispatch(setFiltersCategory(params.categoryId));
      dispatch(setFiltersPage(params.currentPage));
    }
    isMounted.current = true;

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="container">
      <div className="content__top">
        <Categories />
        <Sort />
      </div>
      {status === "rejected" ? (
        <div className="content__error-info">
          <h2>Произошла ошибка 😕</h2>
          <p>
            К сожалению, не удалось получить пиццы. Попробуйте повторить попытку
            позже.
          </p>
        </div>
      ) : (
        <>
          <h2 className="content__title">{categories[categoryId]} пиццы</h2>
          <div className="content__items">
            {status === "loading" ? skeletons : pizzas}
          </div>
        </>
      )}
      <Pagination />
    </div>
  );
};

export default Home;
