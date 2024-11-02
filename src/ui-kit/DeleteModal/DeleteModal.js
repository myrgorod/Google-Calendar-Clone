import React, { useContext } from "react";
import GlobalContext from "../../common/context/GlobalContext";
import Button from "../Button/Button";

const DeleteModal = ({ title, handleDispatch, item }) => {
  const { setShowCalendarDeleteModal, setShowEventDeleteModal } =
    useContext(GlobalContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    handleDispatch(item);
    setShowCalendarDeleteModal(false) || setShowEventDeleteModal(false);
    console.log("Deleted calendar:", item.titleCalendar || item.title);
  };

  return (
    <div className="h-screen  w-full fixed left-0 top-0 flex justify-center items-center">
      <form
        className="bg-white rounded-lg shadow-2xl w-1/3"
        onSubmit={handleSubmit}
      >
        <header className="bg-gray-100 px-4 py-2 flex justify-between items-center border-b border-gray-200">
          <span className=" text-gray-800 text-2xl"> Delete {title} </span>
          <button
            onClick={() =>
              setShowCalendarDeleteModal(false) ||
              setShowEventDeleteModal(false)
            }
          >
            <span className="material-icons-outlined text-gray-400">
              {" "}
              close
            </span>
          </button>
        </header>
        <div className=" flex items-center justify-center px-6 py-5 gap-7 text-gray-500 text-base">
          <span>
            Are you sure you want to delete {title} ? You'll no longer have
            access to this calendar and its events.
          </span>
        </div>
        <footer className="flex justify-end items-center px-4 py-2">
          <Button
            className="mr-2"
            variant={"secondary"}
            label={"Cancel"}
            size={"sm"}
            icon={false}
            isDisabled={false}
            onClick={() =>
              setShowCalendarDeleteModal(false) ||
              setShowEventDeleteModal(false)
            }
          />
          <Button
            label={"Delete"}
            variant={"primary"}
            size={"sm"}
            icon={false}
            isDisabled={false}
          />
        </footer>
      </form>
    </div>
  );
};

export default DeleteModal;
