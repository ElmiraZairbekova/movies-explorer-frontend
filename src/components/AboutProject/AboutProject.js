function AboutProject() {
  return (
    <section className="about-project" id="about-project">
      <h2 className="about-project__caption">О проекте</h2>
      <div className="about-project__description-wrapper">
        <div className="about-project__description">
          <h3 className="about-project__description-title">
            Дипломный проект включал 5 этапов
          </h3>
          <p className="about-project__description-text description">
            Составление плана, работу над бэкендом, вёрстку, добавление
            функциональности и финальные доработки.
          </p>
        </div>
        <div className="about-project__description">
          <h3 className="about-project__description-title">
            На выполнение диплома ушло 5 недель
          </h3>
          <p className="about-project__description-text description">
            У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было
            соблюдать, чтобы успешно защититься.
          </p>
        </div>
      </div>
      <div className="about-project__timeline">
        <div className="about-project__timeline-wrapper">
          <p className="about-project__timeline__stack-line">1 неделя</p>
          <p className="about-project__timeline__stack-text">Back-end</p>
        </div>
        <div className="about-project__timeline-wrapper">
          <p className="about-project__timeline__stack-line about-project__timeline__stack-line-frontend">4 недели</p>
          <p className="about-project__timeline__stack-text">Front-end</p>
        </div>
      </div>
    </section>
  );
}

export default AboutProject;
