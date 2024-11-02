import React, { useContext } from "react";
import Button from "../../../ui-kit/Button/Button";
import GlobalContext from "../../context/GlobalContext";

const CreateEventButton = () => {
  const { setShowEventModal } = useContext(GlobalContext);
  return (
    <Button
      className=""
      label="Create"
      onClick={() => setShowEventModal(true)}
      variant="primary"
      size="lg"
      icon
      isDisabled={false}
    />
  );
};

export default CreateEventButton;
