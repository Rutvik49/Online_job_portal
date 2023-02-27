import styled from 'styled-components'

export const Style = styled.div`
  .head {
    background-color: #fcfdff;
    min-height: 35vh;
    width: 60vw;
    display: flex;
    align-items: center;
    margin: 12px auto;
    flex-wrap: wrap;
    font-family: 'Helvetica', 'Arial', sans-serif;
    border: 1px solid #3661ce;
    border-radius: 9px;
  }
  .profile,
  .pimg {
    margin: auto;
    height: 130px;
    width: 130px;
    border: 1px solid #3661ce;
    border-radius: 50%;
    color: transparent;
  }
  .upload {
    display: none;
  }
  .texture {
    display: flex;
    flex-direction: column;
  }
  .name {
    font-size: 1.4rem;
    color: #173fa5;
  }
  .about {
    margin-top: 1%;
    color: #3661ce;
  }
  .email {
    margin-top: 1%;
    font-size: 1.1rem;
    color: #1d45a8;
  }
  .location {
    color: #6e8fe2;
    margin-top: 1%;
    font-size: 1.1rem;
  }
  .buttons {
    width: 60vw;
    display: flex;
    margin: auto;
    justify-content: space-between;
  }
  .postjob {
    background-color: #073dc4;
    color: #f3f7ff;
    cursor: pointer;
    outline: none;
    border: 1px solid #073dc4;
    border-radius: 4px;
    min-height: 25px;
    min-width: 10%;
    cursor: pointer;
  }
  .postedjobs {
    display: flex;
    flex-direction: column;
    width: 60vw;
    margin: 1.5% auto;
    font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif;
  }
  .pj {
    font-size: x-large;
    color: #3661ce;
  }
  .card {
    width: 58vw;
    margin: 1% auto;
    display: flex;
    justify-content: space-between;
    background-color: #f3f7ff;
    padding: 2%;
    border-radius: 5px;
  }
  .info {
    display: flex;
    flex-direction: column;
  }
  .role {
    font-size: larger;
    color: #073dc4;
  }
  .disc {
    font-size: medium;
    color: #6e8fe2;
  }
  .delet {
    color: #022c94;
    text-decoration: underline;
    cursor: pointer;
  }
  .edit {
    color: #022c94;
    text-decoration: underline;
    cursor: pointer;
  }
`
