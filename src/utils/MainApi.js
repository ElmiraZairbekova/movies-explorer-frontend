class MainApi {
  constructor({ url }) {
    this._url = url;
  }

  _getResponseData(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
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
        authorization: `Bearer ${localStorage.getItem("jwt")}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        image: 'https://api.nomoreparties.co' + movie.image.url,
        trailer: movie.trailerLink,
        thumbnail: 'https://api.nomoreparties.co' + movie.image.url,
        movieId: movie.id,
        country: movie.country || 'Неизвестно',
        director: movie.director,
        duration: movie.duration,
        year: movie.year,
        description: movie.description,
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
