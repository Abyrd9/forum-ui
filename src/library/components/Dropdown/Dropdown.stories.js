import React from "react";
import { storiesOf } from "@storybook/react";
import { StoryBlock, StoryContainer } from '../../../../.storybook/config';
import Dropdown from "./Dropdown";


storiesOf("Dropdown", module)
  .addDecorator(storyFn => <div>{storyFn()}</div>)
  .add("Stories", () => (
    <>
      <StoryContainer>
        <h1 className="title">Default Dropdown</h1>
        <Dropdown>Default</Dropdown>
      </StoryContainer>
    </>
  ));
