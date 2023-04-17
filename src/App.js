import { useState, useEffect } from "react";
import moment from "moment";
import _ from "lodash";
import { ReactComponent as BroSvg } from "./assets/images/opt/bro.svg";
import { ReactComponent as LogoSvg } from "./assets/images/opt/logo.svg";
import { ReactComponent as CrossSvg } from "./assets/images/opt/cross.svg";
import { ReactComponent as EditEventSvg } from "./assets/images/opt/edit-event.svg";
import { ReactComponent as ListFilterSvg } from "./assets/images/opt/list-filter.svg";
import { ReactComponent as DeleteEventSvg } from "./assets/images/opt/delete-event.svg";
import { ReactComponent as CheckBoxEnabledSvg } from "./assets/images/opt/checkbox-enabled.svg";
import { ReactComponent as CheckBoxDisabledSvg } from "./assets/images/opt/checkbox-disabled.svg";
import { ReactComponent as DownArrowSvg } from "./assets/images/opt/down-arrow.svg";
import { ReactComponent as AddTypeSvg } from "./assets/images/opt/add-type.svg";
import { ReactComponent as DeleteIconSvg } from "./assets/images/opt/delete-icon.svg";
import { ReactComponent as DummyAvatarSvg } from "./assets/images/opt/dummy-avatar.svg";
import DeleteModal from "./components/DeleteModal";
import AddTeammateModal from "./components/AddTeammateModal";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";

