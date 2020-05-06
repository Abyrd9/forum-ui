import styled, { css } from 'styled-components';

export const TooltipStyled = styled.span`
  ${props => {
    const { tooltipPos = { x: 0, y: 0 }, arrowPos = { top: 0, left: 0 }, visible } = props;

    return css`
      width: auto;
      height: auto;
      display: inline-block;
      position: relative;
      .tooltip {
        cursor: pointer;
        display: inline-block;
        & > * {
          display: inline-block;
        }
      }
      .tooltip-content {
        top: 0;
        left: 0;
        z-index: 8888;
        position: absolute;
        visibility: ${visible ? 'visible' : 'hidden'};
        width: -moz-fit-content; /* Firefox */
        width: -webkit-fit-content; /* Chrome */
        width: fit-content;
        padding: 8px;
        background-color: #ffffff;
        filter: drop-shadow(0 3px 4px rgba(0, 0, 0, 0.3));
        border-radius: 3px;
        ${tooltipPos.x && tooltipPos.y && `transform: translate(${tooltipPos.x}px, ${tooltipPos.y}px);`};
        opacity: ${visible ? 1 : 0};
        transition: all 0.15s ease-in-out;
        box-shadow: 0 1px 10px 0 rgba(0, 0, 0, 0.12), 0 4px 5px 0 rgba(0, 0, 0, 0.14),
          0 2px 4px -1px rgba(0, 0, 0, 0.02);
        &:before {
          content: '';
          position: absolute;
          display: inline-block;
          transform: rotate(45deg);
          height: 12px;
          width: 12px;
          background-color: inherit;
          z-index: -1000;
          top: ${arrowPos.top};
          left: ${arrowPos.left};
        }
      }
    `;
  }}
`;
