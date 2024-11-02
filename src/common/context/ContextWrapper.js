import React, { useEffect, useReducer, useState } from "react";
import GlobalContext from "./GlobalContext";
import dayjs from "dayjs";

const savedCalendarsReducer = (state, { type, payload }) => {
  switch (type) {
    case "push":
      return [...state, payload];
    case "update":
      return state.map((calend) =>
        calend.id === payload.id ? payload : calend
      );
    case "delete":
      // Заборона видалення першого календаря
      if (state[0].id === payload.id) {
        return state; // Повертаємо незмінений стан
      }
      return state.filter((calend) => calend.id !== payload.id);
    case "set":
      return Array.isArray(payload) ? payload : state; // Додаємо перевірку
    default:
      throw new Error();
  }
};

const initCalendars = () => {
  const storageCalendars = localStorage.getItem("savedCalendars");
//   console.log("storageCalendars", storageCalendars);

  // If no calendars are stored, initialize with a default calendar
  if (!storageCalendars) {
    const defaultCalendars = [
      {
        titleCalendar: "Calendar 1",
        label: "#d90056",
        isDefault: true,
        id: "1",
      },
    ];
    localStorage.setItem("savedCalendars", JSON.stringify(defaultCalendars));
    return defaultCalendars;
  }

  try {
    // Parse the JSON string to an array
    const parsedCalendars = JSON.parse(storageCalendars);
    return Array.isArray(parsedCalendars) ? parsedCalendars : [];
  } catch (error) {
    console.error("Failed to parse savedCalendars from localStorage", error);
    return [];
  }
};

const savedEventsReducer = (state, { type, payload }) => {
  switch (type) {
    case "push":
      return [...state, payload];
    case "update":
      return state.map((evt) => (evt.id === payload.id ? payload : evt));
    case "delete":
      return state.filter((evt) => evt.id !== payload.id);

    default:
      throw new Error();
  }
};

const initEvents = () => {
  const storageEvents = localStorage.getItem("savedEvents");
  const parsedEvents = storageEvents ? JSON.parse(storageEvents) : [];
  return parsedEvents;
};

const ContextWrapper = (props) => {
  const [monthIndex, setMonthIndex] = useState(dayjs().month());
  const [smallCalendarMonth, setSmallCalendarMonth] = useState(null);
  const [daySelected, setDaySelected] = useState(dayjs());
  const [showEventModal, setShowEventModal] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [showEventInformModal, setShowEventInformModal] = useState(false);
  const [showEventEditModal, setShowEventEditModal] = useState(false);
  const [selectedCalendar, setSelectedCalendar] = useState(null);
  const [showCreateCalendarModal, setShowCreateCalendarModal] = useState(false);
  const [showEditCalendarModal, setShowEditCalendarModal] = useState(false);
  const [showEventDeleteModal, setShowEventDeleteModal] = useState(false);
  const [showCalendarDeleteModal, setShowCalendarDeleteModal] = useState(false);
  const [view, setView] = useState(false);
  const [openDay, setOpenDay] = useState(false);
  const [openWeek, setOpenWeek] = useState(false);
  const [selectedLabel, setSelectedLabel] = useState("");
  const [lables, setLables] = useState([]);
  const [valueRepeat, setValueRepeat] = useState(10);
  const [dayEvents, setDayEvents] = useState([]);
  const [savedEvents, dispatchCalEvent] = useReducer(
    savedEventsReducer,
    [],
    initEvents
  );
  const [savedCalendars, dispatchCalCalendar] = useReducer(
    savedCalendarsReducer,
    [],
    initCalendars
  );
  const [startHour, setStartHour] = useState("08:00");
  const [endHour, setEndHour] = useState("17:00");

  const [showInformEventModal, setShowInformEventModal] = useState(false); // Стан для відображення модального вікна
  const [selectedEventForInform, setSelectedEventForInform] = useState(null); // Стан для вибраної події


   // Track checked state for each calendar
   const [checkedCalendars, setCheckedCalendars] = useState(
    savedCalendars.reduce((acc, calendar) => {
      acc[calendar.id] = true; // Initialize all calendars as checked
      return acc;
    }, {})
  );


  useEffect(() => {
    localStorage.setItem("savedCalendars", JSON.stringify(savedCalendars));
  }, [savedCalendars]);

  useEffect(() => {
    setLables((prevLables) => {
      return [...new Set(savedCalendars.map((cal) => cal.label))].map(
        (label) => {
          const currentLabel = prevLables.find((lbl) => lbl.label === label);
          return {
            label,
            currentLabel,
          };
        }
      );
    });
  }, [savedCalendars]);

  useEffect(() => {
    localStorage.setItem("savedEvents", JSON.stringify(savedEvents));
  }, [savedEvents]);

  useEffect(() => {
    if (smallCalendarMonth !== null) {
      setMonthIndex(smallCalendarMonth);
    }
  }, [smallCalendarMonth]);

  // Додаємо функцію для оновлення стану savedCalendars
  const setSavedCalendars = (calendars) => {
    dispatchCalCalendar({ type: "set", payload: calendars });
  };

  return (
    <GlobalContext.Provider
      value={{
        monthIndex,
        setMonthIndex,
        smallCalendarMonth,
        setSmallCalendarMonth,
        setDaySelected,
        daySelected,
        showEventModal,
        setShowEventModal,
        showEventInformModal,
        setShowEventInformModal,
        view,
        setView,
        openDay,
        setOpenDay,
        openWeek,
        setOpenWeek,
        valueRepeat,
        setValueRepeat,
        showCreateCalendarModal,
        setShowCreateCalendarModal,
        showEditCalendarModal,
        setShowEditCalendarModal,
        showEventEditModal,
        setShowEventEditModal,
        showEventDeleteModal,
        setShowEventDeleteModal,
        showCalendarDeleteModal,
        setShowCalendarDeleteModal,
        dispatchCalCalendar,
        selectedLabel,
        setSelectedLabel,
        dispatchCalEvent,
        savedEvents,
        savedCalendars,
        selectedEvent,
        setSelectedEvent,
        selectedCalendar,
        setSelectedCalendar,
        setSavedCalendars,
        setLables,
        lables,
        startHour,
        setStartHour,
        endHour,
        setEndHour,
        dayEvents,
        setDayEvents,
        showInformEventModal,
        setShowInformEventModal,
        selectedEventForInform,
        setSelectedEventForInform,
		checkedCalendars, setCheckedCalendars
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};

export default ContextWrapper;
