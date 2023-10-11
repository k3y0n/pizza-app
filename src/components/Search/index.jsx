import React, { useEffect } from 'react';
import styles from './Search.module.scss';
import { ReactComponent as BsSearch } from 'bootstrap-icons/icons/search.svg';
import { ReactComponent as Close } from 'bootstrap-icons/icons/x-circle.svg';

const Search = ({ search, setSearch }) => {
  useEffect(() => {}, [search]);
  return (
    <div className={styles.search}>
      <input
        className={styles.search__input}
        value={search}
        type='text'
        placeholder='search pizza...'
        onChange={(e) => setSearch(e.target.value)}
      ></input>
      <BsSearch className={styles.search__icon_search} />
      {search && (
        <Close
          className={styles.search__icon_close}
          onClick={() => setSearch('')}
        />
      )}
    </div>
  );
};

export default Search;
