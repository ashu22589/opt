import React, { useState } from "react";
import { ReactComponent as CrossSvg } from "../assets/images/opt/cross.svg";
import { ReactComponent as DownArrowSvg } from "../assets/images/opt/down-arrow.svg";
import { ReactComponent as CheckBoxEnabledSvg } from "../assets/images/opt/checkbox-enabled.svg";
import { ReactComponent as CheckBoxDisabledSvg } from "../assets/images/opt/checkbox-disabled.svg";
import { ReactComponent as DummyAvatarSvg } from "../assets/images/opt/dummy-avatar.svg";

const AddTeammateModal = ({ onClose }) => {
  const [dropdownExpanded, setDropdownExpanded] = useState(false);
  return (
    <div onClick={onClose} className="add-teammate-modal">
      <div onClick={(e) => e.stopPropagation()} className="modal-inner">
        <div className="top-div">
          <h2 className="modal-text">Add Teammate(s)</h2>
          <CrossSvg onClick={onClose} className="modal-cross" />
        </div>
        <h3 className="secondary-text">
          Add Teammate(s) to this event by selecting them below
        </h3>
        <div
          className="teammate-dropdown"
          onClick={() => setDropdownExpanded((prev) => !prev)}
        >
          <span className="label">Select Teammates</span>
          <DownArrowSvg className="dropdown-arrow" />
          {dropdownExpanded && (
            <div onClick={(e) => e.stopPropagation()} className="dropdown-main">
              {[...Array(7)].map((_, index) => (
                <div className="dropdown-item" key={index}>
                  <CheckBoxEnabledSvg className="checkbox" />
                  <DummyAvatarSvg className="avatar" />
                  <h2>Team Building Exercise</h2>
                </div>
              ))}
            </div>
          )}
        </div>
        <div className="button-div">
          <div onClick={onClose} className="modal-button cancel">
            Cancel
          </div>
          <div onClick={onClose} className="modal-button save empty">
            Save
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddTeammateModal;
