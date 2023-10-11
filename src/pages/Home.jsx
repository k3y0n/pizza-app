import React, { useId, useEffect, useState } from 'react';
import Skeleton from '../components/Pizza/Skeleton';
import Categories from '../components/Categories/Categories';
import Sort from '../components/Sort/Sort';
import PizzaList from '../components/PizzaList/PizzaList';
import Pagination from '../components/Pagination';

const Home = ({ search }) => {
  const id = useId();
  const [isLoading, setIsLoading] = useState(true);
  const [pizzaList, setPizzaList] = useState([]);
  const [categoryId, setCategoryId] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [sort, setSort] = useState('rating');
  const categories = [
    'Все',
    'Мясные',
    'Вегетарианская',
    'Гриль',
    'Острые',
    'Закрытые',
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
    const response = await fetch(
      `https://651124e6829fa0248e3f8e9e.mockapi.io/items?page=${currentPage}&limit=4&${
        categoryId === 0 ? '' : `category=${categoryId}`
      }&sortBy=${sort}`
    );
    const data = await response.json();
    setPizzaList(data);
  };

  useEffect(() => {
    getData();
    setIsLoading(false);
  }, [categoryId, sort, currentPage]);

  return (
    <div className='container'>
      <div className='content__top'>
        <Categories
          categoryId={categoryId}
          handleCategory={(id) => setCategoryId(id)}
        />
        <Sort
          sort={sort}
          handleSort={(item) => setSort(item)}
        />
      </div>
      <h2 className='content__title'>{categories[categoryId]} пиццы</h2>
      <div className='content__items'>{isLoading ? skeletons : pizzas}</div>
      <Pagination
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
      />
    </div>
  );
};

export default Home;
