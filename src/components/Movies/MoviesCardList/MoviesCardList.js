/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { Route, useLocation } from "react-router-dom";
import {
  MAX_ELEMENTS,
  TIMEOUT,
  WIDTH_1025PX,
  WIDTH_1280PX,
  WIDTH_768PX
} from "../../../utils/constants";
import MoviesCard from "../MoviesCard/MoviesCard";

function MoviesCardList({
  foundMovies,
  onSaveMovie,
  savedMovies,
  onDeleteMovie
}) {
  const [maxEl, setMaxEl] = useState(12);
  const [renderedMovies, setRenderedMovies] = useState([]);
  const [width, setWidth] = useState(1280);
  const location = useLocation();

  function setDefaultMovies(count) {
    setMaxEl(count);
    let movies = [];
    foundMovies.forEach((item, i) => {
      if (i < count) {
        movies.push(item);
      }
    });
    setRenderedMovies(movies);
  }

  useEffect(() => {
    if (width < WIDTH_768PX) {
      setDefaultMovies(5);
    } else if (width < WIDTH_1025PX) {
      setDefaultMovies(6);
    } else if (width < WIDTH_1280PX) {
      setDefaultMovies(9);
    } else {
      setDefaultMovies(12);
    }
    if (location.pathname === "/saved-movies") {
      setMaxEl(MAX_ELEMENTS);
    }
  }, [foundMovies, width, location]);

  useEffect(() => {
    setMovies();
  }, [maxEl]);

  useEffect(() => {
    onSubscribe();
    return () => offSubscribe;
  }, []);

  function handleSubscribe() {
    setWidth(window.innerWidth);
  }

  function onSubscribe() {
    window.addEventListener("resize", function () {
      setTimeout(handleSubscribe, TIMEOUT);
    });
  }

  function offSubscribe() {
    window.removeEventListener("resize", function () {
      setTimeout(handleSubscribe, TIMEOUT);
    });
  }

  function setMovies() {
    let movies = [];
    foundMovies.forEach((item, i) => {
      if (i < maxEl) {
        movies.push(item);
      }
    });
    setRenderedMovies(movies);
  }

  function handleAddButtonClick() {
    if (width < WIDTH_768PX) {
      setMaxEl(maxEl + 5);
    } else if (width < WIDTH_1025PX) {
      setMaxEl(maxEl + 2);
    } else if (width < WIDTH_1280PX) {
      setMaxEl(maxEl + 3);
    } else {
      setMaxEl(maxEl + 4);
    }
  }

  return (
    <div className="cards">
      <ul className="cards__list">
        {renderedMovies.map((item) => (
          <MoviesCard
            key={item.id || item._id}
            movie={item}
            onSaveMovie={onSaveMovie}
            savedMovies={savedMovies}
            onDeleteMovie={onDeleteMovie}
          />
        ))}
      </ul>
      {foundMovies.length !== renderedMovies.length ? (
        <Route path="/movies">
          <button
            className="cards__button"
            type="button"
            onClick={handleAddButtonClick}
          >
            Ещё
          </button>
        </Route>
      ) : (
        ""
      )}
      <Route path="/saved-movies">
        <div className="cards-list__saved-devider"></div>
      </Route>
    </div>
  );
}

export default MoviesCardList;