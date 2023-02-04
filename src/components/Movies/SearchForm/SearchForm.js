/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

function SearchForm({ onSearch, onSubmitCheckbox, disabled, disabledSaved }) {
  const [inputSearchError, setInputSearchError] = useState({
    errorMessage: "",
    isValid: true
  });
  const [inputValue, setInputValue] = useState("");
  const [checkbox, setCheckbox] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/movies") {
      setInputValue(localStorage.getItem("movieName"));
      setCheckbox(JSON.parse(localStorage.getItem("checkboxStatus")));
      setInputSearchError({});
    } else if (location.pathname === "/saved-movies") {
      const checkboxStatus = JSON.parse(
        localStorage.getItem("checkboxStatusSavedMovies")
      );
      setCheckbox(checkboxStatus);
      onSubmitCheckbox(checkboxStatus);
    }
  }, [location]);

  useEffect(() => {
    inputSearchError.isValid &&
      setInputSearchError({
        isValid: true,
        errorMessage: ""
      });
  }, []);

  function handleChangeCheckbox() {
    setCheckbox(!checkbox);
    onSubmitCheckbox(!checkbox);
  }

  function handleInputChange(e) {
    setInputValue(e.target.value);
    if (e.target.value.length === 0) {
      setInputSearchError({
        isValid: e.target.validity.valid,
        errorMessage: "Введите ключевое слово"
      });
    } else {
      setInputSearchError({
        isValid: e.target.validity.valid,
        errorMessage: ""
      });
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!inputValue) {
      return setInputSearchError({
        isValid: false,
        errorMessage: "Введите ключевое слово"
      });
    }
    onSearch(inputValue, checkbox);
  }

  return (
    <form className="search" onSubmit={handleSubmit} noValidate>
      <div className="search__container">
        <div className="search__img"></div>
        <input className={`search__input ${
            !inputSearchError.isValid && "search__input_error"
          }`}
          placeholder="Фильм"
          required
          name="movie"
          type="text"
          value={inputValue || ""}
          onChange={handleInputChange} />
        <button type="submit" className={`search__button ${
            !inputSearchError.isValid ? "search__button_error" : ""
          }`}
          disabled={!inputSearchError.isValid}></button>
      </div>
      <div className="search__toggle">
        <label className="search__tumbler">
          <input className="search__checkbox" type="checkbox"
            checked={checkbox ? true : false}
            onChange={handleChangeCheckbox}
            disabled={
              location.pathname === "/movies" ? disabled : disabledSaved
            } />
          <span className="search__slider" />
        </label>
        <p className="search__films">Короткометражки</p>
      </div>
    </form>
  );
}

export default SearchForm;
