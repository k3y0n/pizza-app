import React, { useEffect, useRef, useCallback, useState } from "react";
import styles from "./Search.module.scss";
import { ReactComponent as BsSearch } from "bootstrap-icons/icons/search.svg";
import { ReactComponent as Close } from "bootstrap-icons/icons/x-circle.svg";
import { useDispatch } from "react-redux";
import { setSearch } from "../../redux/search/searchSlice";
import debounce from "lodash.debounce";

const Search = () => {
  const [searchValue, setSearchValue] = useState("");

  const dispatch = useDispatch();

  const searchRef = useRef();

  useEffect(() => {}, [searchValue]);

  const clearSearch = () => {
    dispatch(setSearch(""));
    setSearchValue("");
    searchRef.current.focus();
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const updateSearchValue = useCallback(
    debounce((value) => {
      dispatch(setSearch(value));
    }, 250),
    []
  );

  const onChangeInput = (event) => {
    setSearchValue(event.target.value);
    updateSearchValue(event.target.value);
  };

  return (
    <div className={styles.search}>
      <input
        ref={searchRef}
        className={styles.search__input}
        value={searchValue}
        type="text"
        placeholder="search pizza..."
        onChange={onChangeInput}
      ></input>
      <BsSearch className={styles.search__icon_search} />
      {searchValue && (
        <Close
          className={styles.search__icon_close}
          onClick={() => clearSearch()}
        />
      )}
    </div>
  );
};

export default Search;
