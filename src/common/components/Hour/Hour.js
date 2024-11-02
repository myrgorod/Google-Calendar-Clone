import React, { useState, useEffect, useContext } from "react";
import dayjs from "dayjs";

import EventInformModal from "../EventModal/EventInformModal";
import GlobalContext from "../../context/GlobalContext";

const Hour = ({ hour, events, currentDate }) => {
  // Фільтрація подій для конкретної години
  const { daySelected, checkedCalendars } = useContext(GlobalContext);
  const eventsInHour = events.filter((event) => {
    const [hours, minutes] = event.startHour.split(":");
    const hourD = parseInt(hours, 10);
    return hourD === hour.hour() && checkedCalendars[event.calendarId];
  });

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
  const colorBorderClasses = {
    "#9F2957": "border-l-pink-600",
    "#d90056": "border-l-red-600",
    "#e25d33": "border-l-orange-600",
    "#dfc45a": "border-l-yellow-600",
    "#b8c42f": "border-l-lime-600",
    "#16af6e": "border-l-green-600",
    "#424988": "border-l-indigo-600",
    "#397e49": "border-l-emerald-600",
    "#439bdf": "border-l-blue-600",
    "#4254af": "border-l-blue-600",
    "#6c7ac4": "border-l-indigo-600",
    "#8332a4": "border-l-purple-600",
  };

  const [showInformEventModal, setShowInformEventModal] = useState(false); // Стан для відображення модального вікна
  const [selectedEventForInform, setSelectedEventForInform] = useState(null); // Стан для вибраної події

  const handleEventClick = (event) => {
    console.log("evt", event);
    setSelectedEventForInform(event);
    setShowInformEventModal(true);
  };

  const getTopPosition = (time) => {
    const [hours, minutes] = time.split(":").map(Number);
    return (hours * 60 + minutes) * (64 / 60) + 48; // 64px per hour
  };

  // Стан для поточного часу
  const [currentTime, setCurrentTime] = useState(dayjs());
  console.log("currentTime", currentTime);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(dayjs());
    }, 60000); // Оновлюємо кожну хвилину
    return () => clearInterval(interval);
  }, []);

  // Обчислення позиції для лінії поточного часу
  const getCurrentTimePosition = () => {
    const now = currentTime;
    const startOfDay = dayjs().startOf("day");
    const minutesSinceStartOfDay = now.diff(startOfDay, "minute");
    return (minutesSinceStartOfDay * 64) / 60; // 64px per hour
  };

  // Перевірка чи поточний день відповідає даті компонента
  const isCurrentDay = dayjs(currentDate).isSame(dayjs(), "day");
  const isSelectedDay = dayjs(daySelected).isSame(dayjs(), "day");
  console.log("isCurrentDay", isCurrentDay);
  console.log("daySelected", daySelected);

  return (
    <div className="flex h-16 relative " data-time={hour.format("HH:mm")}>
      <div>
        <span className=" relative  -top-3 bg-white left-0 transform-translate-y-1/2 px-2 w-20">
          {hour.format("HH:mm")}
        </span>
      </div>
      <div className="w-full  border-t border-gray-200">
        {eventsInHour.map((event, index) => (
          <div
            key={index}
            data-title={event.title}
            data-start={event.startHour}
            data-end={event.endHour}
            style={{
              zIndex: 5,
              height:
                getTopPosition(event.endHour) - getTopPosition(event.startHour),
              position: "absolute",
              padding: 5,
              marginLeft: 0,
              opacity: 0.8,
            }}
            onClick={(e) => {
              e.stopPropagation(); // Зупинити подію, щоб не відкривати інше модальне вікно
              handleEventClick(event);
            }}
            className={`absolute ${colorClasses[event.label]} p-2 ml-3 text-black text-xs rounded mb-1 truncate event text-base w-full border-solid border-2 ${colorBorderClasses[event.label]}`}
          >
            {event.title}
            <br />
            {event.startHour}-{event.endHour}
          </div>
        ))}
      </div>
      {showInformEventModal && (
        <EventInformModal
          event={selectedEventForInform}
          onClose={() => setShowInformEventModal(false)}
        />
      )}

      {isCurrentDay && isSelectedDay && (
        <div
          className="absolute left-0 right-0"
          style={{ top: getCurrentTimePosition() - hour.hour() * 64 }}
        >
          <div className="relative">
            <div className="absolute left-16 right-0 h-0.5 bg-red-600"></div>
            <div
              className="absolute w-3 h-3 bg-red-600 rounded-full z-50 -top-1.5"
              style={{ left: 55 }}
            ></div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Hour;
