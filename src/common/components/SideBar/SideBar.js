import React, { useContext } from "react";
import CreateEventButton from "../CreateEventButton/CreateEventButton";
import SmallCalendar from "../SmallCalendar/SmallCalendar";
import MyCalendars from "../MyCalendars/MyCalendars";
import MyCalendarsModal from "../MyCalendars/MyCalendarsModal";
import GlobalContext from "../../context/GlobalContext";
import MyCalendarsList from "../MyCalendars/MyCalendarsList";

const SideBar = () => {
  const { showCreateCalendarModal } = useContext(GlobalContext);
  return (
    <aside className="px-5 pt-20">
      {showCreateCalendarModal && <MyCalendarsModal />}
      <CreateEventButton />
      <SmallCalendar />
      <MyCalendars />
      <MyCalendarsList />
    </aside>
  );
};

export default SideBar;
