import React, { useContext } from "react";
import GlobalContext from "../../context/GlobalContext";
import { BiSolidSquareRounded as Icon } from "react-icons/bi";
import DeleteModal from "../../../ui-kit/DeleteModal/DeleteModal";

const EventInformModal = ({ event, onClose }) => {
  const {
    dispatchCalEvent,
    selectedEvent,
    setSelectedEvent,
    setShowEventDeleteModal,
    showEventDeleteModal,
    setShowEventEditModal,
  } = useContext(GlobalContext);

  const handleDeleteEvent = () => {
    setShowEventDeleteModal(true);
    setSelectedEvent(event);
  };
  const handleDispatchDelete = (event) => {
    dispatchCalEvent({ type: "delete", payload: event });
    setShowEventDeleteModal(false);
    onClose();
  };

  const handleEditEvent = (event) => {
    setShowEventEditModal(true);
    setSelectedEvent(event);
    onClose();
    console.log("EventEdit", event.title);
  };

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  const formatDate = (date) => {
    const options = { weekday: "long", month: "long", day: "numeric" };
    const formattedDate = new Date(date).toLocaleDateString("en-US", options);
    const [weekday, monthAndDay] = formattedDate.split(", ");
    return `${capitalizeFirstLetter(weekday)}, ${monthAndDay}`;
  };
  const repeatOptions = {
    10: "Does not repeat",
    20: "Daily",
    30: "Weekly on Thursday",
    40: "Monthly",
    50: "Annually",
  };
  return (
    <div className="h-screen w-full z-50 fixed left-0 top-0 flex justify-center items-center ">
      <div className="bg-white rounded-lg p-5 shadow-2xl w-2/5">
        <header className="bg-white px-4 py-2 flex justify-between  items-center  border-0 text-gray-400 text-xl font-semibold pb-2 w-full border-b-2 border-gray-200 ">
          <span className="text-gray-600 font-bold text-2xl">
            Event Information{" "}
          </span>
          <div className="flex items-center right-2">
            <button
              className="text-gray-500 mx-2  "
              onClick={() => handleEditEvent(event)}
            >
              <span className="material-icons ">edit</span>
            </button>
            <button onClick={handleDeleteEvent} className="text-gray-500 mx-2 ">
              <span className="material-icons ">delete</span>
            </button>
            <button onClick={onClose}>
              <span className="material-icons-outlined text-gray-400  ">
                close
              </span>
            </button>
          </div>
        </header>
        <div className="px-3">
          <div className="grid grid-cols-7 items-end gap-y-7">
            <span className="material-icons-outlined text-gray-400 pt-3  text-gray-600 text-base  pb-2 w-full">
              title
            </span>

            <div className="col-span-6 pt-3 pb-2">
              <h2 className="text-2xl">{event.title}</h2>
            </div>
            <span className="material-icons-outlined text-gray-400 pt-3  text-gray-600 text-2xl  pb-2 w-full">
              schedule
            </span>
            <div className="col-span-6 pt-3 pb-2 text-base ">
              <span className=" text-gray-700 mr-2">
                {formatDate(event.day)}
              </span>
              <span className=" text-gray-700">{event.startHour}</span>
              <span>-</span>
              <span className=" text-gray-700 mr-2">{event.endHour}</span>
              <span className=" text-gray-700">
                {repeatOptions[event.repeat]}
              </span>
            </div>
          </div>

          <div className="grid grid-cols-7 items-end gap-y-7 ">
            <span className="material-icons-outlined text-gray-400 pt-3  text-gray-600 text-2xl  pb-2 w-full">
              calendar_today
            </span>

            <div className="col-span-6 pt-3 pb-2 text-base ">
              <div className="flex flex-start py-1 items-center">
                <Icon color={event.label} className="w-4 h-4 mr-2" />
                <span className="text-sm text-gray-700">{event.calTitle}</span>
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-7 items-end gap-y-7 px-3 ">
          <div className="material-icons-outlined text-gray-400 pt-3  text-gray-600 text-2xl  pb-2 w-full block ">
            <span>notes</span>
          </div>

          <div className="col-span-6  pb-3 text-base ">
            <span className="text-base text-gray-700  pb-3">
              {event.description}
            </span>
          </div>
        </div>
      </div>
      {showEventDeleteModal && (
        <DeleteModal
          title={selectedEvent.title}
          item={selectedEvent}
          handleDispatch={handleDispatchDelete}
        />
      )}
    </div>
  );
};

export default EventInformModal;
