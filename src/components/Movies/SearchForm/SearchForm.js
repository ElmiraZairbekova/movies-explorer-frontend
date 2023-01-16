const SearchForm = () => {
  return (
    <form className="search">
      <div className="search__container">
        <div className="search__img"></div>
        <input className="search__input" placeholder="Фильм" type="text" />
        <button type="submit" className="search__button"></button>
      </div>
      <div className="search__toggle">
        <label className="search__tumbler">
          <input type="checkbox" className="search__checkbox" />
          <span className="search__slider" />
        </label>
        <p className="search__films">Короткометражки</p>
      </div>
    </form>
  );
};
export default SearchForm;