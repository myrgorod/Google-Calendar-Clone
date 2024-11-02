import React, { useContext } from "react";
import Day from "../Day/Day";
import GlobalContext from "../../context/GlobalContext";

const Month = ({ month }) => {
  const { selectedCalendar } = useContext(GlobalContext);
  return (
    <div className="flex-1 grid grid-cols-7 grid-rows-5 mt-20">
      {month.map((row, i) => (
        <React.Fragment key={i}>
          {row.map((day, idx) => (
            <Day
              day={day}
              key={idx}
              rowIdx={i}
              selectedCalendar={selectedCalendar}
            />
          ))}
        </React.Fragment>
      ))}
    </div>
  );
};

export default Month;
