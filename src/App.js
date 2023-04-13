import { useState } from "react";
import { ReactComponent as BroSvg } from "./assets/images/opt/bro.svg";
import { ReactComponent as LogoSvg } from "./assets/images/opt/logo.svg";
import { ReactComponent as EditEventSvg } from "./assets/images/opt/edit-event.svg";
import { ReactComponent as ListFilterSvg } from "./assets/images/opt/list-filter.svg";
import { ReactComponent as DeleteEventSvg } from "./assets/images/opt/delete-event.svg";

function App() {
  const [deleteModal, setDeleteModal] = useState(false);
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

      {/* List */}
      <div className="opt-page">
        <div className="opt-list-div">
          <div className="list-header-div">
            <div className="list-top">
              <h2>Team Events</h2>
              <div className="add-event-btn">Add Event</div>
            </div>
            <div className="list-filters">
              {[...Array(5)].map((_, index) => (
                <div key={index} className="filter-cell">
                  <h2>Category</h2>
                  <ListFilterSvg className="filter-icon" />
                </div>
              ))}
              <div className="last-columns"></div>
            </div>
          </div>
          <div className="list-container">
            {/* <div className="event-list-empty">
              <BroSvg className="bro-icon" />
              <h2 className="empty-list-text">
                No Outside Events to display. Add an outside event to view and
                edit here.
              </h2>
            </div> */}
            {[...Array(15)].map((_, index) => (
              <div key={index} className="event-list-div">
                <div className="event-data-name name">
                  <h2 className="event-text-data name">Event Name</h2>
                </div>
                <div className="event-data-name">
                  <h2 className="event-text-data">Happy Hour</h2>
                </div>
                <div className="event-data-name">
                  <h2 className="event-text-data">Communication</h2>
                </div>
                <div className="event-data-name">
                  <h2 className="event-text-data">03/17/2023</h2>
                </div>
                <div className="event-data-name">
                  <h2 className="event-text-data">03/17/2023</h2>
                </div>
                <div className="event-icon-div">
                  <EditEventSvg className="event-icon" />
                </div>
                <div
                  className="event-icon-div"
                  onClick={() => setDeleteModal(true)}
                >
                  <DeleteEventSvg className="event-icon" />
                </div>
              </div>
            ))}
            {/* <div className="event-list">
            </div> */}
          </div>
        </div>
      </div>
      {deleteModal && <div className="event-delete-modal"></div>}
    </div>
  );
}

export default App;
