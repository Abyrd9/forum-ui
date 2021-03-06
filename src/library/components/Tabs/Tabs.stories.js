import React from "react";
import { storiesOf } from "@storybook/react";
import Tabs from "./Tabs";
import { StoryContainer } from "../../../../.storybook/config";

storiesOf("Tabs", module)
  .addDecorator(storyFn => <div>{storyFn()}</div>)
  .add("Stories", () => (
    <StoryContainer>
      <Tabs
        tabsList={[
          { name: "tab-1", value: "Tab 1", content: null },
          { name: "tab-2", value: "Tab 2", content: null },
          { name: "tab-3", value: "Tab 3", content: null },
          { name: "tab-4", value: "Tab 4", content: null }
        ]}
      >
        {({ activeTab }) => <div>{activeTab.index}</div>}
      </Tabs>
    </StoryContainer>
  ));
