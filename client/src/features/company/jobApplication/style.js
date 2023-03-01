import styled from 'styled-components'

export const Style = styled.div`
  margin-top: 7%;
  .content {
    display: flex;
    flex-direction: column;
    width: 60vw;
    margin: auto;
    font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif;
  }
  .txt {
    font-size: 1.3rem;
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
  .applicant {
    font-size: medium;
    color: #6e8fe2;
  }
  .view {
    padding-left: 15px;
    color: #022c94;
    text-decoration: underline;
    font-size: small;
    cursor: pointer;
  }
  .links {
    display: flex;
    flex-direction: column;
  }
  .reject,
  .message {
    color: #022c94;
    font-size: small;
    text-decoration: underline;
    cursor: pointer;
  }
  .reject {
    padding-bottom: 5%;
  }
  .reject:hover,
  .message:hover,
  .view:hover {
    color: #3d74ff;
  }
`
