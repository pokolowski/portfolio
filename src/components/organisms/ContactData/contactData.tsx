import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faSquareGithub } from "@fortawesome/free-brands-svg-icons";


const Wrapper = styled.div`
width: 100%;
height: 30%;
display: flex;
justify-content: center;
align-items: center;
@media only screen and (min-width: 1200px){
    width: 50%;
}`

const Container = styled.div`
width: 80%;
height: 70%;
display: flex;
flex-direction: column;
@media only screen and (min-width: 1200px){
    width: 50%;
}
`
const ContactDataRow = styled.div`
width: 100%;
height: 50px;
display: flex;
justify-content: space-between;
align-items: center;
`

const ContactData = () => {
    return ( <Wrapper>
        <Container>
            <ContactDataRow>
                <FontAwesomeIcon icon={faPhone} />
                <p>+48 607 921 653</p>
            </ContactDataRow>
            <ContactDataRow>
                <FontAwesomeIcon icon={faEnvelope} />
                <p>okolowski.p@gmail.com</p>
            </ContactDataRow>
            <ContactDataRow>
                <FontAwesomeIcon icon={faGithub} />
                <p><a href="https://github.com/pokolowski" target="_blank">https://github.com/pokolowski</a></p>
            </ContactDataRow>
        </Container>
    </Wrapper> );
}
 
export default ContactData;