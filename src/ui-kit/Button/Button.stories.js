import Button from "./Button";

export default {
  title: "Component/Button",
  component: Button,
  tags: ["autodocs"],
  argTypes: {
    onClick: { action: "onClick" },
    variant: {
      options: ["primary", "secondary"],
      control: { type: "radio" },
      description: "Choose any of two options to style variant of button",
    },
    size: {
      options: ["sm", "md", "lg"],
      control: { type: "radio", isRequired: true },
      description: "You can change size of button choosing one of size samles",
    },

    label: {
      control: "text",
      table: {
        defaultValue: { summary: "Button" },
      },
      description: "Other options include: Press Enter, Enter, Go!",
    },
    icon: {
      description: "Choose. if you need an icon",
    },
  },
};

const Template = (args) => <Button {...args} />;

export const ButtonPrimaryDefault = Template.bind({});
ButtonPrimaryDefault.args = {
  label: "Button",
  variant: "primary",
  size: "md",
  icon: false,
  isDisabled: false,
};

export const ButtonPrimaryIconDefault = Template.bind({});
ButtonPrimaryIconDefault.args = {
  label: "Button",
  variant: "primary",
  size: "md",
  icon: true,
  isDisabled: false,
};
export const ButtonPrimaryDisabled = Template.bind({});
ButtonPrimaryDisabled.args = {
  label: "Button",
  variant: "primary",
  size: "md",
  icon: false,
  isDisabled: true,
};
export const ButtonPrimaryIconDisabled = Template.bind({});
ButtonPrimaryIconDisabled.args = {
  label: "Button",
  variant: "primary",
  size: "md",
  icon: true,
  isDisabled: true,
};

export const ButtonPrimaryHover = Template.bind({});
ButtonPrimaryHover.args = {
  label: "Button",
  variant: "primary",
  size: "md",
  icon: false,
  isDisabled: false,
};
export const ButtonPrimaryIconHover = Template.bind({});
ButtonPrimaryIconHover.args = {
  label: "Button",
  variant: "primary",
  size: "md",
  icon: true,
  isDisabled: false,
};
export const ButtonPrimaryActive = Template.bind({});
ButtonPrimaryActive.args = {
  label: "Button",
  variant: "primary",
  size: "md",
  icon: false,
  isDisabled: false,
};
export const ButtonPrimaryIconActive = Template.bind({});
ButtonPrimaryIconActive.args = {
  label: "Button",
  variant: "primary",
  size: "md",
  icon: true,
  isDisabled: false,
};

export const ButtonSecondaryDefault = Template.bind({});
ButtonSecondaryDefault.args = {
  label: "Button",
  variant: "secondary",
  size: "md",
  icon: false,
  isDisabled: false,
};
export const ButtonSecondaryIconDefault = Template.bind({});
ButtonSecondaryIconDefault.args = {
  label: "Button",
  variant: "secondary",
  size: "md",
  icon: true,
  isDisabled: false,
};
export const ButtonSecondaryDisabled = Template.bind({});
ButtonSecondaryDisabled.args = {
  label: "Button",
  variant: "secondary",
  size: "md",
  icon: false,
  isDisabled: true,
};
export const ButtonSecondaryIconDisabled = Template.bind({});
ButtonSecondaryIconDisabled.args = {
  label: "Button",
  variant: "secondary",
  size: "md",
  icon: true,
  isDisabled: true,
};

export const ButtonSecondaryHover = Template.bind({});
ButtonSecondaryHover.args = {
  label: "Button",
  variant: "secondary",
  size: "md",
  icon: false,
  isDisabled: false,
};
export const ButtonSecondaryIconHover = Template.bind({});
ButtonSecondaryIconHover.args = {
  label: "Button",
  variant: "secondary",
  size: "md",
  icon: true,
  isDisabled: false,
};
export const ButtonSecondaryActive = Template.bind({});
ButtonSecondaryActive.args = {
  label: "Button",
  variant: "secondary",
  size: "md",
  icon: false,
  isDisabled: false,
};
export const ButtonSecondaryIconActive = Template.bind({});
ButtonSecondaryIconActive.args = {
  label: "Button",
  variant: "secondary",
  size: "md",
  icon: true,
  isDisabled: false,
};
