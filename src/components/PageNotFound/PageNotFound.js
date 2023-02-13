import { useHistory } from "react-router-dom";

const PageNotFound = () => {
  const history = useHistory();
  return (
    <section className="not-found">
      <h2 className="not-found__code">404</h2>
      <p className="not-found__message">Страница не найдена</p>
      <p onClick={history.goBack} className="not-found__back">
        Назад
      </p>
    </section>
  );
};

export default PageNotFound;
