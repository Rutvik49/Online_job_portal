import styled from 'styled-components'

export const NavStyle = styled.div`
  margin-top: 7%;
  width: 100%;
  .container {
    background-color: #f3f7ff;
    font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif;
    box-shadow: 0px 10px 10px -16px #111;
    border-radius: 5px;
    width: 70vw;
    min-height: 15vh;
    margin: auto;
    display: flex;
    justify-content: center;
  }
  img {
    width: 20%;
  }
  .discription {
    width: 60%;
    display: flex;
    flex-direction: column;
    color: #073dc4;
  }
  .name {
    margin-top: 1%;
    font-size: 1.3rem;
    font-weight: 550;
  }
  .role {
    margin-top: 1%;
    font-size: 1.1rem;
    font-weight: 500;
  }
  .location {
    margin-top: 1%;
    font-size: 1rem;
    font-weight: 500;
    color: #5e7ac2;
  }
  .bio {
    margin-top: 2%;
    font-size: 0.9rem;
    font-weight: 400;
  }
  .viewProfile {
    margin-top: 1%;
    font-size: 0.8rem;
    color: #073dc4;
    text-decoration: underline;
    width: 20%;
    text-align: right;
  }
  @media (max-width: 820px) {
    margin-top: 10vh;
    .container {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
    .discription {
      margin: 1.5%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      text-align: center;
    }
    .viewProfile {
      margin-top: 1%;
      text-align: center;
    }
  }
`
