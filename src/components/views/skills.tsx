import react, { useState, useEffect } from 'react';
import styled from 'styled-components';
import SkillsContainer from 'components/organisms/SkillsContainer/skillsContainer';
import CursesContainer from 'components/organisms/CoursesContainer/coursesContainer';
import { useSelector } from 'react-redux';
import { RootState } from 'components/Redux/store';
import GoBack from 'components/atoms/goBack/goBack';
import PopUp from 'components/atoms/PopUp/popUp';

const Wrapper = styled.div<{$displayToggleSkills: boolean, $scrollFlagSkills: boolean, $firstRunSkills: boolean}>`
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
overflow:hidden;
${props => props.$displayToggleSkills ? '': 'display:none;'}
${props => props.$firstRunSkills ? 'display:none;':props.$scrollFlagSkills ? 'animation: slideInSkills .5s linear both;':'animation: slideOutSkills .5s linear both;'}

@keyframes slideInSkills {
    0%{
        transform: translateX(100%);
    }
    100%{
        transform: translate(0%);
    }
}
@keyframes slideOutSkills {
    0%{
        transform: translateX(0%);
    }
    100%{
        transform: translate(100%);
    }
}`

const Skills = () => {
    const display = useSelector((state : RootState) => state.display.value);
    const [scrollFlag, setScrollFlag] = useState<boolean>(false);
    const [firstRunSkills, setFirstRunSkills] = useState<boolean>(true);
    useEffect( () => {
        if(display === 'skills' && scrollFlag===false){
            setScrollFlag(true);
            setFirstRunSkills(false);
        }
        if(display != 'skills'){
            setScrollFlag(false);
        }
    }, [display]);
    return ( <Wrapper $displayToggleSkills={display == 'skills' ? true: false} $scrollFlagSkills={scrollFlag} $firstRunSkills={firstRunSkills} id="skills">
        
        <SkillsContainer />
        <CursesContainer />
        <GoBack rotate="90 stopni" setScrollFlag={setScrollFlag}/>
        
    </Wrapper> );
}
 
export default Skills;