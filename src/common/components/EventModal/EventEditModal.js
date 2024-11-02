import React, { useContext, useState, useEffect } from "react";
import dayjs from "dayjs";
import GlobalContext from "../../context/GlobalContext";
import BaseDatePicker from "../../../ui-kit/DatePicker/DatePicker";
import CheckboxLabels from "../../../ui-kit/CheckBox/CheckBox";
import UnstyledSelectControlled from "../../../ui-kit/Select/Select";
import Button from "../../../ui-kit/Button/Button";
import SelectCalendars from "../../../ui-kit/Select/SelectCalendar";
import { CustomTextarea } from "../../../ui-kit/Textarea/CustomTextarea";
import CustomMultiInputTimeRangeField from "../../../ui-kit/TimePicker/TimePicker_Multi";

const EventEditModal = () => {
  const {
    daySelected,
    setDaySelected,
    dispatchCalEvent,
    savedCalendars,
    selectedCalendar,
    setSelectedCalendar,

    setShowEventEditModal,
    selectedEvent,
  } = useContext(GlobalContext);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [calendarTitle, setCalendarTitle] = useState("");
  const [calendarLabel, setCalendarLabel] = useState("");
  const [startHour, setStartHour] = useState("08:00");
  const [endHour, setEndHour] = useState("17:00");
  const [valueRepeat, setValueRepeat] = useState(10);

  useEffect(() => {
    if (selectedEvent) {
      setTitle(selectedEvent.title || "");
      setDescription(selectedEvent.description || "");
      setStartHour(selectedEvent.startHour || "08:00");
      setEndHour(selectedEvent.endHour || "17:00");
      setValueRepeat(selectedEvent.repeat || 10);
      setDaySelected(dayjs(selectedEvent.day) || dayjs());
      const calendar = savedCalendars.find(
        (calendar) => calendar.titleCalendar === selectedEvent.calTitle
      );
      setSelectedCalendar(calendar || savedCalendars[0]);
    }
  }, [selectedEvent, savedCalendars, setSelectedCalendar, setDaySelected]);

  useEffect(() => {
    if (!selectedCalendar && savedCalendars.length > 0) {
      setSelectedCalendar(savedCalendars[0]);
    }
  }, [savedCalendars, selectedCalendar, setSelectedCalendar]);

  useEffect(() => {
    if (selectedCalendar) {
      const { titleCalendar, label } = selectedCalendar;
      setCalendarTitle(titleCalendar || "");
      setCalendarLabel(label || "");
    }
  }, [selectedCalendar]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const { label, titleCalendar } = selectedCalendar;

    const updatedCalendarEvent = {
      ...selectedEvent,
      title,
      description,
      label: label,
      calTitle: titleCalendar,
      day: daySelected.valueOf(),
      startHour: startHour,
      endHour: endHour,
      repeat: valueRepeat,
    };

    dispatchCalEvent({ type: "update", payload: updatedCalendarEvent });
    setShowEventEditModal(false);
  };

  return (
    <div className="h-screen w-full z-50 fixed left-0 top-0 flex justify-center items-center">
      <form
        className="bg-white rounded-lg p-5 shadow-2xl w-2/5"
        onSubmit={handleSubmit}
      >
        <header className="bg-white px-4 py-2 flex justify-between items-center border-0 text-gray-600 text-xl font-semibold pb-2 w-full border-b-2 border-gray-200 ">
          <span className="text-gray-600 font-bold text-2xl">Edit event</span>
          <button onClick={() => setShowEventEditModal(false)}>
            <span className="material-icons-outlined text-gray-400">close</span>
          </button>
        </header>
        <div className="p-3">
          <div className="grid grid-cols-7 items-end gap-y-7">
            <span className="material-icons-outlined text-gray-400 pt-3 text-gray-600 text-2xl pb-2 w-full">
              title
            </span>
            <div className="col-span-6">
              <span className="text-sm text-gray-700">Title</span>
              <input
                type="text"
                name="title"
                placeholder="Enter title"
                value={title}
                required
                className="pt-3 border-0 text-gray-600 text-xl font-semibold pb-2 w-full border-b-2 border-gray-200 focus:outline-none focus:ring-0 focus:border-gray-500 pl-0"
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            <span className="material-icons-outlined text-gray-400 pt-3 text-gray-600 text-2xl pb-2 w-full">
              schedule
            </span>
            <div className="col-span-3 border-b-2 mr-2 border-gray-400">
              <span className="text-sm text-gray-700">Date</span>
              <BaseDatePicker
                selectedDate={daySelected}
                onChange={(date) => setDaySelected(dayjs(date))}
                className="pt-3 border-0 text-gray-600 text-xl font-semibold pb-2 w-full border-b-2 border-gray-200 focus:outline-none focus:ring-0 focus:border-gray-500 pl-0"
              />
            </div>
            <div className="col-span-3 border-b-2 border-gray-400">
              <div className="col-span-3 border-b-2">
                <CustomMultiInputTimeRangeField
                  startHour={startHour}
                  setStartHour={setStartHour}
                  endHour={endHour}
                  setEndHour={setEndHour}
                />
              </div>
            </div>
            <div></div>
            <div className="col-span-1">
              <CheckboxLabels />
            </div>
            <div className="col-span-3 border-b-2 border-gray-400">
              <UnstyledSelectControlled
                valueRepeat={valueRepeat}
                setValueRepeat={setValueRepeat}
              />
            </div>
          </div>
          <div className="grid grid-cols-7 items-end gap-y-7">
            <span className="material-icons-outlined text-gray-400 pt-3 text-gray-600 text-2xl pb-2 w-full">
              calendar_today
            </span>
            <div className="col-span-6 pt-3 pb-2 text-2xl border-b-2 border-gray-500">
              <span className="text-sm text-gray-700">Calendar</span>
              <span className="text-sm text-gray-700">
                <SelectCalendars
                  selectedCalendar={selectedCalendar}
                  setSelectedCalendar={setSelectedCalendar}
                />
              </span>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-7 items-end gap-y-7 px-3">
          <div className="material-icons-outlined text-gray-400 pt-3 text-gray-600 text-2xl pb-2 w-full block">
            <span>notes</span>
          </div>
          <div className="col-span-6 pt-3 pb-2 text-2xl border-b-2 border-gray-500">
            <span className="text-sm text-gray-700">Description</span>
            <CustomTextarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
        </div>
        <footer className="flex justify-end p-3">
          <Button
            type="submit"
            isIcon={false}
            variant="primary"
            label="Submit"
            size="sm"
            isDisabled={false}
          />
        </footer>
      </form>
    </div>
  );
};

export default EventEditModal;
