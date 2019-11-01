import styled, { css } from 'styled-components';

export const TypographyBlockContainer = styled.div`
  ${props => {
    const { theme = {} } = props;
    console.log(theme);

    const { colors = {}, spacing = {} } = theme;
    return css`
      margin-bottom: ${spacing[400]};
      .typography-block-title {
        margin-bottom: ${spacing[200]};
        color: ${colors.neutral[300]};
      }
    `;
  }}
`;
