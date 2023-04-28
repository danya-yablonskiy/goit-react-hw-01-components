import styled from 'styled-components';

export const ProfileDiv = styled.div`
  margin: 0 auto;
  width: 250px;
  text-align: center;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.14),
    0px 2px 1px rgba(0, 0, 0, 0.2);
`;
export const ProfileDescription = styled.div`
  padding-bottom: 15px;
  background-color: lightgrey;
`;
export const ProfileImg = styled.img`
margin: 0 auto;
margin-bottom: 15px;
width: 150px;
height: 150px;
`

export const ProfileName = styled.p`
  font-size: 24px;
  margin-bottom: 10px;
`;

export const ProfileTag = styled.p`
margin-bottom: 5px;
color: grey;
`

export const ProfileLocation = styled.p`
  color: grey;

`;

export const ProfileStatsUl = styled.ul`
background-color: lightcyan;
border: 1px dashed grey;
  display: flex;
  height: 70px;
`;

export const ProfileStatsItem = styled.li`
  padding-top: 10px;
  width: 100%;
  height: 100%;
  &:not(:last-child) {
      border-right: 1px dashed grey;
    }
`;

export const ProfileCount = styled.span`
font-weight: 700;
`