import React, { useContext } from "react";
import Hour from "../Hour/Hour";
import GlobalContext from "../../context/GlobalContext";
import dayjs from "dayjs";

const DayHours = () => {
  const { daySelected, savedEvents } = useContext(GlobalContext);

  // Масив з усіма 24 годинами дня
  const dayHours = Array.from({ length: 24 }, (_, i) =>
    dayjs().hour(i).minute(0).second(0)
  );

  // Фільтрація подій за обраною датою
  const filteredEvents = savedEvents.filter((event) => {
    const eventDate = dayjs(event.day);
    return eventDate.isSame(daySelected, "day");
  });

  return (
    <div className="grid grid-rows-24 w-full mt-20 relative">
      <p className="pt-3 border-0 text-gray-600 text-xl font-semibold pb-2 focus:outline-none focus:ring-0 focus:border-gray-500 pl-0">
        {daySelected.format("dddd, DD")}
      </p>
      {dayHours.map((hour, i) => (
        <React.Fragment key={i}>
          <Hour hour={hour} events={filteredEvents} />
        </React.Fragment>
      ))}
    </div>
  );
};

export default DayHours;
