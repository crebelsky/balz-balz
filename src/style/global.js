import styledNormalize from 'styled-normalize';
import { injectGlobal } from 'styled-components';
import { colors, fonts} from './constants';

injectGlobal`
  ${styledNormalize}
  
   @font-face {
    font-family: stack-sans;
  }
  
  html, body {
    height: 100%;
    font-size: 16px;
  }
  
  body {
    background: ${colors.dark};
    color: ${colors.white};
    font-family: ${fonts.sansSerif};
    backface-visibility: hidden;
  }
  
  h1, h2, h3, h4, h5, h6 {
    font-weight: 300;
    line-height: inherit;
  }
`;
