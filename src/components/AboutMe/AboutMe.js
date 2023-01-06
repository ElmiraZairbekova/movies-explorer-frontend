import avatar from "../../images/avatar.jpg";

function AboutMe() {
  return (
    <section className="about-me" id="student">
      <h2 className="about-me__caption">Студент</h2>
      <div className="about-me__wrapper">
        <img className="about-me__img" src={avatar} alt="моя фотография" />
        <h3 className="about-me__title">Эльмира</h3>
      </div>
      <h4 className="about-me__job">Фронтенд-разработчик, 36 лет</h4>
      <p className="about-me__description">
        Я&nbsp;родилась и&nbsp;живу в&nbsp;Москве. Закончила исторический
        факультет МПГУ. Работала в&nbsp;интернет торговле. Но было интересно
        узнать, как создаются и&nbsp;работают интернет-ресурсы, которыми мы
        пользуемся каждый день. Хотелось&nbsp;бы развиваться в&nbsp;этом
        направлении и&nbsp;дальше
      </p>

      <a
        href="https://github.com/ElmiraZairbekova"
        target="blank"
        className="about-me__link"
      >
        Github
      </a>
    </section>
  );
}

export default AboutMe;
