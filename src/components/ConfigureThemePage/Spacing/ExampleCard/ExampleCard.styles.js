import styled, { css } from 'styled-components';
import chroma from 'chroma-js';

export const ExampleCardStyled = styled.div`
  ${({ theme = {} }) => {
    const { media = {}, zIndex = {} } = theme;
    const colors = {
      primary: '#FDFDFD',
      black: '#0A090C',
    };
    return css`
      width: 950px;
      position: relative;
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      margin-right: 50px;
      box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
      margin-bottom: 300px;
      .image {
        position: absolute;
        top: -50px;
        left: -150px;
        height: calc(100% + 100px);
        z-index: ${zIndex[100]};
        ${media.md.down} {
          opacity: 0;
        }
      }
      .social-content-block {
        margin-right: 24px;
        span {
          font-weight: bold;
          font-size: 12px;
          margin-left: 12px;
          text-transform: uppercase;
          &:nth-child(1) {
            color: ${chroma(colors.black).alpha(0.5)};
          }
          svg path {
            fill: ${chroma(colors.black).alpha(0.5)};
          }
        }
        &__facebook svg {
          height: 14px;
        }
        &__twitter svg {
          height: 12px;
        }
        &__menu svg {
          height: 14px;
        }
      }
      .main-content-block {
        max-width: 500px;
        margin-right: 54px;
        z-index: ${zIndex[200]};
        ${media.md.down} {
          margin: 0 auto;
        }
        &__title {
          font-size: 62px;
          font-weight: 800;
          color: ${colors.black};
        }
        &__features-block {
          span {
            font-size: 14px;
            margin-right: 24px;
            color: ${chroma(colors.black).alpha(0.5)};
          }
        }
        &__description {
          max-width: 480px;
          color: ${colors.black};
        }
        &__divider {
          width: 100%;
          height: 1px;
          background-color: ${chroma(colors.black).alpha(0.5)};
        }
        &__cta-block {
          display: flex;
          align-items: center;
          .primary-cta {
            margin-right: 16px;
            display: flex;
            align-items: center;
            justify-content: center;
            background-color: ${colors.black};
            padding: 14px 18px;
            max-width: 160px;
            border-radius: 25px;
            svg {
              height: 12px;
              margin-right: 10px;
              path {
                fill: #e1e0e0;
              }
            }
            div {
              height: 16px;
              width: 1px;
              background-color: ${chroma('#E1E0E0').alpha(0.5)};
              margin-right: 10px;
            }
            p {
              text-transform: uppercase;
              color: #e1e0e0;
              font-size: 14px;
              margin-bottom: -4px;
            }
          }
          .secondary-cta {
            margin-top: 2px;
            svg {
              height: 12px;
              margin-right: 6px;
              path {
                fill: ${colors.balck};
              }
            }
            p {
              margin: -6px 0px;
              &:nth-child(1) {
                font-weight: bold;
                color: ${colors.black};
              }
              &:nth-child(3) {
                font-size: 14px;
                font-weight: bold;
                color: ${chroma(colors.black).alpha(0.5)};
              }
            }
          }
        }
      }
    `;
  }}
`;
