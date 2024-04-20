import React from "react";
import styled from "styled-components";
import ContactText from "components/molecules/ContactText/contactText";
import ContactForm from "components/molecules/ContactForm/contactForm";
import ContactData from "../ContactData/contactData";

const Wrapper = styled.div`
width: 90%;
height: 90vh;
// background-color: grey;
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-around;`
const ContactDataContainer = styled.div`
position: relative;
// border: 2px solid white;
// background-color:#AF8FE3;
background-color: white;
border-radius: 30px;
width: 80%;
height: 80%;
display: flex;
flex-direction: row;
overflow: hidden;`

const ContactContainer = () => {
    return (  
    <Wrapper>
        <ContactText />
        <ContactDataContainer>
            <ContactForm />
            <ContactData />
        </ContactDataContainer>
    </Wrapper>);
}
 
export default ContactContainer;