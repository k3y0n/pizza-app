import React, { useState } from 'react';
import { ReactComponent as AddOrange } from '../../assets/add-orange.svg';

const Pizza = ({ title, price, imageUrl, sizes, types }) => {
  const [activeType, setActiveType] = useState(types[0]);
  const [activeSize, setActiveSize] = useState(sizes[0]);
  const typeNames = ['тонкое', 'традиционное'];

  return (
    <div className='pizza-wrapper'>
      <div className='pizza-block'>
        <img
          className='pizza-block__image'
          src={imageUrl}
          alt='Pizza'
        />
        <h4 className='pizza-block__title'>{title}</h4>
        <div className='pizza-block__selector'>
          <ul>
            {types.map((typeIndex) => (
              <li
                key={typeIndex}
                className={`${typeIndex === activeType ? 'active' : ''}`}
                onClick={() => setActiveType(typeIndex)}
              >
                {typeNames[typeIndex]}
              </li>
            ))}
          </ul>
          <ul>
            {sizes.map((size) => (
              <li
                key={size}
                onClick={() => setActiveSize(size)}
                className={`${size === activeSize ? 'active' : ''}`}
              >
                {size}см.
              </li>
            ))}
          </ul>
        </div>
        <div className='pizza-block__bottom'>
          <div className='pizza-block__price'>от {price} ₽</div>
          <div className='button button--outline button--add'>
            <AddOrange />
            <span>Добавить</span>
            <i>{0}</i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pizza;
