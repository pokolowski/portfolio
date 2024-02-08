import * as React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
// background-color: blue;
// border: 2px solid black;
font-size: 20px;
cursor: pointer;
animation: appear 3s both;

@keyframes appear {
    0%{
        opacity: 0;
        transform: translateY(-100%);
    }
    100%{
        opacity: 1;
        transform: translateY(0%);
    }
}
`

type PropsType = {
    text: string,
    onClick: () => void,
}
const NavItem = ({text, onClick}: PropsType) => {
    return (  <Wrapper onClick={onClick} > {text} </Wrapper>);
}
 
export default NavItem;