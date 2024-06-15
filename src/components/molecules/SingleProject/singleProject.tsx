import React from "react";
import styled from "styled-components";
import GithubBtn from "components/atoms/githubButton/githubBtn";

const Wrapper = styled.div`
width: 100%;
min-height: 40vh;
display: flex;
flex-direction: column;
justify-content: space-around;
align-items: center;
color:white;
font-family: Montserrat;
box-shadow: rgba(0, 0, 0, 0.2) 0px 12px 28px 0px, rgba(0, 0, 0, 0.1) 0px 2px 4px 0px, rgba(255, 255, 255, 0.05) 0px 0px 0px 1px inset;
box-sizing: border-box;
padding: 20px;
overflow:hidden;
position: relative;
margin-bottom: 50px;


@media only screen and (min-width: 1200px){
    width: 30%;
    flex-grow: 
    height: 100%;
}
`
const LogoContainer = styled.div<{$bgImage: string, title?:string}>`
width: 100%;
height: 220px;
background-image:url(${props => props.$bgImage});
background-repeat: no-repeat;
background-size: contain;
background-position: center;
position: relative;
cursor: pointer;
overflow: hidden;
&:after{
    content: '${props => props.title}';
    position: absolute;
    bottom: -30px;
    left: 50%;
    transform: translateX(-50%);
    width: 100%;
}

@media only screen and (min-width:1200px){
    width: 100%;
    height: 100px;
    background-size: 150px;
}

`

const TitleContainer = styled.a`
font-family: Montserrat;
font-size: 12px;
color:lightblue;
height: 50px;`

const StackContainer = styled.div`
width: 100%;
display: flex;
flex-wrap: wrap;
justify-content: space-around;`

const DescContainer = styled.div`
width: 100%;`

const StackLogo = styled.div<{path: string}>`
width: 50px;
height: 50px;
overflow: hidden;
background-image:url(${props => props.path});
background-size: 40px;
background-repeat: no-repeat;
`
const Stack = styled.p<{color: string}>`
color: ${props => props.color === "HTML" ? "#F24822": props.color === "CSS" ? "#0511F2" : props.color === "REACT.JS" ? "#53C0DD" : props.color === "REDUX" ? "#724EBF": props.color === "SQL" ? "#F27405": props.color === "Socket IO" ? "#D9D9D9" : props.color === "TYPESCRIPT" ? "#2C7BBF": props.color === "EXPRESS" ? "#595959": ""};
margin-right: 10px; `

const GoTo = styled.div``



type Props={
    title: string,
    stack: string[],
    description: string,
    logo: string,
    url: string
}
const SingleProject = ({title='', logo, stack=[], description='', url}: Props) => {
    return ( 
        <Wrapper>
        <LogoContainer $bgImage={logo} title={title} />
            <StackContainer>
                {stack.map((singleStack, index) => (
                    <Stack color={singleStack} key={index}>{singleStack}</Stack>
                ))}
            </StackContainer>
            <GithubBtn url={url} />
            <DescContainer>{description}</DescContainer>
        </Wrapper>
     );
}
 
export default SingleProject;