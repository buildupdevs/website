import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  :root {
    --blue: 0 0 255;
    --dark: 20 8 14;
    --padding: clamp(1rem, 8vw, 7rem);
  }
  * {
    box-sizing: border-box;
  }
  body {
    line-height: 1.5;
  }
  html {
    font-family: 'Poppins', sans-serif;
    font-size: clamp(1rem, 2vw, 1.2rem);
  }
  .back {
    background-color: rgb(var(--blue) / 75%);
    color: white;
    display: inline-block;
    margin-top: 2rem;
    padding: .75rem 1rem;
    text-decoration: none;
    transition: background-color .3s ease-in-out;
    &:hover {
      background-color: rgb(var(--blue) / 50%);
    }
  }
`;

export default GlobalStyles;
