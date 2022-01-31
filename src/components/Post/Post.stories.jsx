import React from "react";

import Post from "./Post.js";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Components/Post",
  component: Post,
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = () => (
  <Post
    content="Sample Post here pls"
    date={new Date().toLocaleDateString()}
    likes={34}
  />
);

export const Default = Template.bind({});
