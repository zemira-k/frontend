import React from "react";

export const Popup = (props) => {
  return (
    <div className={props.openPopup ? "popup popup-open" : "popup"}>
      <div className="popup-container">{props.children}</div>
    </div>
  );
};
