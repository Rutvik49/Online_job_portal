import styled from 'styled-components'

export const Start = styled.div`
  font-family: "Roboto","Helvetica","Arial",sans-serif;
  min-height: 100vh;
  background-color: #f7f7f7;
  .header {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  hr {
    width: 85vw;
    margin: auto;
    border-top: 1px solid #3661ce;
  }
  .header img {
    margin-top: 12px;
    width: 18vw;
  }
  .body {
    display: flex;
    justify-content: space-evenly;
    margin-top: 3vh;
  }
  .texts {
    font-size: 1.1rem;
    margin-top: 18vh;
    margin-left: 4.5%;
    color: #3661ce;
  }
  h3 {
    padding-top: 5%;
    font-size: 1.5rem;
    margin: auto;
  }
  button {
    width: 75%;
    height: 15%;
    border-radius: 10px;
    color: white;
    font-size: 1.1rem;
    background-color: #3661ce;
    border: 1px solid blue;
    margin-top: 5%;
    cursor: pointer;
  }
  .body img {
    height: 70vh;
    width: 55vw;
  }
`
