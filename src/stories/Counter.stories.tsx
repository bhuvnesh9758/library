import React from "react";
import { storiesOf } from "@storybook/react";

import { Counter } from "../components";

const stories = storiesOf("Test stories", module);

stories.add("Counter", () => {
  return <Counter />;
});
