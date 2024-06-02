import React from "react";
import styled from "styled-components";
import ContactText from "components/molecules/ContactText/contactText";
import ContactForm from "components/molecules/ContactForm/contactForm";
import ContactData from "../ContactData/contactData";

const Wrapper = styled.div`
width: 90%;
min-height: 90vh;
// background-color: grey;
position:relative;
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-around;`
const ContactDataContainer = styled.div`
position: relative;
background-color: white;
border-radius: 30px;
margin-bottom: 150px;
box-sizing: border-box;
width: 80%;
height: 80%;
min-height: 80vh;
display: flex;
flex-direction: column-reverse;
overflow: hidden;
@media only screen and (min-width: 1200px){
    flex-direction: row;
    margin-bottom: 50px;
}`

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