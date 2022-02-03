import React from "react";

import PrimaryButton from "./PrimaryButton.js";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Components/PrimaryButton",
  component: PrimaryButton,
  argTypes: { onClick: { action: "clicked" } },
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <PrimaryButton {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: "Button",
};
