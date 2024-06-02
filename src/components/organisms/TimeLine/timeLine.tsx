import * as React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
height:90vh;
// min-height: 90vh;
// max-height: 700px;
box-sizing: border-box;
width: 100%;
// background-color: blue;
display: flex;
align-items: center;
// justify-content: center;
// margin-left: 20%;
position:relative;


@media only screen and (min-width: 700px){
    
    // min-height: 90vh;
    width: 50%;
}
`

const Line = styled.div`
width: 10px;
min-height: 500px;
height: 90%;

border-radius: 20px;
background-color:#3D0385;
position: relative;
left: 20%;
box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
animation: visible .5s 2s linear both;

@keyframes visible{
    0%{
        opacity: 0;
    }
    100%{
        opacity: 1;
    }
}
@media only screen and (min-width: 700px){
    left: 0;
}

`

const Color = styled.div`
background-color: #6304D6;
width: 10px;
border-radius:20px;
height: 10%;
animation: move 5s 2.5s linear both;

@keyframes move{
    0% {
        height: 0px;
    }
    10%{
        height: 20%;
    }
    20%{
        height: 20%;
    }
    30%{
        height: 40%;
    }
    40%{
        height: 40%;
    }
    50%{
        height: 60%;
    }
    60%{
        height: 60%;
    }
    70%{
        height: 80%;
    }
    80%{
        height: 80%;
    }
    100% { 
        height: 100%;
    }
}`
const TimeStop = styled.div<{time: string, position: any}>`
width: 20px;
height: 20px;
position: absolute;
top: ${props => props.position * 20 -1}%;
left:-10px;
background-color: #6304D6;
border-radius: 50%;
animation: apear 1s ${props => props.time}s both;
box-shadow: rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 56px, rgba(17, 17, 26, 0.1) 0px 24px 80px;

@keyframes apear {
    0% { 
        width: 0px;
        height: 0px;
        left:0;
    }
    50%{
        width: 40px;
        height: 40px;
        left:-15px;
    }
    100%{
        width: 30px;
        height: 30px;
        left:-10px;
    }
}`
const Arrow = styled.div<{time: string}>`
height: 2px;
width: 60px;
border-radius: 20px;
position: absolute;
top: 50%;
left: 50%;
background-color: #6304D6;
transform: translateY(-50%);
animation: show 1s ${props => props.time}s both;

@keyframes show {
    0%{
        width: 0px;
    }
    100%{
        width: 60px;
    }
}

`
const Desc = styled.div<{time: string}>`
// background-color: red;
box-sizing: border-box;
padding: 5px;
min-width: 300px;
position: absolute;
top:15%;
left: calc(50% + 70px);
color: white;
font-family: Montserrat;
font-size: 15px;
animation: showDesc 1s ${props => props.time}s both;
text-align: left;
@keyframes showDesc{
    0%{
        opacity: 0;
    }
    100%{
        opacity: 1;
    }
}
`


const TimeLine = () => {
    return ( <Wrapper>
        <Line>
        <Color />
        <TimeStop time="3" position='1'>
            <Arrow time="3.5"></Arrow>
            <Desc time="4"> 2013 - 2017 Technik Informatyk <br/> Zespół Szkól Ekonomicznych im. Stanisława Staszica</Desc>
        </TimeStop>
        <TimeStop time="4" position='2'>
        <Arrow time="4.5"></Arrow>
            <Desc time="5"> 2017-2020 Informatyk <br/> Impakt S.A </Desc>
        </TimeStop>
        <TimeStop time="5" position='3'>
        <Arrow time="5.5"></Arrow>
            <Desc time="6"> 2018 - 2022 Inżynier aplikacji internetowych i mobilnych <br/> Collegium Da Vinci</Desc>
        </TimeStop>
        <TimeStop time="6" position='4'>
        <Arrow time="6.5"></Arrow>
            <Desc time="7"> 2020 - obecnie Administrator IT <br/> ASTAT Sp z.o.o.</Desc>
        </TimeStop>
        </Line>
        
    </Wrapper> );
}
 
export default TimeLine;