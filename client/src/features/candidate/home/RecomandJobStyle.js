import styled from 'styled-components'

export const RecomandJobStyle = styled.div`
  background-color: #f3f7ff;
  font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif;
  width: 70%;
  min-height: 13vh;
  margin: auto;
  display: flex;
  flex-direction: column;
  padding-left: 1%;
  justify-content: center;
  box-shadow: 0px 10px 10px -16px #111;
  .s1 {
    color: #073dc4;
    font-size: 1.2rem;
    font-weight: 550;
  }
  .s2 {
    color: #073dc4;
  }
  @media (max-width: 820px) {
    .s1, .s2{
      text-align: center;
    }
  }
`
