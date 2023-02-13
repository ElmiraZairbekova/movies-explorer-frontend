class MoviesApi {
  constructor({ url }) {
    this._url = url;
  }

  _getResponseData(res) {
    return res.ok
      ? res.json()
      : Promise.reject(`Произошла ошибка: ${res.status}`);
  }

  getMovies() {
    return fetch(`${this._url}/beatfilm-movies`, {
      method: "GET",
      headers: {
        "content-type": "application/json",
      },
    }).then((res) => this._getResponseData(res));
  }
}

const moviesApi = new MoviesApi({
  url: "https://api.nomoreparties.co",
});

export default moviesApi;
