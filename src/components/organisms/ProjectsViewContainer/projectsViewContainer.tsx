import react from 'react';
import styled from 'styled-components';
import ProjectsContainer from 'components/molecules/ProjectsContainer/projectsContainer';

const Wrapper = styled.div`
width: 90%;
height:100vh; 
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-around;
// background-color: lightblue;
box-sizing: border-box;
padding:30px;
`
const Description = styled.div`
width:100%;
height: 20%;
font-family: Montserrat;
color: white;
// background-color: black;
display: flex;
flex-direction: column;
align-items: center;

`

const ProjectsViewContainer = () => {
    return(
        <Wrapper>
            <Description>
                <h1>My projects</h1>
                <p>I have written a lot of small projects where I was practicing new stuff I had learned. I would like to show you my biggest projects where you can see my skills the best.</p>
            </Description>
            <ProjectsContainer />
        </Wrapper>
    );
}

export default ProjectsViewContainer;