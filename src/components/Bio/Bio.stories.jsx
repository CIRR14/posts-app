import React from "react";

import Bio from "./Bio.js";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Components/Bio",
  component: Bio,
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = () => (
  <Bio
    headshot="https://media-exp1.licdn.com/dms/image/C4E03AQF0iEGLK8lANQ/profile-displayphoto-shrink_800_800/0/1554837206100?e=1649289600&v=beta&t=SPj4WQPyeC9HSt09nFydzfNZ5D-qAh93z10TJkS2GEE"
    layout="fill"
    name="Ivan Romero"
    tagline="I am learning!"
    role="Sofware Engineer"
  />
);

export const Default = Template.bind({});
