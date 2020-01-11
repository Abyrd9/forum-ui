import { createGlobalStyle, css } from 'styled-components';

const ForumUiGlobalStyle = createGlobalStyle`
  ${props => {
    const { theme } = props;
    const { colors = {} } = theme;
    return css`
      /* http://meyerweb.com/eric/tools/css/reset/ 
        v2.0 | 20110126
        License: none (public domain)
      */
      @import url('https://fonts.googleapis.com/css?family=Josefin+Sans:100,100i,300,300i,400,400i,600,600i,700,700i&display=swap');
      html,
      body,
      div,
      span,
      applet,
      object,
      iframe,
      h1,
      h2,
      h3,
      h4,
      h5,
      h6,
      p,
      blockquote,
      pre,
      a,
      abbr,
      acronym,
      address,
      big,
      cite,
      code,
      del,
      dfn,
      em,
      img,
      ins,
      kbd,
      q,
      s,
      samp,
      small,
      strike,
      strong,
      sub,
      sup,
      tt,
      var,
      b,
      u,
      i,
      center,
      dl,
      dt,
      dd,
      ol,
      ul,
      li,
      fieldset,
      form,
      label,
      legend,
      table,
      caption,
      tbody,
      tfoot,
      thead,
      tr,
      th,
      td,
      article,
      aside,
      canvas,
      details,
      embed,
      figure,
      figcaption,
      footer,
      header,
      hgroup,
      menu,
      nav,
      output,
      ruby,
      section,
      summary,
      time,
      mark,
      audio,
      video,
      input {
        margin: 0;
        padding: 0;
        border: 0;
        color: ${colors.black};
        font-size: ${theme.font[400]};
        font-family: 'Josefin Sans', sans-serif;
        vertical-align: baseline;
      }
      h1 {
        font-size: ${theme.font[800]};
      }
      h2 {
        font-size: ${theme.font[700]};
      }
      h3 {
        font-size: ${theme.font[600]};
      }
      h4 {
        font-size: ${theme.font[500]};
      }
      h5 {
        font-size: ${theme.font[400]};
        text-transform: uppercase;
      }
      p {
        font-size: ${theme.font[400]};
        line-height: 1.25;
      }
      a {
        font-size: ${theme.font[400]};
        color: ${colors.primary[400]};
        font-weight: bold;
        text-decoration: none;
        &:hover {
          text-decoration: underline;
        }
      }
      /* HTML5 display-role reset for older browsers */
      article,
      aside,
      details,
      figcaption,
      figure,
      footer,
      header,
      hgroup,
      menu,
      nav,
      section {
        display: block;
      }
      ol,
      ul {
        list-style: none;
      }
      blockquote,
      q {
        quotes: none;
      }
      blockquote:before,
      blockquote:after,
      q:before,
      q:after {
        content: '';
        content: none;
      }
      table {
        border-collapse: collapse;
        border-spacing: 0;
      }
    `;
  }}
`;

export default ForumUiGlobalStyle;
