function Footer() {
  return (
    <footer className="footer">
      <p className="footer__container">
        Учебный проект Яндекс.Практикум х BeatFilm.
      </p>
      <div className="footer__items">
        <p className="footer__copyright">&copy; 2022</p>
        <div className="footer__links">
          <a
            href="https://practicum.yandex.ru"
            target="blank"
            className="footer__link"
          >
            Яндекс.Практикум
          </a>
          <a href="https://github.com" target="blank" className="footer__link">
            Github
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
