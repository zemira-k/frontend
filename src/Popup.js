import React from "react";

export const Popup = (props) => {
  return (
    <div onClick={props.closePopup} className={props.smallNav?"popup popup-open popup-smallNav": props.openPopup ? " popup popup-open" : "popup"}>
      <div className={props.smallNav? "popup-container ": "popup-container-_small"}>{props.children}</div>
    </div>
  );
};
