import react, {useState, useEffect} from 'react';
import styled from 'styled-components';
import TextField from '@mui/material/TextField';
import { TextareaAutosize as BaseTextareaAutosize } from '@mui/base/TextareaAutosize';
import FormControl from '@mui/material/FormControl';
import { Button } from '@mui/material';



const Wrapper = styled.div`
width: 100%;
height: 100%;
// border: 2px solid blue;
position: relative;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
@media only screen and (min-width:1200px){
  width: 50%;
}
`

const Container = styled.div`
width: 100%;
height: 100%;
// background-color: yellow;
// border: 2px solid red;
border-radius: 20px;
position:relative;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
box-sizing: border-box;
padding: 10px;
overflow: hidden;
@media only screen (min-width: 1200px){
  width: 90%;
  padding: 30px;
}
`

const FormContainer = styled.form`
width: 100%;
height: 80%;
// background-color: red;
display: flex;
flex-direction: column;
justify-content: space-around;
@media only screen and (min-width:1200px){
  height: 60%;
}`

const EmailDesc = styled.h1`
color: black;
font-family: Montserrat;
text-align:center;
// background-color:blue;`

const SendStatus = styled.p<{$sendInfo: string}>`
color: #3debd7;
animation: showSendStatus 2s both;
// font-weight: bold;
font-size: 20px;
display: none;
${props => props.$sendInfo === 'Mail Sent' ? 'animation: showSendStatus 10s both;':''}

@keyframes showSendStatus {
  0%{
    display: inline;
    transform: translateY(-100px);
  }
  5%{
    transform: translateY(0);
  }
  94%{
    transform: translateY(0);
  }
  99%{
    transform: translateY(0);
  }
  100%{
    display: none;
  }
}`


const ContactForm = () => {

    const blue = {
        100: '#DAECFF',
        200: '#b6daff',
        400: '#3399FF',
        500: '#007FFF',
        600: '#0072E5',
        900: '#003A75',
      };
    
      const grey = {
        50: '#F3F6F9',
        100: '#E5EAF2',
        200: '#DAE2ED',
        300: '#C7D0DD',
        400: '#B0B8C4',
        500: '#9DA8B7',
        600: '#6B7A90',
        700: '#434D5B',
        800: '#303740',
        900: '#1C2025',
      };
    const Textarea = styled(BaseTextareaAutosize)(
        ({ theme }) => `
        box-sizing: border-box;
        width: 100%;
        font-family: 'IBM Plex Sans', sans-serif;
        font-size: 0.875rem;
        font-weight: 400;
        line-height: 1.5;
        padding: 8px 12px;
        border-radius: 8px;
        resize:none;
        color: ${ grey[900]};
        background: ${'#fff'};
        border: 1px solid ${ grey[200]};
        box-shadow: 0px 2px 2px ${ grey[50]};
    
        &:hover {
          border-color: ${blue[400]};
        }
    
        &:focus {
          border-color: ${blue[400]};
          box-shadow: 0 0 0 3px ${blue[200]};
        }
    
        // firefox
        &:focus-visible {
          outline: 0;
        }
      `,
      );
    const [formData, setFormData] = useState<{senderAddress: string, subject: string, content: string}>({senderAddress: '', subject: '', content: ''})
    const [SendInfo, setSendInfo] = useState<string>('');

    const handleSubmit = async (event: any) => {
      event.preventDefault();
      fetch('http://localhost:3300/api/sendmail', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'  // Add this line
          },
          body: JSON.stringify({
            company: event.target[0].value,
            subject: event.target[2].value,
            content: event.target[4].value
          })
      }).then(response => response.json())
      .then(data => setSendInfo(data.res))
      .catch(err => console.log(err))
      event.target[0].value = ''
      event.target[2].value = ''
      event.target[4].value = ''
      // setFormData({
      //   senderAddress: event.target[0].value,
      //   subject: event.target[2].value,
      //   content: event.target[4].value
      // });
    }

    // useEffect(() => {
    //     console.log(formData);
    // }, [formData]);
    return ( <Wrapper> 
        
        <Container>
          <EmailDesc>Contact me via form</EmailDesc>
          <SendStatus $sendInfo = {SendInfo}>Mail Sent</SendStatus>
          <FormContainer onSubmit={handleSubmit}>
            {/* <FormControl > */}
            {/* style={{background: "white"}} */}
            <TextField id="outlined-basic" label="Your email" variant="outlined" style={{background: "white"}}  margin="dense" type="email" required/>
            {/* </FormControl> */}
            {/* <FormControl > */}
            <TextField id="outlined-basic" label="Subject" variant="outlined" style={{background: "white"}} margin="dense" required />
            {/* </FormControl> */}
            {/* <FormControl > */}
            <Textarea aria-label="minimum height" minRows={3} placeholder=""  required />
            {/* </FormControl> */}
            <Button type="submit">Send message</Button>
          </FormContainer>
            
        </Container>


    </Wrapper> );
}
 
export default ContactForm;