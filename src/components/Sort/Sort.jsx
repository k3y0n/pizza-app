import React, { useState } from 'react';
import { ReactComponent as Vector } from '../../assets/vector.svg';

const Sort = ({ sort, handleSort }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [sortBy, setSortBy] = useState('популярности');
  const sortList = [
    { name: 'популярности', sort: 'rating' },
    { name: 'цене', sort: 'price' },
    { name: 'алфавиту', sort: 'title' },
  ];

  const onSortBy = (type, sort) => {
    handleSort(sort);
    setSortBy(type);
    setIsVisible(!isVisible);
  };

  return (
    <div className='sort'>
      <div className='sort__label'>
        <Vector />
        <b>Сортировка по:</b>
        <span onClick={() => setIsVisible(!isVisible)}>{sortBy}</span>
      </div>
      {isVisible && (
        <div className='sort__popup'>
          <ul>
            {sortList.map((item) => (
              <li
                key={item.name}
                className={`${item.sort === sort ? 'active' : ''}`}
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
