import styled from 'styled-components';

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}


export const Section = styled.section`
text-align: center;
width: 250px;
margin: 0 auto;
margin-top: 30px;
margin-bottom: 30px;
`
export const SectionTitle = styled.h2`
margin-bottom: 10px;
`

export const SectionList = styled.ul`
display:flex;
justify-content: space-between;
`

export const SectionItem = styled.li`
color: white;
font-size: 17px;
font-weight: 700px;
  background-color: ${getRandomHexColor};
  width: 100%;
`;