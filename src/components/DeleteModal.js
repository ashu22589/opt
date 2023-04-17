import React from "react";
import { ReactComponent as CrossSvg } from "../assets/images/opt/cross.svg";

const DeleteModal = ({ event, onClose }) => {
  return (
    <div onClick={onClose} className="event-delete-modal">
      <div onClick={(e) => e.stopPropagation()} className="modal-inner">
        <div className="top-div">
          <h2 className="modal-text">
            {event
              ? "Are you sure you want to remove this event?"
              : "Are you sure you want to remove this participant from the Team Building Event?"}
          </h2>
          <CrossSvg onClick={onClose} className="modal-cross" />
        </div>
        <h2 className="modal-text name">{`${
          event ? "{Event Name}" : "{Teammate name}"
        }`}</h2>
        <div className="button-div">
          <div onClick={onClose} className="modal-button back">
            Back
          </div>
          <div onClick={onClose} className="modal-button remove">
            Yes, Remove
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteModal;
