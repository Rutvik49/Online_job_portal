import styled from 'styled-components'

export const Role = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif;
  .candidate,
  .company {
    text-decoration: none;
    width: 20vw;
    height: 15vh;
    border: 1px solid #3661ce;
    border-radius: 5px;
    margin: 0px 1%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  span {
    font-size: 1.3rem;
    color: #3661ce;
  }
  p {
    color: #022c94;
    font-size: 1rem;
    text-align: center;
  }
  .candidate:hover,
  .company:hover {
    background-color: #d4e0ff;
    cursor: pointer;
  }
  @media (max-width: 820px) {
    flex-direction: column;
    .candidate,
    .company {
      margin: 5% 0%;
      width: 60vw;
    }
  }
`
