import react from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
width: 80%;
height: 20%;
text-align: center;
font-family: Montserrat;
color: white;
`

const ContactText = () => {
    return ( <Wrapper>
        <h1>Contact me!</h1>
        <p>Please contact me via the contact form or by phone.</p>
    </Wrapper> );
}
 
export default ContactText;