import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
width: 30%;
height: 100%;
// background-color: lightgreen;
display: flex;
flex-direction: column;
justify-content: space-around;
align-items: center;
// background-color: rgba(40,2,87,1);
color:white;
font-family: Montserrat;
box-shadow: rgba(0, 0, 0, 0.2) 0px 12px 28px 0px, rgba(0, 0, 0, 0.1) 0px 2px 4px 0px, rgba(255, 255, 255, 0.05) 0px 0px 0px 1px inset;
box-sizing: border-box;
padding: 20px;
`
const LogoContainer = styled.div<{bgImage: string, title:string}>`
width: 100%;
height: 100px;
// background-color: red;
background-image:url(${props => props.bgImage});
background-repeat: no-repeat;
background-size: 200px;
background-position: center;
position: relative;
&:after{
    content: '${props => props.title}';
    position: absolute;
    bottom: -30px;
    left: 50%;
    transform: translateX(-50%);
}
`

const TitleContainer = styled.div`
font-family: Montserrat;
height: 50px;`

const StackContainer = styled.div`
width: 100%;
display: flex;
flex-wrap: wrap;
justify-content: space-around;
// background-color: white;`

const DescContainer = styled.div`
// height: 50%;
width: 100%;`

const StackLogo = styled.div<{path: string}>`
width: 50px;
height: 50px;
overflow: hidden;
background-image:url(${props => props.path});
background-size: 40px;
background-repeat: no-repeat;
`

const GoTo = styled.div``



type Props={
    title: string,
    stack: string[],
    description: string,
    logo: string
}
const SingleProject = ({title='', logo, stack=[], description=''}: Props) => {
    return ( 
        <Wrapper>
            <LogoContainer bgImage={logo} title={title} />
            {/* <TitleContainer> {title} </TitleContainer> */}
            <StackContainer>
                {stack.map((singleStack) => (
                    <StackLogo path={singleStack} />
                ))}
            </StackContainer>
            <DescContainer>{description}</DescContainer>
        </Wrapper>
     );
}
 
export default SingleProject;