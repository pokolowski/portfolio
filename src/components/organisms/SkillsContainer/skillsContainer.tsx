import react from 'react';
import styled from 'styled-components';
import Skill from 'components/molecules/Skill/skill';

const Wrapper  = styled.div`
width: 80%;
height: 80vh;
background-color: red;
display: flex;
flex-direction: row;
flex-wrap: wrap;
justify-content: space-around;
`

const Desc = styled.div`
width: 100%;
height: 20%;
background-color: grey;`


const SkillsContainer = () => {
    return ( <Wrapper>
        <Desc></Desc>
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
    </Wrapper> );
}
 
export default SkillsContainer;