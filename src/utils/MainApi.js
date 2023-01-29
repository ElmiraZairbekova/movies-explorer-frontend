class MainApi {
  constructor({ url }) {
    this._url = url;
  }

  _getResponseData(res) {
    return res.ok ? res.json() : Promise.reject(res);
  }

  getUserInfo() {
    return fetch(`${this._url}/users/me`, {
      method: "GET",
      headers: {
        "content-type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("jwt")}`,
      },
    }).then((res) => this._getResponseData(res));
  }

  editUserInfo(userData) {
    return fetch(`${this._url}/users/me`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("jwt")}`,
      },
      body: JSON.stringify({
        name: userData.name,
        email: userData.email,
      }),
    }).then((res) => this._getResponseData(res));
  }

  getSavedMovies() {
    return fetch(`${this._url}/movies`, {
      method: "GET",
      headers: {
        "content-type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("jwt")}`,
      },
    }).then((res) => this._getResponseData(res));
  }

  createMovie(movie) {
    return fetch(`${this._url}/movies`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("jwt")}`,
      },
      body: JSON.stringify({
        country: movie.country,
        director: movie.director,
        duration: movie.duration,
        year: movie.year,
        description: movie.description,
        image: `https://api.nomoreparties.co/${movie.image.url}`,
        trailerLink: movie.trailerLink,
        thumbnail: `https://api.nomoreparties.co/${movie.image.formats.thumbnail.url}`,
        movieId: movie.id,
        nameRU: movie.nameRU,
        nameEN: movie.nameEN,
      }),
    }).then((res) => this._getResponseData(res));
  }

  deleteMovie(id) {
    return fetch(`${this._url}/movies/${id}`, {
      method: "DELETE",
      headers: {
        "content-type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("jwt")}`,
      },
    }).then((res) => this._getResponseData(res));
  }
}

const mainApi = new MainApi({
  url: "https://api.movies-diplom.nomoredomains.club",
});

export default mainApi;