function App() {
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [filterOpen, setFilterOpen] = useState(false);
  const [selected, setSelected] = useState("");
  const [startDateExpanded, setStartDateExpanded] = useState(false);
  const [startTimeExpanded, setStartTimeExpanded] = useState(false);
  const [eventTypeExpanded, setEventTypeExpanded] = useState(false);
  const [eventDetailsExpanded, setEventDetailsExpanded] = useState(false);
  const [deleteParticipantModal, setDeleteParticipantModal] = useState(false);
  const [addTeammateModal, setAddTeammateModal] = useState(false);
  console.log("msdu9yhs", addTeammateModal);

  const toggleDeleteModal = () => {
    setDeleteModalOpen((prev) => !prev);
  };

  const toggleDeleteParticipantModal = () => {
    setDeleteParticipantModal((prev) => !prev);
  };

  const toggleAddTeammateModal = () => {
    setAddTeammateModal((prev) => !prev);
  };

  useEffect(() => {
    if (deleteModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [deleteModalOpen]);

  return (
    <div className="opt-main">
      {/* Header */}
      <div className="opt-top-container">
        <div className="header">
          <div className="header-inner">
            <div className="logo-div">
              <LogoSvg className="logo" />
            </div>
            <div className="header-items">
              <h2>Outside Team Building</h2>
              <h2>Challenges</h2>
              <h2>Team Reports</h2>
              <h2>Invite</h2>
              <h2>CreightonCreighton</h2>
            </div>
          </div>
        </div>
        <div className="bottom-content">
          <div className="bottom-inner">
            <h2 className="text-1">{`Activity Library > Outside Team Building`}</h2>
            <h2 className="text-2">Outside Team Building</h2>
            <h2 className="text-3">
              Record, manage, and track all of your team building activities.
            </h2>
          </div>
        </div>
      </div>

      <div className="opt-page">
        {/* List */}
        {/* Add Event */}
        <div className="opt-event">
          <div className="top-div">
            <div className="text-div">
              <h2 className="event-top-text-1">Create New Event</h2>
              <h2 className="event-top-text-2">
                Add a new event, record participation, and filters for
                reporting.{" "}
              </h2>
            </div>
            <div className="btn-div">
              <div className="back-button back">Back</div>
              <div className="back-button create">Create</div>
            </div>
          </div>

          <input
            type="text"
            value=""
            placeholder="Event Title"
            className="event-title"
            onChange={() => {}}
          />

          <div className="date-container">
            <h2 className="duration-label">Event Duration</h2>
            <div className="date-container-1">
              <div
                className="date-div"
                onClick={() => setStartDateExpanded((prev) => !prev)}
              >
                <span className="date-label">{`${
                  selected === ""
                    ? "Start Date"
                    : moment(selected).format("MM/DD/YYYY")
                }`}</span>
                <DownArrowSvg className="date-dropdown-arrow" />
                {startDateExpanded && (
                  <div
                    onClick={(e) => e.stopPropagation()}
                    className="day-picker-main"
                  >
                    <DayPicker
                      mode="single"
                      required
                      selected={selected}
                      onSelect={setSelected}
                      className="calender-months"
                      fromDate={new Date()}
                    />
                  </div>
                )}
              </div>
              <div
                className="date-div time"
                onClick={() => setStartTimeExpanded((prev) => !prev)}
              >
                <span className="date-label">Start Time</span>
                <DownArrowSvg className="date-dropdown-arrow" />
                {startTimeExpanded && (
                  <div
                    onClick={(e) => e.stopPropagation()}
                    className="time-picker-main"
                  >
                    <div className="time-picker-inner">
                      <div className="vertical-time-div hours">
                        {[...Array(12)].map((_, index) => (
                          <div
                            key={index}
                            className={`time-unit ${
                              index === 0 ? "selected" : ""
                            }`}
                          >{`${index === 0 ? "12" : index}`}</div>
                        ))}
                      </div>
                      <div className="vertical-time-div minutes">
                        {[...Array(60)].map((_, index) => (
                          <div
                            key={index}
                            className={`time-unit ${
                              index === 5 ? "selected" : ""
                            }`}
                          >{`${
                            index.toString().length === 1 ? "0" + index : index
                          }`}</div>
                        ))}
                      </div>
                      <div className="vertical-time-div am-pm">
                        <div className={`time-unit ${true ? "selected" : ""}`}>
                          AM
                        </div>
                        <div className={`time-unit ${false ? "selected" : ""}`}>
                          PM
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
            <div className="date-container-1 second-div">
              <div className="date-div">
                <span className="date-label">End Date</span>
                <DownArrowSvg className="date-dropdown-arrow" />
              </div>
              <div className="date-div time">
                <span className="date-label">End Time</span>
                <DownArrowSvg className="date-dropdown-arrow" />
              </div>
            </div>
          </div>

          <div className="horizontal-divider" />

          <div className="date-container event-details">
            <h2 className="duration-label">Event Details</h2>
            <div className="date-container-1">
              <div
                className="date-div"
                onClick={() => setEventTypeExpanded((prev) => !prev)}
              >
                <span className="date-label">Event Type</span>
                <DownArrowSvg className="date-dropdown-arrow" />
                {eventTypeExpanded && (
                  <div
                    onClick={(e) => e.stopPropagation()}
                    className="event-type-dropdown"
                  >
                    <div className="event-type-inner">
                      {[...Array(4)].map((_, index) => (
                        <div className="type-main" key={index}>
                          Team Building Exercise
                        </div>
                      ))}
                      <div className="other-event">
                        <h2 className="other-text">Other:</h2>
                        <input
                          type="text"
                          value=""
                          placeholder="Event Title"
                          className="event-type-add"
                          onChange={() => {}}
                        />
                        <AddTypeSvg className="add-type-icon" />
                      </div>
                    </div>
                  </div>
                )}
              </div>
              <div
                className="date-div"
                onClick={() => setEventDetailsExpanded((prev) => !prev)}
              >
                <span className="date-label">Event Category</span>
                <DownArrowSvg className="date-dropdown-arrow" />
                {eventDetailsExpanded && (
                  <div
                    onClick={(e) => e.stopPropagation()}
                    className="event-type-dropdown"
                  >
                    <div className="event-type-inner">
                      {[...Array(5)].map((_, index) => (
                        <div className="type-main" key={index}>
                          Communication
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="horizontal-divider" />

          <div className="date-container participants">
            <div className="header-div">
              <h2 className="duration-label">Event Participants</h2>
              <div
                className="add-teammates-btn"
                onClick={() => setAddTeammateModal(true)}
              >
                Add Teammates
              </div>
            </div>
            {/* No Participants */}
            {/* <div className="participants-empty">
              <BroSvg className="bro-image" />
              <h2 className="empty-text">
                No Teammates to display. Add Teammates to record attendance for
                your event.
              </h2>
            </div> */}
            {/* Participants List */}
            <div className="participants-main">
              <div className="participants-header">
                <div className="header-item">Teammate</div>
                <div className="header-item">Teammate</div>
                <div className="header-item">Teammate</div>
                <div className="last-div"></div>
              </div>
              <div className="participants-list-main">
                {[...Array(4)].map((_, index) => (
                  <div key={index} className="participants-list">
                    <div className="list-cell highlight">
                      <DummyAvatarSvg className="avatar" />
                      Teammate Name
                    </div>
                    <div className="list-cell">teammate@email.com</div>
                    <div className="list-cell">Marketing</div>
                    <div
                      className="delete-div"
                      onClick={() => setDeleteParticipantModal(true)}
                    >
                      <DeleteIconSvg className="delete-div-icon" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      {deleteModalOpen && (
        <div onClick={toggleDeleteModal} className="event-delete-modal">
          <div onClick={(e) => e.stopPropagation()} className="modal-inner">
            <div className="top-div">
              <h2 className="modal-text">
                Are you sure you want to remove this event?
              </h2>
              <CrossSvg onClick={toggleDeleteModal} className="modal-cross" />
            </div>
            <h2 className="modal-text name">{`{Event Name}`}</h2>
            <div className="button-div">
              <div onClick={toggleDeleteModal} className="modal-button back">
                Back
              </div>
              <div onClick={toggleDeleteModal} className="modal-button remove">
                Yes, Remove
              </div>
            </div>
          </div>
        </div>
      )}
      {deleteModalOpen && <DeleteModal event onClose={toggleDeleteModal} />}
      {addTeammateModal && (
        <AddTeammateModal onClose={toggleAddTeammateModal} />
      )}
      {deleteParticipantModal && (
        <DeleteModal onClose={toggleDeleteParticipantModal} />
      )}
    </div>
  );
}

export default App;
