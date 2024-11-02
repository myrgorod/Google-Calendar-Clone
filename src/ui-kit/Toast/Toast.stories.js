import Toast from "./Toast";

export default {
  title: "Component/Toast",
  component: Toast,
  tags: ["autodocs"],

  parameters: {
    componentSubtitle: "A simple toast component",
    docs: {
      description: {
        component: "This component displays a toast message.",
      },
    },
  },
  argTypes: {
    onClick: { action: "onClick" },
    timeout: {
      control: "number",
      description: "Set time of show Toast",
    },
    msg: {
      control: "text",
      description: "The Information or Warning Message",
    },
  },
};

export const Default = {
 
  args: {
    timeout: 3000,
    msg: "Event deleted",
  },
};
