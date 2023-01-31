import Preloader from "../Preloader/Preloader";
import MoviesCardList from "./MoviesCardList/MoviesCardList";
import SearchForm from "./SearchForm/SearchForm";

function Movies({
  onSearch,
  foundMovies,
  savedMovies,
  onSaveMovie,
  onDeleteMovie,
  disabledCheckbox,
  onSubmitCheckbox,
  preloaderStatus
}) {
  return (
    <>
      <section className="movies">
        <SearchForm
          onSearch={onSearch}
          onSubmitCheckbox={onSubmitCheckbox}
          disabled={disabledCheckbox}
        />
        {preloaderStatus ? (
          <Preloader />
        ) : (
          <MoviesCardList
            foundMovies={foundMovies}
            onSaveMovie={onSaveMovie}
            savedMovies={savedMovies}
            onDeleteMovie={onDeleteMovie}
          />
        )}
      </section>
    </>
  );
}

export default Movies;