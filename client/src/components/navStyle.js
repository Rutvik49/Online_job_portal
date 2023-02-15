import styled from 'styled-components'

export const NavStyle = styled.div`
    display: flex;
    justify-content: space-between; 
    background-color: #f3f7ff;
    font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif;
    font-size: 1rem;
    box-shadow: 0px 10px 10px -15px #111;
img{
    margin-top: 0.5%;
    width: 12vw;
}    
ul{
    width: 70vw;
    display: flex;
    justify-content: flex-end;
    flex-wrap: nowrap;
    align-items: center;
}
li{
    margin: 2% 1.5%;
    list-style: none;
    color: #073dc4;
    cursor: pointer;
}
li:hover{
    color: blue;
}
li input{
    border: 1px solid #073dc4;
    border-radius: 4px;
    outline: none;
    padding-left: 3%;
    color: #073dc4;
}`