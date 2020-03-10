import React from "react";
import { storiesOf } from "@storybook/react";
import Dropdown from "./Dropdown";

storiesOf("Dropdown", module)
  .addDecorator(storyFn => <div>{storyFn()}</div>)
  .add("Stories", () => <Dropdown>Default</Dropdown>);
