import React, { useId } from 'react';

const Categories = ({ categoryId, handleCategory }) => {
  const id = useId();
  const categories = [
    'Все',
    'Мясные',
    'Вегетарианская',
    'Гриль',
    'Острые',
    'Закрытые',
  ];

  return (
    <div className='categories'>
      <ul>
        {categories.map((item, i) => (
          <li
            key={id + i}
            onClick={() => handleCategory(i)}
            className={`${categoryId === i ? 'active' : ''}`}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Categories;
