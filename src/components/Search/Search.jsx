import React, { useEffect } from "react";
import styles from "./Search.module.scss";
import { ReactComponent as BsSearch } from "bootstrap-icons/icons/search.svg";
import { ReactComponent as Close } from "bootstrap-icons/icons/x-circle.svg";
import { useSelector, useDispatch } from "react-redux";
import { setSearch } from "../../redux/search/searchSlice";

const Search = () => {
  const search = useSelector((state) => state.search.value);
  const dispatch = useDispatch();

  useEffect(() => {}, [search]);

  return (
    <div className={styles.search}>
      <input
        className={styles.search__input}
        value={search}
        type="text"
        placeholder="search pizza..."
        onChange={(e) => dispatch(setSearch(e.target.value))}
      ></input>
      <BsSearch className={styles.search__icon_search} />
      {search && (
        <Close
          className={styles.search__icon_close}
          onClick={() => dispatch(setSearch(""))}
        />
      )}
    </div>
  );
};

export default Search;
