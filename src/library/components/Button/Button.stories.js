import React from "react";
// eslint-disable-next-line import/no-extraneous-dependencies
import { storiesOf } from "@storybook/react";
import { StoryBlock, StoryContainer } from "../../../../.storybook/config";
import Button from "./Button";

storiesOf("Button", module)
  .addDecorator(storyFn => <div>{storyFn()}</div>)
  .add("Stories", () => {
    return (
      <>
        <StoryContainer>
          <h1 className="title">Large Button</h1>
          <Button large>Base Button</Button>
          <StoryBlock />
          <Button large disabled>
            Disabled
          </Button>
          <StoryBlock />
          <Button large loading>
            Loading
          </Button>
        </StoryContainer>

        <StoryContainer>
          <h1 className="title">Default Button</h1>
          <Button>Base Button</Button>
          <StoryBlock />
          <Button disabled>Disabled</Button>
          <StoryBlock />
          <Button loading>Loading</Button>
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
          <Button large outline>
            Base Button
          </Button>
          <StoryBlock />
          <Button large outline disabled>
            Disabled
          </Button>
          <StoryBlock />
          <Button large outline loading>
            Loading
          </Button>
        </StoryContainer>

        <StoryContainer>
          <h1 className="title">Default Outline Button</h1>
          <Button outline>Base Button</Button>
          <StoryBlock />
          <Button outline disabled>
            Disabled
          </Button>
          <StoryBlock />
          <Button outline loading>
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