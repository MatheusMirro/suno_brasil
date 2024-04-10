'use client'
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  @font-face {
    font-family: 'Schibsted Grotesk';
    src: url('public\fonts\Schibsted_Grotesk\static\SchibstedGrotesk-SemiBoldItalic.ttf') format('truetype');
  }

  body {
    font-family: 'Schibsted Grotesk', Arial, sans-serif;
  }
`;

export default GlobalStyle;
