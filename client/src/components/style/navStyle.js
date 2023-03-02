import styled from 'styled-components'

export const NavStyle = styled.div`
  display: flex;
  justify-content: space-between;
  // background-color: #f3f7ff;
  background-color: #c0d5ff;
  font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif;
  font-size: 1rem;
  box-shadow: 0px 10px 10px -15px #111;
  width: 100vw;
  position: fixed;
  top: 0%;
  z-index: 1;
  img {
    margin-top: 0.5%;
    width: 14vw;
  }
  ul {
    width: 70vw;
    display: flex;
    justify-content: flex-end;
    flex-wrap: nowrap;
    align-items: center;
    padding-right: 18px;
  }
  li {
    list-style: none;
    color: #00288d;
    cursor: pointer;
  }
  li:hover {
    color: blue;
  }
  .link{
    margin: 2% 1.5%;
    text-decoration: none;
  }
  li input {
    border: 1px solid #073dc4;
    height : 3vh;
    border-radius: 4px;
    outline: none;
    padding-left: 3%;
    color: #073dc4;
  }
`
