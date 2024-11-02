import React, { useContext, useState, useEffect } from "react";
import ColorPickerContainer from "../../../ui-kit/ColorPicker/ColorPickerContainer";
import Button from "../../../ui-kit/Button/Button";
import GlobalContext from "../../context/GlobalContext";

const EditMyCalendarsModal = () => {
  const {
    selectedLabel,
    setSelectedLabel,
    dispatchCalCalendar,
    setShowEditCalendarModal,
    selectedCalendar,
    setSavedCalendars,
  } = useContext(GlobalContext);

  useEffect(() => {
    if (selectedCalendar) {
      setTitleCalendar(selectedCalendar.titleCalendar);
      setSelectedLabel(selectedCalendar.label);
    }
  }, [selectedCalendar, setSelectedLabel]);

  const [titleCalendar, setTitleCalendar] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedCalendar = {
      ...selectedCalendar,
      titleCalendar,
      label: selectedLabel,
    };

    dispatchCalCalendar({ type: "update", payload: updatedCalendar });
    setSavedCalendars((prevCalendars) =>
      prevCalendars.map((cal) =>
        cal.id === updatedCalendar.id ? updatedCalendar : cal
      )
    );
    setShowEditCalendarModal(false);
  };

  return (
    <div className="h-screen w-full z-50 fixed left-3 top-20 flex justify-start items-center">
      <form
        className="bg-white rounded-lg shadow-2xl w-72"
        onSubmit={handleSubmit}
      >
        <header className="bg-gray-100  px-4 py-2 flex justify-between items-center">
          <span className="text-gray-600 font-bold text-2xl">
            Edit calendar
          </span>
          <button
            className="pt-2"
            onClick={() => setShowEditCalendarModal(false)}
          >
            <span className="material-icons-outlined text-gray-400 ">
              close
            </span>
          </button>
        </header>
        <div className="p-3">
          <div className="grid grid-cols-7 items-end gap-y-5">
            <span className="material-icons-outlined text-gray-400 pt-2  text-gray-600 text-2xl  pb-1 w-full">
              title
            </span>

            <div className="col-span-6">
              <span className="text-sm text-gray-700">Title</span>
              <input
                type="text"
                name="title"
                placeholder="Enter title"
                value={titleCalendar}
                required
                className="pt-2 border-0 text-gray-600 text-xl font-semibold pb-2 w-full border-b-2 border-gray-200 focus:outline-none focus:ring-0 focus:border-gray-500 pl-0"
                onChange={(e) => setTitleCalendar(e.target.value)}
              />
            </div>
            <span className="material-icons-outlined text-gray-400 text-gray-600 text-2xl pb-9 w-full">
              palette
            </span>
            <div className="grid grid-cols-7 items-end gap-y-5">
              <div className="col-span-6">
                <ColorPickerContainer selectedLabel={selectedCalendar.label} />
              </div>
            </div>
          </div>
        </div>

        <footer className="flex justify-end p-3  ">
          <Button
            data-testid="button"
            variant="primary"
            icon={false}
            size="sm"
            type="submit"
            label="Save"
          />
        </footer>
      </form>
    </div>
  );
};

export default EditMyCalendarsModal;
