import react, {useState, useEffect} from 'react';
import styled from 'styled-components';
import TextField from '@mui/material/TextField';
import { TextareaAutosize as BaseTextareaAutosize } from '@mui/base/TextareaAutosize';
import FormControl from '@mui/material/FormControl';
import { Button } from '@mui/material';



const Wrapper = styled.div`
width: 50%;
height: 100%;
// border: 2px solid blue;
position: relative;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`

const Container = styled.div`
width: 90%;
height: 90%;
background-color: yelllow;
border-radius: 20px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
box-sizing: border-box;
padding: 30px;
overflow: hidden;
`

const FormContainer = styled.form`
width: 100%;
height: 60%;
// background-color: red;
display: flex;
flex-direction: column;
justify-content: space-around;`

const EmailDesc = styled.h1`
color: white;
font-family: Montserrat;`


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

    const handleSubmit = (event: any) => {
      event.preventDefault();
      setFormData({
        senderAddress: event.target[0].value,
        subject: event.target[2].value,
        content: event.target[4].value
      });
    }

    useEffect(() => {
        console.log(formData);
    }, [formData]);
    return ( <Wrapper> 
        
        <Container>
          <EmailDesc>Contact me by email</EmailDesc>
        <FormContainer onSubmit={handleSubmit}>
            {/* <FormControl > */}
            {/* style={{background: "white"}} */}
            <TextField id="outlined-basic" label="Your company name" variant="outlined" style={{background: "white"}}  margin="dense" required/>
            {/* </FormControl> */}
            {/* <FormControl > */}
            <TextField id="outlined-basic" label="Subject" variant="outlined" style={{background: "white"}} margin="dense" required />
            {/* </FormControl> */}
            {/* <FormControl > */}
            <Textarea aria-label="minimum height" minRows={3} placeholder="Minimum 3 rows"  required />
            {/* </FormControl> */}
            <Button type="submit">Wyślij wiadomość</Button>
          </FormContainer>
            
        </Container>


    </Wrapper> );
}
 
export default ContactForm;