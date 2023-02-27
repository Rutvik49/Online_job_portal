import styled from 'styled-components'

export const Style = styled.div`
  margin-top: 5px;
  display: flex;
  flex-direction: row;
  font-family: "Roboto", "Helvetica", "Arial", sans-serif;
}
 .companyInfo {
  width: 40vw;
  display: flex;
  flex-direction: column;
  height: 100%;
  margin: 3% 0% 3% 3%;
}
.apply {
  margin: 3% 3% 3% 0%;
  width: 60vw;
  display: flex;
  flex-direction: column;
}
 .companyInfo .head {
  font-size: medium;
  color: #073dc4;
  margin: auto;
  margin-bottom: 6%;
}
 .companyInfo img {
  margin: auto;
  width: 120px;
  height: 120px;
  border-radius: 50%;
  border : 1px solid #688ae0;
}
 .companyInfo .name {
  font-size: large;
  color: #073dc4;
  margin: auto;
  margin-bottom: 5%;
}
 .companyInfo label {
  font-size: large;
  color: #688ae0;
}
 .companyInfo span {
  font-size: large;
  color: #073dc4;
  margin-bottom: 5%;
}

 .apply .head {
  font-size: medium;
  color: #073dc4;
  margin-bottom: 5%;
}
 .apply .name {
  font-size: large;
  color: #0031af;
}
 .apply .role {
  font-size: small;
  color: #446fde;
  margin-bottom: 3%;
}
 .apply .txt {
  font-size: medium;
  color: #073dc4;
  font-weight: 600;
  margin-bottom: 1%;
}
 .apply textarea {
  font-size: medium;
  color: #073dc4;
  height: 30%;
  outline: none;
  border: 1px solid #446fde;
  border-radius: 5px;
  resize: none;
  font-size: large;
  padding-left: 5px;
}
 .apply .buttons {
  margin-top: 3%;
  display: flex;
  justify-content: flex-end;
}
 .apply .buttons .cancel {
    color: #00206f;
  margin-right: 4%;
  cursor: pointer;
}
 .apply .buttons .send {
    cursor: pointer;
    background-color: #073dc4;
    color: #f3f7ff;
    cursor: pointer;
    outline: none;
    border: 1px solid #073dc4;
    border-radius: 2px;
    width: 30%;
}
`
