import styled, { css } from 'styled-components';
import chroma from 'chroma-js';

export const TypographyBlockContainer = styled.div`
  ${props => {
    const { theme = {} } = props;
    const { colors = {}, spacing = {} } = theme;
    return css`
      margin-bottom: ${spacing[600]};
      .typography-block-title {
        margin-bottom: ${spacing[400]};
        color: ${chroma(colors.black).brighten(2)};
      }
      .typography-block-content {
        width: 100%;
        position: relative;
      }
    `;
  }}
`;
