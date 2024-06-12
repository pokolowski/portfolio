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
min-width: 350px;
min-height: 150vh;
background: rgb(2,0,36);
background: radial-gradient(circle, rgba(2,0,36,1) 0%, rgba(40,2,87,1) 0%, rgba(2,0,36,1) 100%);
position: relative;
top: 0;
left:0;
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-around;
overflow:hidden;
// ${props => props.$displayToggleSkills ? '': 'display:none;'}
${props => props.$firstRunSkills ? 'display:none;':props.$scrollFlagSkills ? 'animation: slideInSkills .5s linear both;':'animation: slideOutSkills .5s .8s linear both;'}
overflow:hidden;

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
        display:none;
    }
}`

const Skills = () => {
    const display = useSelector((state : RootState) => state.display.value);
    const [scrollFlag, setScrollFlag] = useState<boolean>(false);
    const [firstRunSkills, setFirstRunSkills] = useState<boolean>(true);
    const [popup, setPopUp] = useState<boolean>(false);
    const [popuptext, setpopuptext] = useState<string>('');
    useEffect( () => {
        
        if(display === 'skills' && scrollFlag===false){
            setScrollFlag(true);
            setFirstRunSkills(false);
        }
        if(display != 'skills'){
            setScrollFlag(false);
        }
    }, [display]);

    const SkillsDesc = [
        {skill:'HTML', Desc:"As a frontend developer proficient in HTML, I excel in crafting clean, semantic markup using the latest HTML5 standards. My expertise extends to integrating HTML seamlessly with CSS and JavaScript to create visually stunning, responsive interfaces. "},
        {skill: 'CSS', Desc:"As a frontend developer skilled in CSS, I specialize in creating visually appealing and responsive web designs. With a strong command of CSS3 and experience with preprocessors like Sass, I bring efficiency and organization to my styling workflow. My expertise ensures consistent and engaging user interfaces across various devices while prioritizing code maintainability and scalability."},
        {skill: 'JavaScript', Desc:"As a frontend developer adept in JavaScript, I excel in crafting dynamic and interactive web applications. My expertise includes manipulating data structures like objects and arrays efficiently, utilizing various methods to handle and transform data as required. With a strong grasp of modern JavaScript frameworks and libraries, I ensure seamless user experiences across different platforms and devices, delivering robust client-side functionalities."},
        {skill: 'REACT JS', Desc:"As a frontend developer proficient in React.js, I specialize in building dynamic and efficient user interfaces. Leveraging React Hooks and Context API, I create scalable and maintainable components that manage state and facilitate seamless data flow throughout the application. Additionally, my expertise extends to integrating REST APIs, enabling real-time data updates and enhancing user experiences with dynamic content."},
        {skill: "REDUX", Desc: "With a strong foundation in frontend development, I specialize in leveraging Redux to manage state in complex React.js applications. Proficient in implementing Redux architecture, including actions, reducers, and the store, I ensure efficient data management and maintainability. Additionally, my expertise extends to integrating Redux with React components, enabling centralized state management and facilitating seamless communication between different parts of the application."},
        {skill: 'Styled Components', Desc:"As a frontend developer proficient in React.js, I utilize Styled Components to encapsulate styling within components, enhancing modularity and maintainability. With expertise in creating styled components for React applications, I ensure consistent and visually appealing user interfaces. By leveraging the power of Styled Components, I streamline the styling process and facilitate easy customization, resulting in more efficient development workflows and polished user experiences."},
        {skill: 'TYPESCRIPT', Desc: "I have experience working with TypeScript, a statically typed superset of JavaScript. While not a specialist, I'm proficient in leveraging TypeScript to enhance code reliability and maintainability in frontend projects. By utilizing TypeScript's type-checking capabilities, I ensure more robust and predictable code, improving overall development efficiency and code quality."},
        {skill: 'EXPRESS', Desc: "While not a specialist, I'm proficient in integrating Express.js into applications, particularly connecting it with React and databases. My skills include handling CRUD operations, enabling seamless communication between frontend and backend systems. With this capability, I can efficiently retrieve and add records to databases, enhancing the functionality of web applications."},
        {skill: 'SQL', Desc:'With a solid foundation from technical education and  studies, I possess advanced SQL skills, allowing me to craft complex queries tailored to specific data requirements. My expertise extends to database design and administration.'}
    ]

    const SetPopUpHandler = (text='') => {
        setpopuptext(text);
        setPopUp(!popup);
    }
    const handleOnClick = () => {
        const top = document.getElementById("skills");
        if(top){
            top.scrollIntoView({behavior: 'smooth'});
        }
        else{
            console.log('Top is null');
        }
    }


    return ( <Wrapper $displayToggleSkills={display == 'skills' ? true: false} $scrollFlagSkills={scrollFlag} $firstRunSkills={firstRunSkills} id="skills">
        {popup ? <PopUp hidePopUp={SetPopUpHandler} skillDesc={SkillsDesc} title={popuptext} />: ''}
        <SkillsContainer popup={popup} SetPopUpHandler={SetPopUpHandler}  popuptext={popuptext}/>
        <CursesContainer />
        <GoBack rotate="90 stopni" setScrollFlag={setScrollFlag} handleOnClick={handleOnClick}/>
        
    </Wrapper> );
}
 
export default Skills;