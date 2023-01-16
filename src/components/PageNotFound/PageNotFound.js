function PageNotFound({ history }) {
  function goBack() {
    history.goBack();
  }
  return (
    <section className="not-found">
      <h2 className="not-found__code">404</h2>
      <p className="not-found__message">Страница не найдена</p>
      <button onClick={goBack} className="not-found__back">
        Назад
      </button>
    </section>
  );
}

export default PageNotFound;
