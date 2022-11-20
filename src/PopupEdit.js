import React from "react";
import { FaUpload, FaWindowClose } from "react-icons/fa";
import { Popup } from "./Popup";
export const PopupEdit = (props) => {
  
  return (
    <Popup onOverlayClick={props.onOverlayClick} onModalClick={props.onModalClick}  openPopup={props.openPopup}>

        <form className="popup-form">
        <FaWindowClose className="popup-close"  onClick={props.closePopupfunc}/>
          <div className="popup-form-content">
            <label className="popup-form-label">שם השיעור:</label>
            <input
              className="popup-form-input"
              placeholder="שם השיעור"
              type="text"
            ></input>
          </div>

          <label htmlFor="inputFile" className="custom-file-upload">
            <FaUpload />
          </label>
          <input
            type="file"
            //   accept=".pdf, .doc, .docx"
            // onChange={handleChange}
            id="inputFile"
          />
        </form>
        </Popup>
  );
};
