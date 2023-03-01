import styled from 'styled-components'

export const Style = styled.div`
  font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif;
  background-color: #f7f7f7;
  display: flex;
  min-height: 100vh;
  align-items: center;
  flex-direction: column;

  .head {
    display: flex;
    width: 100%;
    justify-content: center;
    flex-direction: column;
    background-color: #e8edff;
    // background-color: #f7f7f7;
    position: fixed;
    z-index : 1;
    box-shadow: 0px 10px 10px -15px #111;
  }
  .logo {
    height : 100%;
    margin-top: 12px;
    width: 15vw;
    margin: auto;
    padding-top: 0.2%;
  }
  .welcome {
    font-size: 1.7rem;
    color: #2150c9;
    margin: auto;
    text-align : center;
  }
  .card {
    position : relative;
    margin-top : 10%;
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
    height: 6vh;
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
  .otp {
    display: flex;
    width: 100%;
  }
  .otpinp {
    border-radius: 5px 0px 0px 5px;
    width: 100%;
  }
  .otp button {
    border: 1px solid #3661ce;
    border-left: 0px;
    border-radius: 0px 5px 5px 0px;
    background-color: #073dc4;
    font-size: 0.9em;
    color: #f7f7f7;
    cursor: pointer;
    padding: 8px 5px;
    width: 40%;
    white-space: nowrap;
  }
  .submit {
    margin : 4% auto;
    height: 6vh;
    width: 100%;
    border-radius: 5px;
    border: 1px solid #3661ce;
    background-color: #073dc4;
    color: #f7f7f7;
    font-size: 1rem;
    cursor: pointer;
  }
  .goto{
    width : 100%;
    margin-bottom : 4%;
    text-align: right;
  }
`
