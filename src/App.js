import React, { useState, useContext, useEffect } from "react";
import GlobalContext from "./common/context/GlobalContext";
import EventModal from "./common/components/EventModal/EventModal";
import MyCalendarsModal from "./common/components/MyCalendars/MyCalendarsModal";
import EditMyCalendarsModal from "./common/components/MyCalendars/EditMyCalendarsModal";
import {
  getMonth,
  getWeek,
  getWeekByHours,
  getDayHours,
} from "./common/utilities/util";
import "./index.css";

import CalendarHeader from "./common/components/CalendarHeader/CalendarHeader";
import SideBar from "./common/components/SideBar/SideBar";
import Month from "./common/components/Month/Month";
import DayHours from "./common/components/DayHours/DayHours";
import DeleteModal from "./ui-kit/DeleteModal/DeleteModal";
import EventInformModal from "./common/components/EventModal/EventInformModal";
import EventEditModal from "./common/components/EventModal/EventEditModal";

function App() {
  const [currentMonth, setCurrentMonth] = useState(getMonth());
  const {
    monthIndex,
    showEventModal,
    view,
    setView,
    showCreateCalendarModal,
    showEditCalendarModal,
    showDeleteModal,
    showEventInformModal,
    showEventEditModal,
  } = useContext(GlobalContext);
  const [currentDayHours, setCurrentDayHours] = useState(getDayHours());

  useEffect(() => {
    setCurrentMonth(getMonth(monthIndex));
  }, [monthIndex]);
  useEffect(() => {
    setView("Month");
  }, [setView]);

  return (
    <React.Fragment>
      {showCreateCalendarModal && <MyCalendarsModal />}
      {showEditCalendarModal && <EditMyCalendarsModal />}
      {showEventModal && <EventModal />}
      {showDeleteModal && <DeleteModal />}
      {showEventInformModal && <EventInformModal />}
      {showEventEditModal && <EventEditModal />}
      <div className="h-screen flex flex-col">
        <CalendarHeader />
        <div className="flex flex-1">
          <SideBar />
          {view === "Month" && <Month month={currentMonth} />}
          {view === "Day" && <DayHours dayHours={currentDayHours} />}
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;
