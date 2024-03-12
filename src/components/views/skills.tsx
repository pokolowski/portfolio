import react from 'react';
import styled from 'styled-components';
import SkillsContainer from 'components/organisms/SkillsContainer/skillsContainer';
import CursesContainer from 'components/organisms/CoursesContainer/coursesContainer';

const Wrapper = styled.div`
width: 100%;
min-height: 150vh;
background: rgb(2,0,36);
background: radial-gradient(circle, rgba(2,0,36,1) 0%, rgba(40,2,87,1) 0%, rgba(2,0,36,1) 100%);
position: absolute;
top: 0;
left:0;
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-around;
t`

const Skills = () => {
    return ( <Wrapper>
        <SkillsContainer />
        <CursesContainer />
    </Wrapper> );
}
 
export default Skills;