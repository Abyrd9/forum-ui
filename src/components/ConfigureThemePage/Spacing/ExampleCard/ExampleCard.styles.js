import styled, { css } from 'styled-components';
import chroma from 'chroma-js';
import WalterWhite from '../../../../assets/img/WalterWhite.png';

export const ExampleCardStyled = styled.div`
  ${({ theme = {}, spacing = {} }) => {
    console.log(spacing);
    const { media = {} } = theme;
    const colors = {
      primary: '#F1FAEE',
      black: '#0A090C',
    };
    return css`
      width: 950px;
      position: relative;
      background-color: ${colors.primary};
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      margin-right: 50px;
      box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
      margin-bottom: 300px;
      &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
        background: url(${WalterWhite});
        background-repeat: no-repeat;
        background-position: -180px -50px;
        background-size: auto;
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
      .spacing {
        width: 100%;
        background-color: ${chroma('red').alpha(0.25)};
        &-100 {
          height: ${spacing[100]};
        }
        &-200 {
          height: ${spacing[200]};
        }
        &-300 {
          height: ${spacing[300]};
        }
        &-400 {
          height: ${spacing[400]};
        }
        &-500 {
          height: ${spacing[500]};
        }
        &-600 {
          height: ${spacing[600]};
        }
        &-700 {
          height: ${spacing[700]};
        }
        &-800 {
          height: ${spacing[800]};
        }
      }
    `;
  }}
`;
