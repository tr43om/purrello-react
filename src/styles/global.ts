import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
*, *::before, *::after {
    box-sizing: border-box; 
}

* {
  margin: 0;
}

:root {
  --c-primary: #F70A8D; 
  --c-text-secondary: #9b9b9b;
  --c-error: firebrick; 
}

html, body {
  font-family: 'Poppins', sans-serif;
  height: 100%;
}

body {
  
  line-height: 1.5;
  -webkit-font-smoothing: antialiased;
  /* background-image: linear-gradient(to right, #7f53ac 0, #657ced 100%); */
  background-color:#222222;
  color: #fff;
}

`;
