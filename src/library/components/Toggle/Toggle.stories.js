/* eslint-disable import/no-extraneous-dependencies */
import React, { useRef, useEffect } from "react";
import { storiesOf } from "@storybook/react";
import Toggle from "./Toggle";
import { StoryBlock, StoryContainer } from "../../../../.storybook/config";

const FocusedToggle = () => {
  const ToggleRef = useRef();

  useEffect(() => {
    ToggleRef.current.focus();
  }, []);

  return <Toggle ref={ToggleRef} />;
};

storiesOf("Toggle", module).add("Stories", () => (
  <>
    <StoryContainer>
      <StoryBlock>
        <p className="label">Large</p>
        <Toggle large />
      </StoryBlock>
      <StoryBlock>
        <p className="label">Default</p>
        <Toggle />
      </StoryBlock>
      <StoryBlock>
        <p className="label">Focused</p>
        <FocusedToggle />
      </StoryBlock>
      <StoryBlock>
        <p className="label">Active</p>
        <Toggle checked />
      </StoryBlock>
      <StoryBlock>
        <p className="label">Disabled</p>
        <Toggle disabled />
      </StoryBlock>
      <StoryBlock>
        <p className="label">Small</p>
        <Toggle small />
      </StoryBlock>
    </StoryContainer>
    <StoryContainer>
      <StoryBlock>
        <p className="label">Large</p>
        <Toggle primary large />
      </StoryBlock>
      <StoryBlock>
        <p className="label">Default</p>
        <Toggle primary />
      </StoryBlock>
      <StoryBlock>
        <p className="label">Focused</p>
        <FocusedToggle primary />
      </StoryBlock>
      <StoryBlock>
        <p className="label">Active</p>
        <Toggle primary checked />
      </StoryBlock>
      <StoryBlock>
        <p className="label">Disabled</p>
        <Toggle primary disabled />
      </StoryBlock>
      <StoryBlock>
        <p className="label">Small</p>
        <Toggle primary small />
      </StoryBlock>
    </StoryContainer>
  </>
));
