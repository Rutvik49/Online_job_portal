import styled from 'styled-components'

export const CardStyle = styled.div`
  .text {
    margin: 2% auto;
    color: #073dc4;
    font-size: larger;
  }
  .edit {
    color: #3661ce;
    text-decoration: underline;
    cursor: pointer;
  }
  .content {
    display: flex;
    flex-direction: column;
  }

  label,
  input {
    color: #073dc4;
    width: 85%;
    margin: auto;
  }
  input {
    padding-left: 1%;
    height: 5vh;
    font-size: 1rem;
    outline: none;
    border: 1px solid #3661ce;
    color: #022c94;
    border-radius: 5px;
    margin-bottom: 2%;
  }
  .button {
    display: flex;
    margin: 1% auto;
    justify-content: flex-end;
    width: 85%;
  }
  .button .cancel {
    color: #00206f;
    margin-right: 4%;
    cursor: pointer;
    padding-top: 4px;
  }
  .button .send {
    cursor: pointer;
    background-color: #073dc4;
    color: #f3f7ff;
    cursor: pointer;
    outline: none;
    border: 1px solid #073dc4;
    border-radius: 2px;
    width: 18%;
    height: 25px;
  }
`
