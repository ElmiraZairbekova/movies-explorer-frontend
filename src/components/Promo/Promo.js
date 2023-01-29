function Promo() {
  return (
    <section className="promo">
      <div className="promo__container">
        <h1 className="promo__title">
          Учебный проект студента факультета Веб-разработки.
        </h1>
        <form className="promo__links">
          <a className="promo__link" href="#about-project">
            <p className="promo__link-text">О проекте</p>
          </a>
          <a className="promo__link" href="#techs">
            <p className="promo__link-text">Технологии</p>
          </a>
          <a className="promo__link" href="#student">
            <p className="promo__link-text">Студент</p>
          </a>
        </form>
      </div>
    </section>
  );
}

export default Promo;
