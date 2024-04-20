import react, {useEffect, useState} from 'react';
import styled from 'styled-components';
import Button from '@mui/material/Button';

const StickyContainer = styled.div`
width: 100%;
height: 100vh;
// background-color: red;
position: absolute;
top: 0;
left: 0;
// transform: translate(-50%, -50%);
z-index:1;
display: flex;
justify-content:center;
align-items: center;
`
const Wrapper = styled.div`
width: 60vw;
height: 50vh;
// position: sticky;
background-color: white;
// top: 50px;
// left: 50%;
// transform: translate(-50%);
filter: blur(0);
z-index: 1;
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-around;
border-radius: 20px;
box-shadow: black 0px 0px 50px 0px;
box-sizing: border-box;
padding: 20px;
`
const H1=styled.h1`
font-family: Montserrat;
color: #13013B;`

const Paragraph=styled.span`
color: grey;
text-align: justify;
font-family: Montserrat;`

interface SkillDescription {
    skill: string;
    Desc: string;
}

type Props = {
    title: string,
    hidePopUp: () => void,
    skillDesc: SkillDescription[];
}

function PopUp({title, hidePopUp, skillDesc}: Props) {

    const [description, setDescription] = useState<string>('')

    useEffect(() => {
        const getDesc = (title:string) => {
            skillDesc.forEach(skill => {
                if(skill.skill === title){
                    setDescription(skill.Desc);
                }
            })
        }
        if(title){
            getDesc(title);        
        }
    },[title])

    return ( 
    <StickyContainer>
        <Wrapper>
        <H1> {title} </H1>
        <Paragraph>{description}</Paragraph>
        <Button variant='outlined' onClick={hidePopUp}> Close </Button>
    </Wrapper>
     </StickyContainer>
 );
}

export default PopUp;