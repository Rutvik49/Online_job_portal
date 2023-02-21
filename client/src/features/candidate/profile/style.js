import styled from 'styled-components'

export const Style = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 18vh;

.head {
  background-color: #f6f8ff;
  min-height: 32vh;
  width: 60vw;
  display: flex;
  align-items: center;
  margin: auto;
  flex-wrap: wrap;
  font-family: "Helvetica", "Arial", sans-serif;
  border: 1px solid #3661ce;
  border-radius: 9px;
}
.profile {
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
.role {
  margin-top: 1%;
  font-size: 1.1rem;
  color: #6e8fe2;
}
.location{
  margin-top: 1%;
  font-size: 1.1rem;
  color: #1d45a8;
}
.body {
  min-height: 32vh;
  width: 60vw;
  display: flex;
  align-items: center;
  margin-left: auto;
  margin-right: auto;
  flex-wrap: wrap;
  margin-top: 2%;
  font-family: "Helvetica", "Arial", sans-serif;
}
.study {
  font-size: 1.1rem;
  color: #173fa5;
}
.edit {
  padding-left: 82%;
  color: #3661ce;
  text-decoration: underline;
  cursor: pointer;
}
.edu .degree,
.cname {
  margin-top: 3%;
}
.edu {
  margin-top: 1%;
  min-height: 32vh;
  width: 60vw;
  display: flex;
  flex-wrap: wrap;
  font-family: "Helvetica", "Arial", sans-serif;
  border: 1px solid #121a2e;
  border-radius: 4px;
  flex-direction: column;
}
label {
  align-items: flex-start;
  color: #073dc4;
  width: 100%;
  height: 6vh;
  margin-left: 4%;
}
input {
  height: 6vh;
  width: 90%;
  margin-left: 4%;
  margin-bottom: 2%;
  padding-left: 1%;
  font-size: 1rem;
  outline: none;
  border: 1px solid #3661ce;
  color: #022c94;
  background-color: #f6f8ff;
  border-radius: 5px;
  margin-top: -14px;
}
.work {
  margin-top: 3%;
  font-size: 1.1rem;
  color: #173fa5;
}

.exp {
  margin-top: 1%;
  min-height: 32vh;
  width: 60vw;
  display: flex;
  flex-wrap: wrap;
  font-family: "Helvetica", "Arial", sans-serif;
  border: 1px solid #121a2e;
  border-radius: 4px;
  flex-direction: column;
}
button {
  margin-left: auto;
  margin-right: auto;
  margin-top: 1%;
  margin-bottom: 2%;
  min-width: 7%;
  float: right;
  font-size: 1.1rem;
  color: white;
  border: 1px solid #3661ce;
  background-color: #3661ce;
  cursor: pointer;
  border-radius: 2px;
}`
