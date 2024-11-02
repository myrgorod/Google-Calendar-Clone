import React, { useContext } from "react";
import GlobalContext from "../../context/GlobalContext";

const MyCalendars = () => {
  const { setShowCreateCalendarModal } = useContext(GlobalContext);

  return (
    <div className="mt-9 border">
      <header className="flex items-center justify-between">
        <p className="text-gray-500 font-bold px-1">My calendars</p>
        <button
          className="pt-1"
          onClick={() => setShowCreateCalendarModal(true)}
        >
          <span className="material-icons-outlined cursor-pointer  text-gray-600 mx-2 ">
            add
          </span>
        </button>
      </header>
    </div>
  );
};

export default MyCalendars;
