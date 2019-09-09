import styled, { css } from 'styled-components';

export const GridContainer = styled.div`
  ${props => {
    const { theme = {} } = props;
    const { media = {} } = theme;
    
    let breakpoints = '';
    Object.values(media).forEach(query => {
      breakpoints += `${query.only} {
        padding: 0px ${query.gutter}px;
        ${query.fluid ? `max-width: ${query.max}px;` : `width: ${query.content}px;`};
      }`;
    });

    return css`
      margin: 0 auto;
      box-sizing: border-box;
      ${breakpoints}
    `;
  }}
`;
