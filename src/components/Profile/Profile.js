// import { useState, useContext } from 'react';
// import { CurrentUserContext } from '../../contexts/CurrentUserContext';
// import mainApi from '../../utils/MainApi';

// const Profile = ({ onSignOut, openPopup }) => {
//   const currentUser = useContext(CurrentUserContext);
//   const [name, setName] = useState(currentUser.name);
//   const [lastName, setLastName] = useState(currentUser.name);
//   const [email, setEmail] = useState(currentUser.email);
//   const [lastEmail, setLastEmail] = useState(currentUser.email);
//   const [isVisibleButton, setVisibleButton] = useState(false);

//   const handleSubmit = (evt) => {
//     evt.preventDefault();

//     mainApi.updateUserInfo({ name, email }).then(() => {
//       setVisibleButton(false);
//       setLastName(name);
//       setLastEmail(email);
//       openPopup('Данные успешно изменены!');
//     })
//     .catch((err) => {
//       openPopup(`Что-то пошло не так! ${err}`);
//     });
//   };

//   function handleNameChange(evt) {
//     const value = evt.target.value;
//     setName(value);

//     if (value !== lastName) {
//       setVisibleButton(true);
//     } else {
//       setVisibleButton(false);
//     }
//   }

//   function handleEmailChange(evt) {
//     const value = evt.target.value;
//     setEmail(value);

//     if (value !== lastEmail) {
//       setVisibleButton(true);
//     } else {
//       setVisibleButton(false);
//     }
//   }

//   return (
//     <section className="profile">
//       <form className="profile__form" onSubmit={handleSubmit}>
//         <h3 className="profile__greeting">Привет, {name}!</h3>
//         <div className="profile__inputs">
//           <p className="profile__text">Имя</p>
//           <div className="profile__area profile__area_type_name">
//             <input className="profile__settings" value={name} onChange={handleNameChange} />
//           </div>
//           <div className="profile__area profile__area_type_email">
//             <input className="profile__settings" value={email} onChange={handleEmailChange} />
//           </div>
//           <p className="profile__text">E-mail</p>
//         </div>
//         <button className="profile__button" disabled={!isVisibleButton}>
//           Редактировать
//         </button>
//         <button className="profile__link" type="button" onClick={onSignOut}>
//           Выйти из аккаунта
//         </button>
//       </form>
//     </section>
//   );
// };

// export default Profile;

import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

function Profile({ onSignout, onUpdateUser, isLoading }) {
  const currentUser = useContext(CurrentUserContext);

  const [disabled, setDisabled] = useState(false);

  const [formValues, setFormValues] = useState({
    name: {
      value: "",
      isValid: true,
      errorMessage: "",
    },
    email: {
      value: "",
      isValid: true,
      errorMessage: "",
    },
  });

  const isValid = formValues.name.isValid && formValues.email.isValid;

  useEffect(() => {
    isValid === true ? setDisabled(false) : setDisabled(true);
  }, [isValid]);

  useEffect(() => {
    isLoading ? setDisabled(true) : setDisabled(false);
  }, [isLoading]);

  useEffect(() => {
    if (
      currentUser.name === formValues.name.value &&
      currentUser.email === formValues.email.value
    ) {
      setDisabled(true);
    } else if (isValid) {
      setDisabled(false);
    } else if (!isValid) {
      setDisabled(true);
    }
  }, [currentUser, formValues, isValid]);

  useEffect(() => {
    setFormValues({
      name: {
        value: currentUser.name,
        isValid: true,
        errorMessage: "",
      },
      email: {
        value: currentUser.email,
        isValid: true,
        errorMessage: "",
      },
    });
  }, [currentUser]);

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

  function handleSubmit(e) {
    e.preventDefault();
    onUpdateUser({
      name: formValues.name.value,
      email: formValues.email.value,
    });
  }

  return (
    <>
      <section className="profile">
        <h2 className="profile__title">{`Привет, ${currentUser.name}!`}</h2>
        <div className="profile__container">
          <form
            name="edit-profile"
            className="profile__form"
            onSubmit={handleSubmit}
            noValidate
          >
            <label
              className={`profile__info-container ${
                formValues.name.isValid ? "" : "profile__info-container__error"
              }`}
            >
              <span>Имя</span>
              <input
                minLength="2"
                maxLength="30"
                type="text"
                name="name"
                required
                className="profile__input"
                value={formValues.name.value || ""}
                onChange={handleChange}
              />
            </label>
            <span className="profile__error-span">
              {formValues.name.errorMessage}
            </span>
            <label
              className={`profile__info-container ${
                formValues.email.isValid ? "" : "profile__info-container__error"
              }`}
            >
              <span>E-mail</span>
              <input
                type="email"
                name="email"
                required
                pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
                className="profile__input"
                value={formValues.email.value || ""}
                onChange={handleChange}
              />
            </label>
            <span className="profile__error-span">
              {formValues.email.errorMessage}
            </span>
            <button
              className={`profile__edit-button ${
                disabled ? "profile__edit-button_disabled" : ""
              }`}
              type="submit"
              disabled={disabled}
            >
              Редактировать
            </button>
          </form>

          <Link to="/" className="profile__signout" onClick={onSignout}>
            Выйти из аккаунта
          </Link>
        </div>
      </section>
    </>
  );
}

export default Profile;
