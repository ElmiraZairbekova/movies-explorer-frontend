import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../images/header-logo.svg";

function Register({ onRegister, isLoading }) {
  const [formValues, setFormValues] = useState({
    name: {
      value: "",
      isValid: false,
      errorMessage: "",
    },
    email: {
      value: "",
      isValid: false,
      errorMessage: "",
    },
    password: {
      value: "",
      isValid: false,
      errorMessage: "",
    },
  });

  const [disabled, setDisabled] = useState(false);

  const isValid =
    formValues.name.isValid &&
    formValues.email.isValid &&
    formValues.password.isValid;

  function handleChange(e) {
    const { name, value, validity, validationMessage } = e.target;
    setFormValues((prevState) => ({
      ...prevState,
      [name]: {
        ...formValues[name],
        value,
        isValid: validity.valid,
        errorMessage: validationMessage,
      },
    }));
  }

  useEffect(() => {
    isValid ? setDisabled(false) : setDisabled(true);
  }, [isValid]);

  function handleSubmit(e) {
    e.preventDefault();
    onRegister({
      name: formValues.name.value,
      email: formValues.email.value,
      password: formValues.password.value,
    });
  }

  useEffect(() => {
    isLoading ? setDisabled(true) : setDisabled(false);
  }, [isLoading]);

  return (
    <section className="form">
      <div className="form__container">
        <Link to="/" className="form__link">
          <img
            className="form__logo"
            src={logo}
            alt="Логотип Movies Explorer"
          ></img>
        </Link>
        <h2 className="form__title">Добро пожаловать!</h2>
        <form className="form__inputs" onSubmit={handleSubmit}>
          <div className="form__items">
            <label className="form__item">
              <p className="form__item-text">Имя</p>
              <input
                className="form__field"
                name="name"
                placeholder="Введите имя"
                value={formValues.name.value || ""}
                onChange={handleChange}
                required
              />
              <p className="form__error">{formValues.name.errorMessage}</p>
            </label>

            <label className="form__item">
              <p className="form__item-text">E-mail</p>
              <input
                className={`form__field ${
                  formValues.email.errorMessage && "form__field_color-error"
                }`}
                name="email"
                pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
                onChange={handleChange}
                value={formValues.email.value || ""}
                type="email"
                required
                placeholder="Введите E-mail"
              />
              <p className="form__error">{formValues.email.errorMessage}</p>
            </label>

            <label className="form__item">
              <p className="form__item-text">Пароль</p>
              <input
                className={`form__field ${
                  formValues.password.errorMessage && "form__field_color-error"
                }`}
                name="password"
                onChange={handleChange}
                value={formValues.password.value || ""}
                type="password"
                required
                placeholder="Введите пароль"
              />
              <p className="form__error">{formValues.password.errorMessage}</p>
            </label>
          </div>
          <button
            className={`form__button ${
              isValid && !isLoading ? "" : "form__button_disabled"
            }`}
            type="submit"
            disabled={disabled}
          >
            Зарегистрироваться
          </button>
        </form>
        <p className="form__text">
          Уже зарегистрированы?
          <Link to="/signin" className="form__link">
            Войти
          </Link>
        </p>
      </div>
    </section>
  );
}

export default Register;
