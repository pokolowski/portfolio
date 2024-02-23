import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone } from "@fortawesome/free-solid-svg-icons";
// import {faGithub}

const Wrapper = styled.div`
width: 50%;
height: 100%;
// border: 2px solid yellow;
display: flex;
justify-content: center;
align-items: center;`

const Container = styled.div`
width: 70%;
height: 70%;
display: flex;
flex-direction: column;
`
const ContactDataRow = styled.div`
width: 150px;
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
            {/* <FontAwesomeIcon icon={faGithub} /> */}
            </ContactDataRow>
        </Container>
    </Wrapper> );
}
 
export default ContactData;