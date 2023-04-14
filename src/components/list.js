<div className="opt-list-div">
  <div className="list-header-div">
    <div className="list-top">
      <h2>Team Events</h2>
      <div className="add-event-btn">Add Event</div>
    </div>
    <div className="list-filters">
      {[...Array(5)].map((_, index) => (
        <div
          key={index}
          onClick={() => setFilterOpen((prev) => !prev)}
          className="filter-cell"
        >
          <h2>Category</h2>
          <ListFilterSvg className="filter-icon" />
          {filterOpen && (
            <div
              onClick={(e) => e.stopPropagation()}
              className="filter-dropdown"
            >
              <h2>Sort:</h2>
              <div className="sort-type">Ascending</div>
              <div className="sort-type">Descending</div>
              <h2>Filter:</h2>
              <div className="filter-type">
                {[...Array(5)].map((_, index) => (
                  <div className="input-filter">
                    <CheckBoxEnabledSvg className="checkbox" />
                    <h3 className="">Communication</h3>
                  </div>
                ))}
              </div>
            </div>
          )}
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
        <div className="event-icon-div" onClick={toggleDeleteModal}>
          <DeleteEventSvg className="event-icon" />
        </div>
      </div>
    ))}
  </div>
</div>;
