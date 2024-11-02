import Dropdown from "./Dropdown";
const options = ["Day", "Month"];

export default {
  title: "Component/Dropdown",
  component: Dropdown,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  argTypes: {
    onChange: { action: "onChange" },
    options: {
      description: "Set required options",
    },
  },
};
const Template = (args) => <Dropdown {...args} />;
export const DropdownDefault = Template.bind({});
DropdownDefault.args = {
  open: true,
  options: options,
};
