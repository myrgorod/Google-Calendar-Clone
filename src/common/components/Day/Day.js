import dayjs from "dayjs";
import React, { useContext, useEffect, useState } from "react";
import GlobalContext from "../../context/GlobalContext";
import InformEvent from "../EventModal/EventInformModal";

const Day = ({ day, rowIdx }) => {
  const [dayEvents, setDayEvents] = useState([]);
  const { setDaySelected, setShowEventModal, savedEvents, checkedCalendars } =
    useContext(GlobalContext);
  const [showInformEventModal, setShowInformEventModal] = useState(false); // Стан для відображення модального вікна
  const [selectedEventForInform, setSelectedEventForInform] = useState(null); // Стан для вибраної події

  const colorClasses = {
    "#9F2957": "bg-pink-200",
    "#d90056": "bg-red-200",
    "#e25d33": "bg-orange-200",
    "#dfc45a": "bg-yellow-200",
    "#b8c42f": "bg-lime-200",
    "#16af6e": "bg-green-200",
    "#424988": "bg-indigo-200",
    "#397e49": "bg-emerald-200",
    "#439bdf": "bg-blue-200",
    "#4254af": "bg-blue-200",
    "#6c7ac4": "bg-indigo-200",
    "#8332a4": "bg-purple-200",
  };
// console.log("SavedEvents", savedEvents);
// console.log("SavedCalendars", savedCalendars);
  useEffect(() => {
    const events = savedEvents.filter(
      (evt) => dayjs(evt.day).format("DD-MM-YY") === day.format("DD-MM-YY")&& checkedCalendars[evt.calendarId]
    );
    setDayEvents(events);
  }, [savedEvents, day, checkedCalendars]);

  const getCurrentDayClass = () => {
    return day.format("DD-MM-YY") === dayjs().format("DD-MM-YY")
      ? "bg-green-600 text-white rounded-full w-7 "
      : "";
  };

  // Кількість подій, які ми відображаємо
  const displayedEvents = dayEvents.slice(0, 3);
  // Кількість невідкритих подій
  const remainingEventsCount = dayEvents.length - displayedEvents.length;

  const handleEventClick = (evt) => {
    // console.log("evt", evt);
    setSelectedEventForInform(evt);
    setShowInformEventModal(true);
  };

  return (
    <div className="border border-gray-200 flex flex-col ">
      <header className="flex flex-col items-center">
        {rowIdx === 0 && (
          <p className="text-xs mt-1">{day.format("ddd").toUpperCase()}</p>
        )}
        <p className={`text-xs p-1 my-1 text-center ${getCurrentDayClass()}`}>
          {day.format("D")}
        </p>
      </header>
      <div
        className="flex-1 cursor-pointer"
        onClick={() => {
          setDaySelected(day);
          setShowEventModal(true);
        }}
      >
        {displayedEvents.map((evt, idx) => (
          <div
            key={idx}
            data-time={evt.startHour}
            onClick={(e) => {
              e.stopPropagation(); // Зупинити подію, щоб не відкривати інше модальне вікно
              handleEventClick(evt);
            }}
            className={` ${colorClasses[evt.label]} p-1 ml-3 text-black text-xs rounded mb-1 truncate event `}
          >
            {evt.title}
          </div>
        ))}
        {remainingEventsCount > 0 && (
          <div className="text-gray-500 text-xs ml-3">
            {`+${remainingEventsCount} more`}
          </div>
        )}
      </div>
      {showInformEventModal && selectedEventForInform && (
        <InformEvent
          event={selectedEventForInform}
          onClose={() => setShowInformEventModal(false)}
        />
      )}
    </div>
  );
};

export default Day;
