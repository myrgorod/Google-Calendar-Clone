import React, { useContext, useState } from "react";
import GlobalContext from "../../context/GlobalContext";
import DeleteModal from "../../../ui-kit/DeleteModal/DeleteModal";

const MyCalendarsList = () => {
  const {
    savedCalendars,
    selectedCalendar,
    setSelectedCalendar,
    setShowEditCalendarModal,
    showCalendarDeleteModal,
    setShowCalendarDeleteModal,
    dispatchCalCalendar,
    checkedCalendars,
    setCheckedCalendars,
  } = useContext(GlobalContext);

  const colorClasses = {
    "#9F2957": "customColors-1",
    "#d90056": "customColors-2",
    "#e25d33": "customColors-3",
    "#dfc45a": "customColors-4",
    "#b8c42f": "customColors-5",
    "#16af6e": "customColors-6",
    "#424988": "customColors-7",
    "#397e49": "customColors-8",
    "#439bdf": "customColors-9",
    "#4254af": "customColors-10",
    "#6c7ac4": "customColors-11",
    "#8332a4": "customColors-12",
  };
  const handleEditCalendar = (cal) => {
    setShowEditCalendarModal(true);
    setSelectedCalendar(cal);
  };
  const handleDeleteCalendar = (cal) => {
    if (!cal.isDefault) {
      setShowCalendarDeleteModal(true);
      setSelectedCalendar(cal);
    }
  };

  const handleCheckboxChange = (calendarId) => {
    console.log("calendarId", calendarId);
    setCheckedCalendars((prevCheckedCalendars) => ({
      ...prevCheckedCalendars,
      [calendarId]: !prevCheckedCalendars[calendarId],
    }));
  };

  return (
    <div className=" my-2">
      {savedCalendars.map((cal, checked) => (
        <div
          key={cal.id}
          className="flex justify-between items-center p-2 border-0 my-1 cursor-pointer hover:bg-gray-100 relative "
        >
          <div className="flex items-center cursor:pointer">
            <input
              type="checkbox"
              checked={checkedCalendars[cal.id]} // Control checkbox state
              onChange={() => handleCheckboxChange(cal.id)} // Handle checkbox change
              className={`form-checkbox accent-inherit h-4 w-4 border-${colorClasses[cal.label]} checked:bg-${colorClasses[cal.label]} text-${colorClasses[cal.label]} rounded focus:ring-0 cursor-pointer hover:bg-${colorClasses[cal.label]} focus:bg-${colorClasses[cal.label]} active:bg-${colorClasses[cal.label]}`}
            />

            <span className={"text-gray-600 text-sm pl-2"}>
              {cal.titleCalendar}
            </span>
          </div>
          <div className="flex items-center  opacity-0 hover:opacity-100 transition-opacity duration-300 absolute right-2">
            <button
              onClick={() => handleDeleteCalendar(cal)}
              //   className={`text-gray-600 hover:text-red-600 `}
              className={`text-gray-600 hover:text-red-600 ${savedCalendars[0] === cal ? "hidden" : ""}`}
            >
              <span className="material-icons ">delete</span>
            </button>
            <button
              className="text-gray-600  hover:text-blue-600"
              onClick={() => handleEditCalendar(cal)}
            >
              <span className="material-icons ">edit</span>
            </button>
          </div>
        </div>
      ))}
      {showCalendarDeleteModal && (
        <DeleteModal
          title={selectedCalendar.titleCalendar}
          item={selectedCalendar}
          handleDispatch={(calendar) =>
            dispatchCalCalendar({ type: "delete", payload: calendar })
          }
        />
      )}
    </div>
  );
};

export default MyCalendarsList;
