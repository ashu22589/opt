import { useState, useEffect } from "react";
import { ReactComponent as BroSvg } from "./assets/images/opt/bro.svg";
import { ReactComponent as LogoSvg } from "./assets/images/opt/logo.svg";
import { ReactComponent as CrossSvg } from "./assets/images/opt/cross.svg";
import { ReactComponent as EditEventSvg } from "./assets/images/opt/edit-event.svg";
import { ReactComponent as ListFilterSvg } from "./assets/images/opt/list-filter.svg";
import { ReactComponent as DeleteEventSvg } from "./assets/images/opt/delete-event.svg";
import { ReactComponent as CheckBoxEnabledSvg } from "./assets/images/opt/checkbox-enabled.svg";
import { ReactComponent as CheckBoxDisabledSvg } from "./assets/images/opt/checkbox-disabled.svg";
import { ReactComponent as DownArrowSvg } from "./assets/images/opt/down-arrow.svg";

import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import TimePicker from "rc-time-picker";
import "rc-time-picker/assets/index.css";

function App() {
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [filterOpen, setFilterOpen] = useState(false);
  const [selected, setSelected] = useState();
  const [startDateExpanded, setStartDateExpanded] = useState(false);
  console.log("msdu9yhs", startDateExpanded);

  const toggleDeleteModal = () => {
    setDeleteModalOpen((prev) => !prev);
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
                <span className="date-label">Start Date</span>
                <DownArrowSvg className="date-dropdown-arrow" />
                {startDateExpanded && (
                  <DayPicker
                    mode="single"
                    selected={selected}
                    onSelect={setSelected}
                    className="calender-months"
                  />
                  //           <DayPicker
                  //   mode="range"
                  //   max={60}
                  //   className="calender-months"
                  //   selected={selectedDate}
                  //   defaultMonth={defaultMonth}
                  //   disabled={[
                  //     { before: new Date() },
                  //     {
                  //       after: nextMonth._d,
                  //     },
                  //     ...selectedDaysToDisable,
                  //   ]}
                  //   modifiers={{ holidays: holidaysList, weekend: weekendList }}
                  //   modifiersStyles={getModifierStyles()}
                  //   onDayClick={(day) => {
                  //     handleSelectDate(day);
                  //   }}
                  //   localeUtils={{
                  //     ...LocaleUtils,
                  //     formatWeekdayShort: getFormattedDayTitle,
                  //   }}
                  //   onMonthChange={setMonth}
                  // />
                )}
              </div>
              <div className="date-div time">
                <span className="date-label">Start Time</span>
                <DownArrowSvg className="date-dropdown-arrow" />
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
              {/* <DayPicker
                mode="single"
                selected={selected}
                onSelect={setSelected}
              /> */}
              {/* <TimePicker
                open
                showSecond={false}
                value=""
                className=""
                popupClassName=""
                use12Hours
                onChange={() => {}}
                onAmPmChange={() => {}}
                inputReadOnly
              /> */}
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
    </div>
  );
}

export default App;
