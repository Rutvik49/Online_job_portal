import styled from 'styled-components'

export const Signup = styled.div`
  font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif;
  background-color: #f7f7f7;
  display: flex;
  min-height: 100vh;
  align-items: center;
  flex-direction: column;

  .head {
    display: flex;
    margin-top: 1%;
    width: 100%;
    justify-content: center;
    flex-direction: column;
    background-color: #f7f7f7;
    position: fixed;
  }
  img {
    margin-top: 12px;
    width: 15vw;
    margin: auto;
  }
  .welcome {
    font-size: 1.7rem;
    color: #2150c9;
    margin: auto;
  }
  hr {
    width: 80%;
    margin: auto;
    border-top: 1px solid #3661ce;
  }
  .card {
    margin-top: 125px;
    display: flex;
    width: 35vw;
    flex-direction: column;
    align-items: flex-start;
  }
  .signup {
    font-size: 1.2rem;
    font-weight: bold;
    color: #3661ce;
    margin: auto;
  }
  label,
  input,
  select {
    color: #073dc4;
    width: 100%;
  }
  input {
    padding-left: 1%;
  }
  input,
  select {
    font-size: 1rem;
    outline: none;
    border: 1px solid #3661ce;
    color: #022c94;
    border-radius: 5px;
  }
  input:focus,
  select:focus {
    box-shadow: 1px 1px 3px #3661ce;
    background-color: #f3f7ff;
  }
  label {
    margin-top: 4%;
  }
  input,
  select {
    height: 6vh;
  }
  .otp {
    display: flex;
    width: 100%;
  }
  .otpinp {
    border-radius: 5px 0px 0px 5px;
    width: 100%;
  }
  .otp button {
    width: 40%;
    border: 1px solid #3661ce;
    border-left: 0px;
    border-radius: 0px 5px 5px 0px;
    padding: 7px 25px;
    background-color: #073dc4;
    color: #f7f7f7;
  }
  .submit {
    margin-top: 4%;
    margin-bottom: 4%;
    height: 6vh;
    width: 100%;
    border-radius: 5px;
    border: 1px solid #3661ce;
    background-color: #073dc4;
    color: #f7f7f7;
    font-size: 1rem;
  }
  .submit:onclick{
    background-color: white;
  }
`
