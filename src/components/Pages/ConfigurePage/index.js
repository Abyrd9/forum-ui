import React from 'react';
import SectionTitle from '../../Shared/SectionTitle';
import ColorsSection from './Colors/ColorsSection';
import TypographySection from './Typography/TypographySection';
import SpacingSection from './Spacing/SpacingSection/SpacingSection';

const ConfigurationPage = () => {
  return (
    <>
      <SectionTitle
        title="Colors"
        description={
          <span>
            A ForumUi color palette is loosely based on the guidelines given from{' '}
            <a
              href="https://refactoringui.com/previews/building-your-color-palette/"
              rel="noopener noreferrer"
              target="_blank"
            >
              RefactoringUi
            </a>
            . The initial colors have a primary, secondary, and neutral color palette as well as
            three accent colors for warning, error, or success notifications.
          </span>
        }
      />
      <ColorsSection />
      <SectionTitle
        title="Typography"
        description="A ForumUi Typography system has eight levels of font sizing. Currently we only support the use of the top 100 most popular google fonts."
      />
      <TypographySection />
      <SectionTitle
        title="Spacing"
        description="A ForumUi spacing system has eight levels to space out elements on the page."
      />
      <SpacingSection />
    </>
  );
};

export default ConfigurationPage;
