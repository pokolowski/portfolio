import react from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
position: relative;
height: 100%;
color: white;
font-size: 25px;
font-family: Montserrat;
box-sizing: border-box;
padding:30px;
`
const Span = styled.span`
position: relative;
line-height: 30px;
font-size: 15px;
width: 0%;
overflow: hidden;
animation: textIn .7s 1s linear both;

@keyframes textIn{
    0%{
        left:-50%;
        opacity: 0;
    }
    100%{
        left:0;
        opacity: 1;
    }
}
@media only screen and (min-widtH: 700px){
    font-size: 25px;
}
`
const Typing = styled.span`
height: 35px;
display: block;
width: 185px;
wrap:no-wrap;
position: relative;

overflow: hidden;
animation: typingAnimation 1s steps(15, end),
blinkCursor .7s steps(15) infinite;


@keyframes typingAnimation {
    0% { width: 0;}
    100% {width: 170px;}
}
@keyframes blinkCursor{
    0%{
        border-right: 2px solid white;
    }
    100%{
        border-right: none;
    }
}`
const PSection = styled.p`
position: relative;
width:190px;
height: 100%;
display: flex;
align-items: center;
color: #DEEE22;
font-weight: bold;
margin:0;
padding: 0;`


const AboutText = () => {
    return ( 
        <Wrapper>
            <Typing><PSection>Hi! I'm Patryk!</PSection> </Typing> 
            <Span>
        <br/><p>I have been connected with the IT industry since I was in technical school. Everything related to IT was interesting to me, and I wanted to explore it, which is why I came to the point where I had to choose whether I wanted to spend time gaining knowledge in the field of computer networks or programming. I moved towards computer networks after finding a job in this field, but programming is more often on my mind and gives me more joy. I especially love frontend because magic is created before my eyes, and I can see its tangible effects in the form of user interfaces.</p> <br/> <p>Outside of work, I am a sports enthusiast, particularly enjoying team sports such as basketball or volleyball. In winter, I like to spend my time snowboarding and descending the slopes. Additionally, I am a fan of computer games and enjoy reading fantasy books.</p>
        </Span>
        </Wrapper>
     );
}
 
export default AboutText;