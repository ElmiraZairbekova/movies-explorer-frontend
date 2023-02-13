import { Route } from "react-router-dom";
import { handleChangeDuration } from "../../../utils/constants";

function MoviesCard({ movie, onSaveMovie, onDeleteMovie, savedMovies }) {
  const savedMovie = savedMovies.find((m) => m.movieId === movie.id);

  function submitMovie() {
    if (!savedMovie) {
      onSaveMovie(movie);
    } else {
      onDeleteMovie(savedMovie);
    }
  }

  function handleDeleteMovie() {
    onDeleteMovie(movie);
  }
  return (
    <li className="movie">
      <div className="movie__element">
        <h2 className="movie__title">{movie.nameRU}</h2>
        <Route path="/movies">
          <button
            alt="Лайк"
            className={`movie__button movie__button${
              !savedMovie ? "_inactive" : "_active"
            }`}
            onClick={submitMovie}
            // src={!savedMovie ? "_active" : "_inactive"}
          />
        </Route>
        <Route path="/saved-movies">
          <button
            alt="Удалить"
            className="movie__button movie__button_delete"
            onClick={handleDeleteMovie}
          />
        </Route>
      </div>
      <p className="movie__duration">
        {handleChangeDuration(movie.duration, movie)}
      </p>
      <Route path="/movies">
        <a href={movie.trailerLink} target="blank">
          <img
            className="movie__image"
            src={`https://api.nomoreparties.co${movie.image.url}`}
            alt="изображение фильма"
          />
        </a>
      </Route>
      <Route path="/saved-movies">
        <a href={movie.trailerLink} target="blank">
          <img
            className="movie__image"
            src={movie.image}
            alt="изображение фильма"
          />
        </a>
      </Route>
    </li>
  );
}

export default MoviesCard;
