import React from 'react';
import { useLocation } from 'react-router-dom';

const MoviesCard = ({ card }) => {
  const [favorite, setFavorite] = React.useState(false);

  function handleFavoriteToogle() {
    setFavorite(!favorite);
  }

  const { pathname } = useLocation();

  return (
    <li className="movie">
      <div className="movie__element">
        <p className="movie__title">{card.title}</p>
        <div className="movie__buttons">
          {pathname === '/saved-movies' ? (
            <button type="button" className="movie__button movie__button_delete" />
          ) : (
            <button
              type="button"
              className={`movie__button movie__button${favorite ? '_active' : '_inactive'}`}
              onClick={handleFavoriteToogle}
            />
          )}
        </div>
      </div>
      <p className="movie__duration">{card.duration}</p>
      <img src={card.image} alt={card.title} className="movie__image"></img>
    </li>
  );
};

export default MoviesCard;