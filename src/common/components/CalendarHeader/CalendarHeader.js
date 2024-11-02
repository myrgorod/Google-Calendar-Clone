import React, { useContext } from "react";
import GlobalContext from "../../context/GlobalContext";
import logo from "../../../resources/assets/logo.png";
import Button from "../../../ui-kit/Button/Button";
import dayjs from "dayjs";
import Dropdown from "../../../ui-kit/Dropdown/Dropdown";

const CalendarHeader = () => {
  const { monthIndex, setMonthIndex, setDaySelected } =
    useContext(GlobalContext);

  const handlePrevMonth = () => {
    setMonthIndex(monthIndex - 1);
  };
  const handleNextMonth = () => {
    setMonthIndex(monthIndex + 1);
  };
  const handleReset = () => {
    setMonthIndex(
      monthIndex === dayjs().month()
        ? monthIndex + Math.random()
        : dayjs().month()
    );

    setDaySelected(dayjs());
  };

  return (
    <header className=" flex justify-between items-center z-20 fixed top-0 left-0 right-0  bg-white">
      <div className="px-4 py-2 flex items-center  ">
        <img src={logo} alt="logo" className="mr-2 " />
        <h1 className="mr-2 text-2xl font-normal text-decoration-color: #323749;">
          WebCalendar
        </h1>
        <Button
          onClick={handleReset}
          variant="primary"
          size="md"
          label="Today"
          icon={false}
          className="mx-2"
        />
        <button
          className="border border-gray-200 rounded-lg flex text-center mx-1"
          onClick={handlePrevMonth}
        >
          <span className="material-icons-outlined cursor-pointer text-gray-600 mx-2 my-2">
            chevron_left
          </span>
        </button>
        <button
          className="border border-gray-200 rounded-lg flex text-center mx-1"
          onClick={handleNextMonth}
        >
          <span className="material-icons-outlined cursor-pointer text-gray-600 mx-2 my-2">
            chevron_right
          </span>
        </button>
        <h2 className="ml-4 text-xl  text-gray-500 font-bold">
          {dayjs(new Date(dayjs().year(), monthIndex)).format("MMMM YYYY")}
        </h2>
      </div>
      <div className="mr-20">
        <Dropdown className="" open={true} options={["Day", "Month"]} />
      </div>
    </header>
  );
};

export default CalendarHeader;
