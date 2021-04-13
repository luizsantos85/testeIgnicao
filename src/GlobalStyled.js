import styled, { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Montserrat&display=swap');
*{
  margin:0;
  padding: 0;
  box-sizing:border-box;
  outline:0;
}
html, body, #root{
  min-height: 100%;
}
body{
  font-family: 'Montserrat', sans-serif;
  background-color:#eee;
}
button{
  cursor:pointer;
  border: 0;
}
a{
  text-decoration: none;
}
.animeLeft {
  opacity: 0;
  transform: translateX(-30px);
  animation: animeLeft 0.5s forwards;
}
@keyframes animeLeft {
  to {
    opacity: 1;
    transform: initial;
  }
}
`;

export const Container = styled.div`
  display: flex;
  height: 100vh;
  background-color: #f9f9f9;
`;

export const PageBody = styled.div`
  display:flex;
  flex-direction: column;
  flex:1;
  padding: 2%;
`;
