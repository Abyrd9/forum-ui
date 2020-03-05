import styled, { css } from 'styled-components';
import fallback from '../constants';

export const GridContainer = styled.div`
  ${({ theme = {} }) => {
    const media = theme.media || fallback.media;
    console.log(fallback.media);
    let breakpoints = '';
    Object.values(media).forEach(query => {
      breakpoints += `${query.only} {
        padding: 0px ${query.gutter}px;
        ${query.fluid ? `max-width: ${query.content}px;` : `width: ${query.content}px;`};
      }`;
    });

    return css`
      margin: 0 auto;
      box-sizing: border-box;
      ${breakpoints}
    `;
  }}
`;
