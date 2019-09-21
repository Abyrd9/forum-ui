import { createGlobalStyle, css } from 'styled-components';

const ForumUiGlobalStyle = createGlobalStyle`
  ${props => {
    const { theme } = props;
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
        font-size: ${theme.font[400].size};
        font-family: 'Josefin Sans', sans-serif;
        vertical-align: baseline;
      }
      h1 {
        font-size: ${theme.font[800].size};
        line-height: ${theme.font[800].height};
      }
      h2 {
        font-size: ${theme.font[700].size};
        line-height: ${theme.font[700].height};
      }
      h3 {
        font-size: ${theme.font[600].size};
        line-height: ${theme.font[600].height};
      }
      h4 {
        font-size: ${theme.font[500].size};
        line-height: ${theme.font[500].height};
      }
      h5 {
        font-size: ${theme.font[400].size};
        line-height: ${theme.font[400].height};
        text-transform: uppercase;
      }
      p {
        font-size: ${theme.font[400].size};
        line-height: ${theme.font[400].height};
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
      body {
        line-height: 1;
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
