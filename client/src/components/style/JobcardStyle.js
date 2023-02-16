import styled from 'styled-components'

export const JobcardStyle = styled.div`
  display: block;
  width: 100%;
  margin-top:1%;
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
  hr {
    border-top: 1px solid #f9f7ff;
    margin: auto;
    width: 70vw;
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
  .job_role {
    margin-top: 1%;
    font-size: 1.3rem;
    font-weight: 550;
  }
  .name {
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
  .salary {
    margin-top: 2%;
    margin-bottom: 2%;
    font-size: 0.9rem;
    font-weight: 400;
  }
  .apply {
    width: 20%;
  }
  button {
    margin: 2% 0px;
    background-color: #073dc4;
    color: #f3f7ff;
    cursor: pointer;
    outline: none;
    border: 1px solid #073dc4;
    border-radius: 7px;
    height: 20%;
    width: 65%;
  }
  @media (max-width: 820px) {
    .container {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
    .discription {
      width: 60%;
      display: flex;
      flex-direction: column;
      color: #073dc4;
      align-items: center;
      text-align: center;
    }
    .job_role {
      margin-top: 1%;
      font-size: 1rem;
      font-weight: 550;
    }
  }
`
