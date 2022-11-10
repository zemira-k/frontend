import React from "react";
import { FaUpload, FaWindowClose } from "react-icons/fa";
import { Popup } from "./Popup";
import { Slides } from "./Slides";



export const PopupShiuriTora = (props) => {

  return (
    <Popup openPopup={props.openPopup}>
<FaWindowClose className="popup-close"  onClick={props.closePopupfunc}/>
<h2 className="popup-title">משעורי השבוע</h2>
<Slides popupStatus={true}/>
        </Popup>
  );
};