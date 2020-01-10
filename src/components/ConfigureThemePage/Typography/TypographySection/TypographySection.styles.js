import styled, { css } from 'styled-components';
import Tabs from '../../../../library/Tabs';

export const ExtendedTabs = styled(Tabs)`
  ${({ theme = {} }) => {
    const { spacing = {} } = theme;
    return css`
      margin-bottom: ${spacing[300]};
      .forum-ui-tabs-list-item {
        flex: 1;
        button {
          padding: 18px 0px;
          width: 100%;
          height: 62px;
        }
      }
    `;
  }}
`;

export const TypographySectionContainer = styled.div`
  ${props => {
    const { familyCSS = '' } = props;
    return css`
      position: relative;
      .typography-configurations {
        &__copy-container {
          p {
            font-family: ${familyCSS};
          }
        }
      }
    `;
  }}
`;
