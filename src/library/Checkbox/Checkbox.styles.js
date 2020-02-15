import styled, { css } from 'styled-components';
import buildColorStyleMap from '../../helpers/buildColorStyleMap';
import { NEUTRAL_COLORS } from '../constants';

export const CheckboxStyled = styled.label`
  ${props => {
    const color = buildColorStyleMap()(props);
    return css`
      position: relative;
      cursor: pointer;
      span {
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: #FFFFFF;
        border: 2px solid ${NEUTRAL_COLORS[400]};
        border-radius: 6px;
        width: 25px;
        height: 25px;
        svg {
          transition: all 100ms ease-in-out;
          opacity: 0;
        }
        svg path {
          fill: ${color};
        }

        /* Focus Styles */
        &:before {
          transition: all 100ms ease-in-out;
          opacity: 0;
          display: inline-block;
          content: '';
          position: absolute;
          top: -1px;
          left: -1px;
          width: calc(100% + 2px);
          height: calc(100% + 2px);
          border-radius: 6px;
          background-color: transparent;
          box-shadow: 0 0 3px ${color}, 0 0 5px ${color};
        }
      }
      input {
        opacity: 0;
        position: absolute;
        top: 0;
        left: 0;
      }
      &:hover svg {
        transition: all 150ms ease-in-out;
        opacity: 0.25;
      }
      input:focus + span {
        svg {
          opacity: 0.25;
        }
        &:before {
          opacity: 1;
        }
      }
      input:checked + span {
        border-color: ${color};
        svg {
          opacity: 1;
        }
      }
      input:disabled + span {
        border-color: ${NEUTRAL_COLORS[500]};
        background-color: ${NEUTRAL_COLORS[100]};
      }
    `;
  }}
`;