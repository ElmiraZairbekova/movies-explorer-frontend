import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../images/header-logo.svg";

function Login({ onLogin, isLoading }) {
  const [formValues, setFormValues] = useState({
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

  const isValid = formValues.email.isValid && formValues.password.isValid;

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
    isLoading ? setDisabled(true) : setDisabled(false);
  }, [isLoading]);

  useEffect(() => {
    isValid ? setDisabled(false) : setDisabled(true);
  }, [isValid]);

  function handleSubmit(e) {
    e.preventDefault();
    onLogin({
      email: formValues.email.value,
      password: formValues.password.value,
    });
  }

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
        <h2 className="form__title">Рады видеть!</h2>
        <form className="form__inputs" onSubmit={handleSubmit}>
          <div className="form__items">
            <label className="form__item">
              <p className="form__item-text">E-mail</p>
              <input
                className={`form__field ${
                  formValues.email.errorMessage && "form__field_color-error"
                }`}
                name="email"
                pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
                value={formValues.email.value || ""}
                onChange={handleChange}
                type="email"
                required
                placeholder="Введите email"
              />
              <p className="form__error-display">
                {formValues.email.errorMessage}
              </p>
            </label>

            <label className="form__item">
              <p className="form__item-text">Пароль</p>
              <input
                className={`form__field ${
                  formValues.password.errorMessage && "form__field_color-error"
                }`}
                name="password"
                value={formValues.password.value || ""}
                onChange={handleChange}
                type="password"
                required
                placeholder="Введите пароль"
              />
              <p className="form__error-display">
                {formValues.password.errorMessage}
              </p>
            </label>
          </div>
          <button
            className={`form__button ${
              isValid && !isLoading ? "" : "form__button_disabled"
            }`}
            type="submit"
            disabled={disabled}
          >
            Войти
          </button>
        </form>
        <p className="form__text">
          Ещё не зарегистрированы?
          <Link to="/signup" className="form__link">
            Регистрация
          </Link>
        </p>
      </div>
    </section>
  );
}

export default Login;
