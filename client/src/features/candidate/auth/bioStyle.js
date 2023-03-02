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
    position: fixed;
    box-shadow: 0px 10px 10px -15px #111;
  }
  img {
    padding-top : 1%;
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
    padding-bottom : 3%;
  }
  .profile{
    margin: auto;
    height: 120px;
    width: 120px;
    border: 1px solid #3661ce;
    border-radius: 50%;
    color: transparent;
    cursor: pointer;
  }
  .upload{
    display: none;
  }
  .username, .bio{
    align-items: flex-start;
    color: #073dc4;
    width: 100%;
    height: 6vh;
    margin-top: 4%;
  }
  #un, #cb, #bio{
    height: 6vh;
    width: 100%;
    padding-left: 1%;
    font-size: 1rem;
    outline: none;
    border: 1px solid #3661ce;
    color: #022c94;
    border-radius: 5px;
    margin-top: -10px;
  }
  #bio{
    height: 15vh;
    overflow: hidden;
    resize: none;
  }
  .link{
    width: 100%;
  }
  .link .submit {
    text-decoration: none;
    color: #f7f7f7;
    margin : 4% auto;
    height: 6vh;
    width: 100%;
    border-radius: 5px;
    border: 1px solid #3661ce;
    background-color: #073dc4;
    color: #f7f7f7;
    font-size: 1rem;
    cursor: pointer;
  }`