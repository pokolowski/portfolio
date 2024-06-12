import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const Wrapper = styled.div`
width: 50%;
height: 40px;
// background-color: white;
margin-bottom: 30px;
// background: linear-gradient(112.1deg, rgb(32, 38, 57) 11.4%, rgb(63, 76, 119) 70.2%);
// box-shadow: rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 56px, rgba(17, 17, 26, 0.1) 0px 24px 80px;
box-shadow: #FF3CAC 5px -2px 3px 0px, #2B86C5 -5px 2px 3px 0;
background-color: #FF3CAC;
background-image: linear-gradient(225deg, #FF3CAC 0%, #784BA0 50%, #2B86C5 100%);
border-radius:10px;
cursor: pointer;


display: flex;
align-items:center;
justify-content: center;
text-align: center;
font-family: Montserrat;`


type Props = {
    url?: string
}
const GithubBtn = ({url} : Props) => {

    return(
        <Wrapper onClick={() => window.open(url, "_blank")}>check on <FontAwesomeIcon icon={faGithub} /></Wrapper>
    )
}

export default GithubBtn;