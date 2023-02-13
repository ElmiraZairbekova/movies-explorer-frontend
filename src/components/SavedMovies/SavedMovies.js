import SearchForm from "../Movies/SearchForm/SearchForm";
import MoviesCardList from "../Movies/MoviesCardList/MoviesCardList";
import Preloader from "../Preloader/Preloader";

function SavedMovies({
  onSearch,
  savedMovies,
  onSaveMovie,
  onDeleteMovie,
  disabledCheckboxSaved,
  onSubmitCheckbox,
  preloaderStatus,
}) {
  return (
    <div className="saved-movies">
      <SearchForm
        onSearch={onSearch}
        onSubmitCheckbox={onSubmitCheckbox}
        disabledSaved={disabledCheckboxSaved}
      />
      {preloaderStatus ? (
        <Preloader />
      ) : (
        <MoviesCardList
          foundMovies={savedMovies}
          onSaveMovie={onSaveMovie}
          savedMovies={savedMovies}
          onDeleteMovie={onDeleteMovie}
        />
      )}
    </div>
  );
}

export default SavedMovies;
