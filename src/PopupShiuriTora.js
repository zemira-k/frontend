import React from "react";
import { FaWindowClose } from "react-icons/fa";
import { Popup } from "./Popup";
import { Slides } from "./Slides";

export const PopupShiuriTora = (props) => {
  return (
    <Popup onOverlayClick={props.onOverlayClick} onModalClick={props.onModalClick} openPopup={props.openPopup}>
      <div className="popup__content">
      <FaWindowClose className="popup-close" onClick={props.closePopupfunc} />
      <h2 className="popup-title">משעורי השבוע</h2>
      <Slides popupStatus={true} />
      <p className="popup__text">שיעור השבוע עוסק בפרשת השבוחה חיי שרה אמנו ע,ה
          פרשת השבוע הלכה תורה תלמוד
      </p>
      </div>
    </Popup>
  );
};
