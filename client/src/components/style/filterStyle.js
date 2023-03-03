import styled from 'styled-components'

export const Style = styled.div`
  background-color: #f3f7ff;
  font-family: "Roboto", "Helvetica", "Arial", sans-serif;
  width: 70%;
  min-height: 100%;
  margin: 7% auto;
  padding-top: 2%;
  padding-bottom: 2%;
  display: flex;
  justify-content: space-evenly;
  box-shadow: 0px 10px 10px -16px #111;
  border-radius: 5px;
}
.s1 {
  color: #073dc4;
  font-size: 1.1rem;
  font-weight: 550;
}
input {
  width: 30%;
  height: 4vh;
  font-size: 1rem;
  outline: none;
  color: #073dc4;
  border: 1px solid #3661ce;
  color: #022c94;
  border-radius: 5px;
  padding-left: 1%;
}
input:focus{
  box-shadow: 1px 1px 3px #3661ce;
}
.dropdown1 {
  margin-top: 1.9%;
  margin-left: -22%;
  width: 21.5%;
  background-color: white;
  display: flex;
  position:absolute;
  flex-direction: column;
  border: 1px solid gray;
  cursor: pointer;
}
.dropdown2 {
  margin-top: 1.9%;
  margin-left: 24.5%;
  width: 21.5%;
  background-color: white;
  display: flex;
  position:absolute;
  flex-direction: column;
  border: 1px solid gray;
  cursor: pointer;
}
.dropdown-row {
  cursor: pointer;
  text-align: start;
  margin: 2px 0;
}
.dropdown1:empty, .dropdown2:empty {
  border: none;
}
button {
  height: 4vh;
  border-radius: 5px;
  width:13%;
  border: 1px solid #3661ce;
  background-color: white;
  color: #073dc4;
  font-size: 1rem;
  cursor: pointer;
}
button:active, button:hover{
  background-color: #073dc4;
  color: #f7f7f7;
}
`
