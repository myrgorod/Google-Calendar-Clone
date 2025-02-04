import dayjs from "dayjs";
import React from "react";

const GlobalContext = React.createContext({
  monthIndex: 0,
  setMonthIndex: (index) => {},
  smallCalendarMonth: null,
  setSmallCalendarMonth: (index) => {},
  daySelected: null,
  setDaySelected: (day) => {},
  showEventModal: false,
  setShowEventModal: () => {},
  showEventInformModal: false,
  setShowEventInformModal: () => {},
  showEventEditModal: false,
  setShowEventEditModal: () => {},
  showCreateCalendarModal: false,
  setShowCreateCalendarModal: () => {},
  showEditCalendarModal: false,
  setShowEditCalendarModal: () => {},
  showEventDeleteModal: false,
  setShowEventDeleteModal: () => {},
  showCalendarDeleteModal: false,
  setShowCalendarDeleteModal: () => {},
  view: "Month",
  setView: () => {},
  valueRepeat: 10,
  setValueRepeat: () => {},
  selectedLabel: "",
  setSelectedLabel: () => {},
  dispatchCalCalendar: ({ type, payload }) => {},
  dispatchCalEvent: ({ type, payload }) => {},
  savedEvents: [],
  selectedEvent: null,
  setSelectedEvent: () => {},
  selectedCalendar: null,
  setSelectedCalendar: () => {},
  lables: [],
  setLables: () => {},
  dateRange: [dayjs(), dayjs()],
  setDateRange: () => {},
  startHour: "08:00",
  setStartHour: () => {},
  endHour: "17:00",
  setEndHour: () => {},
  dayEvents: [],
  setDayEvents: () => {},
  showInformEventModal: false,
  setShowInformEventModal: () => {},
  selectedEventForInform: null,
  setSelectedEventForInform: () => {},
  checkedCalendars: {}, setCheckedCalendars: () => {}
 
});
export default GlobalContext;
