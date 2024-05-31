import react from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
width: 50%;
height: 250px;
// border: 2px solid black;
display: flex;
flex-direction: column;
align-items: center;
// background-color: white;
// box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
border-radius: 20px;
padding: 10px;
box-sizing: border-box;

@media only screen and (min-width: 1200px){
    width: 23%
}

`

const Logo = styled.div<{png:string}>`
width: 80%;
height: 70%;
// background-color: green;
background-image:url(${props => props.png});
background-size: contain;
background-repeat: no-repeat;
background-position: center;
`

const ReadMore= styled.div`
width: 100%;
height: 30%;
display: flex;
justify-content: center;
align-items: center;
text-align: center;
font-family: Montserrat;
font-weight: bold;
cursor: pointer;`

const Container =  styled.div`
width: 70%;
height: 100%;
border-radius: 20px;
background-color: white;
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-between;
padding: 10px;
box-sizing: border-box;
box-shadow: black 0px 0px 50px 0px;
@media only screen and (min-width: 1200px){
    width: 50%
}`



type PropsType = {
    title: string,
    logo: string,
    showPopUp: (text: string) => void
}

const Skill = ({title, logo, showPopUp}: PropsType) => {
    return ( <Wrapper>
        <Container>
        <Logo png={logo} />
        <ReadMore onClick={() => showPopUp(title)}>Read more</ReadMore>
        </Container>
    </Wrapper> );
}
 
export default Skill;