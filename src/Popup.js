import React, { Children } from "react";
import { FaUpload, FaWindowClose ,FaEdit } from "react-icons/fa";

export const Popup = ( props) => { 
  return (
    <div className={props.openPopup?"popup popup-open":"popup"}>
      <div className="popup-container">
       
            {props.children}
      </div>
    </div>
  );
};
