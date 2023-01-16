// const InfoTooltip = ({ text, isOpen, onClose }) => {
//   return (
//     <section className={`popup ${isOpen ? 'popup_opened' : ''}`}>
//       <div className="popup__container">
//         <p className="popup__text">{text}</p>
//         <button className="popup__close" type="button" onClick={onClose} />
//       </div>
//     </section>
//   );
// };

// export default InfoTooltip;

import successImage from "../../images/success.svg";
import unsuccessImage from "../../images/unsuccess.svg";

const InfoTooltip = ({ isOpen, onClose, text, success }) => {
  return (
    <div className={`popup popup_type_tooltip ${isOpen ? 'popup_opened' : ''}`}>
      <div className="popup__container">
        <button
          type="button"
          className="popup__close-button"
          onClick={onClose}
        />
        <img
          className="popup__tooltip-image"
          src={success ? successImage : unsuccessImage}
          alt={success ? "Успешно" : "Неуспешно"}
        />
        <h2 className="popup__title popup__title_tooltip">{text}</h2>
      </div>
    </div>
  );
}

export default InfoTooltip;
