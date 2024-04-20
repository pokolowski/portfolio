import React from "react";
import styled from "styled-components";
import SingleProject from "../SingleProject/singleProject";
import AnkietujToImage from 'assets/projects/ankietujto.png';
import CodingEyeLogo from 'assets/projects/1.png'
import HTMLLogo from 'assets/html.png';
import CSSLogo from 'assets/css.png';
import REACTLogo from 'assets/react.png';
import REDUXLogo from 'assets/redux.png';


const Wrapper = styled.div`
width: 70%;
height: 60%;
// background-color: lightyellow; 
display: flex;
flex-direction: row;
justify-content: space-around;
`

const ProjectsContainer = () => {

    return (
        <Wrapper>
            <SingleProject title='coding-eye.pl' logo={CodingEyeLogo} stack={[HTMLLogo, CSSLogo, REACTLogo, REDUXLogo]} description='My portfolio website, which collects in one place a summary of my skills, projects, information about me, and contact methods.' />
            <SingleProject title='Ankietuj To' logo={AnkietujToImage} stack={[HTMLLogo, CSSLogo, REACTLogo, REDUXLogo]} description='The website was written for students who can gather in one place and fill out their surveys under their name, which are an integral part of conducting research for diploma theses.' />
            <SingleProject title='Kapitan czujnik' logo={AnkietujToImage} stack={[HTMLLogo, CSSLogo, REACTLogo]} description='A website written for the company where I work. It connects to three Raspberry Pies located in three server rooms and downloads temperature data from them using RestAPI. The data is then displayed on a chart. When the temperature exceeds the set limits, the location name will change its color to attract attention. The website is displayed on a TV in the IT department.' /> 
        </Wrapper>
    )

}

export default ProjectsContainer;