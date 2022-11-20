import React from "react";

export const Popup = (props) => {
  return (
    <div
      onClick={props.onOverlayClick}
      className={
        props.smallNav
          ? "popup popup-open popup-smallNav"
          : props.openPopup
          ? " popup popup-open"
          : "popup"
      }
    >
      <div
      onClick={props.onModalClick}
        className={
          props.smallNav
            ? "popup-container popup-container-_small"
            : "popup-container"
        }
      >
        {props.children}
      </div>
    </div>
  );
};
