import * as React from 'react';
import styled from 'styled-components';
import AboutText from 'components/molecules/AboutText/aboutText';

const Wrapper = styled.div`
width: 90%;
min-height: 90vh;
// background-color: black;
box-sizing: border-box;
padding:15px;
// opacity: .1;
display: flex;
justify-content: space-between;
// overflow:hidden;
font-size: 5px;


@media only screen and (min-width: 700px){
    width:50%;
padding: 30px;
}

`

const AboutContainer = () => {
    return ( <Wrapper>
        <AboutText />
    </Wrapper> );
}
 
export default AboutContainer;