import * as React from 'react';
import styled from 'styled-components';
import AboutText from 'components/molecules/AboutText/aboutText';

const Wrapper = styled.div`
width: 90%;
min-height: 90vh;
background-color: black;
box-sizing: border-box;
padding:30px;
// opacity: .1;
display: flex;
justify-content: space-between;


@media only screen and (min-width: 700px){

}

`

const AboutContainer = () => {
    return ( <Wrapper>
        <AboutText />
    </Wrapper> );
}
 
export default AboutContainer;