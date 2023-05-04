import styled from "styled-components";
// import { colorState } from "./variables";

export const FriendUl = styled.ul`
  width: 200px;
  margin: 0 auto;
  margin-top: 30px;
  margin-bottom: 30px;
`;
export const FriendItem = styled.li`
  display: flex;
  align-items: center;
  &:not(:last-child) {
    margin-bottom: 15px;
  }
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.14),
    0px 2px 1px rgba(0, 0, 0, 0.2);
`;

export const IsOnlineState = styled.span`
margin-right: 10px;
margin-left: 15px;
border-radius: 50%;
width: 10px;
height: 10px;
background-color: ${({ isOnline }) => { 
    return isOnline? 'green' : 'red'
    }
}}
`
export const FriendText = styled.p`
margin-left: 10px;
`