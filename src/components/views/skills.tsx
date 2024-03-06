import react from 'react';
import styled from 'styled-components';
import SkillsContainer from 'components/organisms/SkillsContainer/skillsContainer';

const Wrapper = styled.div`
width: 100%;
height: 100vh;
background: rgb(2,0,36);
background: radial-gradient(circle, rgba(2,0,36,1) 0%, rgba(40,2,87,1) 0%, rgba(2,0,36,1) 100%);
position: absolute;
top: 0;
left:0;
display: flex;
align-items: center;
justify-content: center;
`

const Skills = () => {
    return ( <Wrapper>
        <SkillsContainer />
    </Wrapper> );
}
 
export default Skills;