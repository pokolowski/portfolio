import react, {useState} from 'react';
import styled from 'styled-components';
import Skill from 'components/molecules/Skill/skill';
import HTMLLOGO from 'assets/html.png';
import JSLOGO from 'assets/js.png';
import REACTLOGO from 'assets/react.png';
import TYPESCRIPTLOGO from 'assets/typescript.png';
import CSSLOGO from 'assets/css.png';
import EXPRESSLOGO from 'assets/express.png';
import STYLEDLOGO from 'assets/styledcomponents.png';
import REDUXLOGO from 'assets/redux.png';
import SQLLOGO from 'assets/sql.png';
import PopUp from 'components/atoms/PopUp/popUp';



const Wrapper  = styled.div<{blur: boolean}>`
width: 80%;
min-height: 80vh;
position: relative;
background: rgb(2,0,36);
background: radial-gradient(circle, rgba(2,0,36,1) 0%, rgba(40,2,87,1) 0%, rgba(2,0,36,1) 100%);
display: flex;
flex-direction: row;
flex-wrap: wrap;
align-items: center;
justify-content: space-around;
overflow: hidden;
${props => props.blur ? 'filter:blur(2px);': ''}
transition:.2s;
box-sizing: border-box;
margin-bottom: 100px;
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
justify-content: space-between;
font-family: Montserrat;
margin-bottom: 50px;`


const Title = styled.h1`
color: rgb(2,0,36);
`;
const Description = styled.p`
color: grey;
`

type Props = {
    popup: boolean,
    SetPopUpHandler: () => void,
    popuptext: string
}

const SkillsContainer = ({popup, SetPopUpHandler, popuptext} : Props) => {
    // const [popup, setPopUp] = useState<boolean>(false);
    // const [popuptext, setpopuptext] = useState<string>('');

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

    // const SetPopUpHandler = (text='') => {
    //     setpopuptext(text);
    //     setPopUp(!popup);
    // }


    return ( 
        <>
        
    <Wrapper blur={popup}>
        <Desc>
            <Title>I offer you my skills...</Title>
            <Description>I don't want to categorize my skills on a scale of 1 to 10, so for each skill I included a scope of knowledge on the subject </Description>
        </Desc>
        <Skill title="HTML" logo={HTMLLOGO} showPopUp={SetPopUpHandler} />
        <Skill title="CSS" logo={CSSLOGO} showPopUp={SetPopUpHandler}/>
        <Skill title="JavaScript" logo={JSLOGO} showPopUp={SetPopUpHandler}/>
        <Skill title="REACT JS" logo={REACTLOGO} showPopUp={SetPopUpHandler}/>
        <Skill title="REDUX" logo={REDUXLOGO} showPopUp={SetPopUpHandler}/>
        <Skill title="Styled Components" logo={STYLEDLOGO} showPopUp={SetPopUpHandler}/>
        <Skill title="TYPESCRIPT" logo={TYPESCRIPTLOGO} showPopUp={SetPopUpHandler}/>
        <Skill title="EXPRESS" logo={EXPRESSLOGO} showPopUp={SetPopUpHandler}/>
        <Skill title="SQL" logo={SQLLOGO} showPopUp={SetPopUpHandler}/>
    </Wrapper>
    {/* {popup ? <PopUp hidePopUp={SetPopUpHandler} skillDesc={SkillsDesc} title={popuptext} />: ''} */}
        </>
     );
}
 
export default SkillsContainer;