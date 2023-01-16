function Portfolio() {
  return (
    <section className="portfolio">
      <ul className="portfolio__list">
        Портфолио
        <li className="portfolio-item">
          <a
            href="https://github.com/ElmiraZairbekova/how-to-learn"
            target="blank"
            className="portfolio-link"
          >
            Статичный сайт
            <p className="portfolio-link-arrow"></p>
          </a>
        </li>
        <li className="portfolio-item">
          <a
            target="blank"
            href="https://github.com/ElmiraZairbekova/russian-travel"
            className="portfolio-link"
          >
            Адаптивный сайт
            <p className="portfolio-link-arrow"></p>
          </a>
        </li>
        <li className="portfolio-item">
          <a
            href="https://github.com/ElmiraZairbekova/react-mesto-api-full"
            className="portfolio-link"
            target="blank"
          >
            Одностраничное приложение
            <p className="portfolio-link-arrow"></p>
          </a>
        </li>
      </ul>
    </section>
  );
}

export default Portfolio;
