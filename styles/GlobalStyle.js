import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
*,
*::after,
*::before {
  margin: 0;
  padding: 0;
  box-sizing: inherit;
}

html {
  font-size: 62.5%;
  box-sizing: border-box;
  scroll-behavior: smooth;

  @media only screen and (min-width: 112.5em) {
    font-size: 82.5%;
  } 
}

body {
  background-color: ${({ theme }) => theme.primary};
  font-family: 'Biotif';
  transition: all .5s linear;
}

img {
  width: 100%;
  display: block;
}

a {
  color: inherit;
  text-decoration: none;
}

h1,
h2,
h3,
h4,
h5 {
  font-family: 'Bogart';
  font-weight: 200;
}

a,
button,
h6,
input,
li,
p {
  font-family: 'Biotif';
}

::selection {
	background: #e2e8ff;
	color: #001d9b
}
`;
