import react from 'react';
import styled from 'styled-components';
import { faSchool } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Skill from '../Skill/skill';

const Wrapper = styled.div`
width: 18%;
height: 70%;
border: 1px solid #6143A1;
display: flex;
flex-direction: column;
align-items: ;
// background-color: red;
padding: 30px;
box-sizing: border-box;
// flex-wrap: wrap;
`

const Title = styled.div`
width: 100%;
height: 50px;
background-color: #E0D1FF;
text-align: center;`

const SkillsContainer = styled.div`
width: 100%;
height: calc(100% - 50px);
background-color: white;
border-radius: 0 0 20px 20px;
box-sizing: border-box;
padding: 15px;
display: flex;
flex-direction: row;
flex-wrap: wrap;
justify-content: space-around;
align-items: flex-start;`

const Logo = styled.div<{png: string}>`
width: 30%;
height: 50px;
background-image:url(${props => props.png});
background-repeat: no-repeat;
// border: 2px solid red;
background-size: contain;
overflow: hidden;`


type Props = {
    title: string
    skills: string[];
}

const KnowledgeSource = ({title, skills} :Props) => {
    return(
    <Wrapper>
        <Title> <FontAwesomeIcon icon={faSchool} /><br/>{title}</Title>
        <SkillsContainer>
            {skills.map((skill) => (
                <Logo png={skill} />
            ))}
        </SkillsContainer>
    </Wrapper>
    )
}

export default KnowledgeSource;