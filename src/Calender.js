import "react-day-picker/dist/style.css";
import { addMonths } from "date-fns";
import moment from "moment";
import React, { useState, useEffect, useMemo } from "react";
import { useSelector } from "react-redux";
import { LocaleUtils, DayPicker } from "react-day-picker";
import {
  getFormattedDayTitle,
  getModifierStyles
} from "../../../../constants/utils";
import { addRealMonth, getAllWeekendSlotsForEventsList } from "../../utils";

const CalendarPicker = ({
  selectedDate,
  handleSelectDate,
  selectedCountry,
  selectedCenter,
  setSelectedDate,
  applicationDetails
}) => {
  const {
    appointmentDetails: { appointmentDetails },
    holidayList: { holidayList }
  } = useSelector((state) => state);
  const nextMonth1 = addMonths(new Date(), 0);
  const [holidaysList, setHolidaysList] = useState([]);
  const [weekendList, setWeekendList] = useState([]);
  const [holidayListUpdate, setHolidayListUpdate] = useState([]);
  const [month, setMonth] = useState(nextMonth1);
  const selectedDaysToDisable = [...holidaysList, ...weekendList];
  var nextMonth = addRealMonth(moment());
  const allWeekendList = useMemo(
    () => getAllWeekendSlotsForEventsList(holidayListUpdate, month),
    [holidayListUpdate, month]
  );

  //get holiday list array
  useEffect(() => {
    let newHolidaylist =
      holidayList.length > 0 &&
      holidayList.map((item) => {
        return {
          ...item,
          title: item.description,
          start: item.day,
          end: item.day,
          color: item.type === "holiday" ? "#F69D9F" : "#d7d7d7"
        };
      });
    if (newHolidaylist) {
      setHolidayListUpdate(newHolidaylist);
    } else {
      setHolidayListUpdate([]);
    }
  }, [holidayList]);

  //set default selected date when there is a holiday
  useEffect(() => {
    if (
      selectedCountry?.label !== undefined &&
      selectedCenter?.centerId !== undefined
    ) {
      const obtainedHoliday = holidayList.map((list) => {
        const date1 = new Date(list.day);
        return new Date(date1.toUTCString().slice(0, -4));
      });
      const filteredDate = holidayList.filter((list) => {
        const date1 = new Date(list.day);
        const date2 = new Date(date1.toUTCString().slice(0, -4));
        if (
          moment(selectedDate).format("MM/DD/YYYY") ===
          moment(date2).format("MM/DD/YYYY")
        ) {
          return list;
        }
      });
      if (filteredDate.length > 0) {
        const dateUpdated = moment(selectedDate).add(1, "days");
        setSelectedDate(dateUpdated._d);
      }
      // else {
      //   setSelectedDate(new Date());
      // }
      setHolidaysList(obtainedHoliday);
    }
  }, [holidayList, selectedCenter]);

  //set default selected date when there is a weekend
  useEffect(() => {
    const obtainedHoliday1 = allWeekendList.map((list) => {
      const date1 = new Date(list.date);
      return new Date(date1.toUTCString().slice(0, -4));
    });
    const filteredDate1 = allWeekendList.filter((list) => {
      const date1 = new Date(list.date);
      const date2 = new Date(date1.toUTCString().slice(0, -4));
      if (
        moment(selectedDate).format("MM/DD/YYYY") ===
        moment(date2).format("MM/DD/YYYY")
      ) {
        return list;
      }
    });
    if (filteredDate1.length > 0) {
      const dateUpdated = moment(selectedDate).add(1, "days");
      setSelectedDate(dateUpdated._d);
    }
    // else {
    //   setSelectedDate(new Date());
    // }
    setWeekendList(obtainedHoliday1);
  }, [allWeekendList, selectedCenter]);

  let defaultMonth = "";
  if (
    window.location?.search?.includes("appointmentId") &&
    applicationDetails.appointmentDate
  ) {
    defaultMonth = new Date(applicationDetails.appointmentDate);
  }
  if (applicationDetails.appointmentId) {
    defaultMonth = new Date(applicationDetails.appointmentDate);
  } else if (appointmentDetails?.applicantAppointment) {
    defaultMonth = new Date(appointmentDetails.applicantAppointment.date);
  }
  if (
    window.location?.search?.includes("appointmentId") &&
    !applicationDetails.appointmentDate
  ) {
    return null;
  }

  return (
    <>
      <DayPicker
        mode="range"
        max={60}
        className="calender-months"
        selected={selectedDate}
        defaultMonth={defaultMonth}
        disabled={[
          { before: new Date() },
          {
            after: nextMonth._d
          },
          ...selectedDaysToDisable
        ]}
        modifiers={{ holidays: holidaysList, weekend: weekendList }}
        modifiersStyles={getModifierStyles()}
        onDayClick={(day) => {
          handleSelectDate(day);
        }}
        localeUtils={{
          ...LocaleUtils,
          formatWeekdayShort: getFormattedDayTitle
        }}
        onMonthChange={setMonth}
      />
    </>
  );
};

export default CalendarPicker;
