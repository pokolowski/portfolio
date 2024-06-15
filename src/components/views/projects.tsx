import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { RootState } from 'components/Redux/store';
import GoBack from 'components/atoms/goBack/goBack';
import { useDispatch } from 'react-redux'; 
import { displayView } from 'components/Redux/features/displayView/displaySlice';
import ProjectsViewContainer from 'components/organisms/ProjectsViewContainer/projectsViewContainer';

const Wrapper = styled.div<{$displayTogle: boolean, $scrollFlag: boolean, $firstRun: boolean}>`
width: 100%;
min-width: 350px;
min-height:100vh;
background: rgb(2,0,36);
// background:white;
background: radial-gradient(circle, rgba(2,0,36,1) 0%, rgba(40,2,87,1) 0%, rgba(2,0,36,1) 100%);
// background: red;
position: relative;
top: 0;
left: 0;
// animation: slideIn .5s linear both;
display: flex;
// overflow:hidden;
${props => props.$firstRun ? 'display:none;':props.$scrollFlag ? 'animation: slideInProjects .5s linear both;':'animation: slideOutProjects .5s 1s linear both;'}
justify-content: center;


@keyframes slideInProjects {
    0%{
        transform: translateY(-100%);
    }
    100%{
        transform: translateY(0%);
    }
}
@keyframes slideOutProjects {
    0%{
        transform: translateY(0%);
    }
    100%{
        transform: translateY(-100%);
        // display:none;
        position:absolute;
    }
}
`


const Projects = () => {
    const display = useSelector((state : RootState) => state.display.value);
    const dispatch = useDispatch();
    const [scrollFlag, setScrollFlag] = useState<boolean>(false);
    const [firstRun, setFirstRun] = useState<boolean>(true);

    useEffect( () => {
        // console.log(display);
        if(display === 'projects' && scrollFlag===false){
            setScrollFlag(true);
            setFirstRun(false);
        }
        if(display != 'projects'){
            setScrollFlag(false);
        }
    }, [display]);
    const handleOnClick = () => {
        const top = document.getElementById("projects");
        if(top){
            top.scrollIntoView({behavior: 'smooth'});
            // console.log('leci scroll');
        }
        else{
            console.log('Top is null');
        }
    }

    return ( 
    <Wrapper $displayTogle= {display === 'projects' ? true:false} $scrollFlag={scrollFlag} $firstRun={firstRun} id="projects">
        <ProjectsViewContainer />
        <GoBack rotate="90 stopni" setScrollFlag={setScrollFlag} handleOnClick={handleOnClick}/>
    </Wrapper>  );
}
 
export default Projects;