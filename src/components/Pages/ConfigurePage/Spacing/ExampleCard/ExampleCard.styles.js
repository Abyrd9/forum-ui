import styled, { css } from "styled-components";
import chroma from "chroma-js";

export const ExampleCardStyled = styled.div`
  ${({ theme = {} }) => {
    const { media = {}, zIndex = {} } = theme;
    const colors = {
      primary: "#FDFDFD",
      black: "#0A090C"
    };
    return css`
      width: 90%;
      position: relative;
      display: flex;
      justify-content: space-between;
      margin-right: 25px;
      box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
      ${media.tablet.down} {
        width: 85%;
      }
      ${media.mobile.down} {
        width: 80%;
      }
      ${media.xsMobile.down} {
        width: 100%;
      }
      .image-container {
        display: block;
        position: relative;
        flex: 1;
        overflow: hidden;
        margin-right: -100%;
        max-width: 1340px;
        ${media.tablet.down} {
          display: none;
        }
        .image {
          position: absolute;
          top: -50px;
          left: -150px;
          height: calc(100% + 100px);
          z-index: ${zIndex[100]};
        }
      }
      .social-content-block {
        margin-right: -24px;
        display: flex;
        justify-content: flex-end;
        ${media.mobile.down} {
          margin-right: 0;
        }
        span {
          font-weight: bold;
          font-size: 12px;
          margin-left: 12px;
          text-transform: uppercase;
          display: flex;
          align-items: center;
          justify-content: center;
          &:nth-child(1) {
            color: ${chroma(colors.black).alpha(0.5)};
            margin-bottom: -4px;
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
        flex: 1;
        max-width: 500px;
        margin-right: 54px;
        z-index: ${zIndex[200]};
        padding: 0 15px;
        ${media.tablet.down} {
          margin: 0 auto;
        }
        &__title {
          font-size: 62px;
          font-weight: 800;
          color: ${colors.black};
          ${media.mobile.down} {
            font-size: 36px;
          }
        }
        &__features-block {
          svg {
            height: 13px;
            margin-top: 2px;
            margin-right: 12px;
            ${media.mobile.down} {
              margin-right: 8px;
              height: 8px;
            }
            path {
              fill: ${chroma(colors.black).alpha(0.5)};
            }
          }
          span {
            font-size: 14px;
            margin-right: 24px;
            color: ${chroma(colors.black).alpha(0.5)};
            ${media.mobile.down} {
              margin-right: 18px;
              font-size: 10px;
            }
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
            ${media.mobile.down} {
              margin-right: 14px;
              padding: 8px 12px;
            }
            svg {
              height: 12px;
              margin-right: 10px;
              ${media.mobile.down} {
                height: 10px;
              }
              path {
                fill: #e1e0e0;
              }
            }
            div {
              height: 16px;
              width: 1px;
              background-color: ${chroma("#E1E0E0").alpha(0.5)};
              margin-right: 10px;
            }
            p {
              text-transform: uppercase;
              color: #e1e0e0;
              font-size: 14px;
              ${media.mobile.down} {
                margin-bottom: -4px;
                font-size: 10px;
              }
            }
          }
          .secondary-cta {
            margin-top: 2px;
            ${media.mobile.down} {
              max-width: 160px;
            }
            svg {
              height: 12px;
              margin-right: 6px;
              ${media.mobile.down} {
                height: 10px;
              }
              path {
                fill: ${colors.balck};
              }
            }
            p {
              &:nth-child(1) {
                font-weight: bold;
                color: ${colors.black};
                ${media.mobile.down} {
                  font-size: 12px;
                }
              }
              &:nth-child(3) {
                font-size: 14px;
                font-weight: bold;
                color: ${chroma(colors.black).alpha(0.5)};
                ${media.mobile.down} {
                  font-size: 10px;
                }
              }
            }
          }
        }
      }
    `;
  }}
`;
