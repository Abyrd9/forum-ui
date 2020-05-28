import React from "react";
// eslint-disable-next-line import/no-extraneous-dependencies
import { storiesOf } from "@storybook/react";
import { ThemeProvider } from "styled-components";
import { StoryBlock, StoryContainer } from "../../../../.storybook/config";
import Button from "./Button";
import DEFAULT_THEME from "../../constants";

storiesOf("Button", module)
  .addDecorator(storyFn => (
    <ThemeProvider theme={DEFAULT_THEME}>{storyFn()}</ThemeProvider>
  ))
  .add("Stories", () => {
    return (
      <>
        <StoryContainer>
          <h1 className="title">Large Button</h1>
          <Button primary large>
            Base Button
          </Button>
          <StoryBlock />
          <Button primary large disabled>
            Disabled
          </Button>
          <StoryBlock />
          <Button primary large loading>
            Loading
          </Button>
        </StoryContainer>

        <StoryContainer>
          <h1 className="title">Default Button</h1>
          <Button secondary>Base Button</Button>
          <StoryBlock />
          <Button secondary disabled>
            Disabled
          </Button>
          <StoryBlock />
          <Button secondary loading>
            Loading
          </Button>
        </StoryContainer>

        <StoryContainer>
          <h1 className="title">Small Button</h1>
          <Button small>Base Button</Button>
          <StoryBlock />
          <Button small disabled>
            Disabled
          </Button>
          <StoryBlock />
          <Button small loading>
            Loading
          </Button>
        </StoryContainer>

        <StoryContainer>
          <h1 className="title">Large Outline Button</h1>
          <Button primary large outline>
            Base Button
          </Button>
          <StoryBlock />
          <Button primary large outline disabled>
            Disabled
          </Button>
          <StoryBlock />
          <Button primary large outline loading>
            Loading
          </Button>
        </StoryContainer>

        <StoryContainer>
          <h1 className="title">Default Outline Button</h1>
          <Button secondary outline>
            Base Button
          </Button>
          <StoryBlock />
          <Button secondary outline disabled>
            Disabled
          </Button>
          <StoryBlock />
          <Button secondary outline loading>
            Loading
          </Button>
        </StoryContainer>

        <StoryContainer>
          <h1 className="title">Small Outline Button</h1>
          <Button small outline>
            Base Button
          </Button>
          <StoryBlock />
          <Button small outline disabled>
            Disabled
          </Button>
          <StoryBlock />
          <Button small outline loading>
            Loading
          </Button>
        </StoryContainer>

        <StoryContainer>
          <h1 className="title">Default Primary Button</h1>
          <Button primary>Base Button</Button>
          <StoryBlock />
          <Button primary disabled>
            Disabled
          </Button>
          <StoryBlock />
          <Button primary loading>
            Loading
          </Button>
        </StoryContainer>

        <StoryContainer>
          <h1 className="title">Default Primary Outline Button</h1>
          <Button primary outline>
            Base Button
          </Button>
          <StoryBlock />
          <Button primary outline disabled>
            Disabled
          </Button>
          <StoryBlock />
          <Button primary outline loading>
            Loading
          </Button>
        </StoryContainer>
      </>
    );
  });
