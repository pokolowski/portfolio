import react from 'react';
import styled from 'styled-components';
import KnowledgeSource from 'components/molecules/KnowledgeSource/knowledgeSource';
import HTMLLOGO from 'assets/html.png';
import JSLOGO from 'assets/js.png';
import REACTLOGO from 'assets/react.png';
import TYPESCRIPTLOGO from 'assets/typescript.png';
import CSSLOGO from 'assets/css.png';
import EXPRESSLOGO from 'assets/express.png';
import STYLEDLOGO from 'assets/styledcomponents.png';
import REDUXLOGO from 'assets/redux.png';
import SQLLOGO from 'assets/sql.png';

const Wrapper  = styled.div`
width: 80%;
min-height: 50vh;
position: relative;
background: rgb(2,0,36);
background: radial-gradient(circle, rgba(2,0,36,1) 0%, rgba(40,2,87,1) 0%, rgba(2,0,36,1) 100%);
display: flex;
flex-direction: row;
flex-wrap: wrap;
justify-content: space-around;
overflow: hidden;
transition:.2s;
margin-bottom: 150px;
`
const Desc = styled.div`
width: 100%;
height: 20%;
background-color: white;
display: flex;
bos-sizing: border-box;
padding: 10px;
flex-direction: column;
align-items: center;
justify-content: center;
font-family: Montserrat;
text-align:center;`

const Title = styled.h1`
color: rgb(2,0,36);

`;

const CursesContainer = () => {
    const TechnicanSkills = [HTMLLOGO, CSSLOGO, JSLOGO, SQLLOGO];
    const CollegeSkills = [HTMLLOGO, CSSLOGO, JSLOGO, SQLLOGO];
    const YTSkills = [REACTLOGO, REDUXLOGO, STYLEDLOGO];
    const UdemySkills = [CSSLOGO, JSLOGO, TYPESCRIPTLOGO, EXPRESSLOGO];
    const DocumentationSkills = [JSLOGO, REACTLOGO, REDUXLOGO, STYLEDLOGO, EXPRESSLOGO, TYPESCRIPTLOGO];

    return (
        <Wrapper>
            <Desc> <Title>All of these I have learned from...</Title> </Desc>
            <KnowledgeSource title="IT Technical School"  skills={TechnicanSkills} />
            <KnowledgeSource title="College" skills={CollegeSkills} />
            <KnowledgeSource title="YT - Hello Roman" skills={YTSkills} />
            <KnowledgeSource title="Udemy" skills={UdemySkills}/>
            <KnowledgeSource title="Documentation" skills={DocumentationSkills} />
        </Wrapper>
    )
}

export default CursesContainer;