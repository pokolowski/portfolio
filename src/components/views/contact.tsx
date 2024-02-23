import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { RootState } from 'components/Redux/store';
import GoBack from 'components/atoms/goBack/goBack';
import { useDispatch } from 'react-redux'; 
import { displayView } from 'components/Redux/features/displayView/displaySlice';
import ContactContainer from 'components/organisms/ContactContainer/contactContainer';

const Wrapper = styled.div<{$displayTogle: boolean, $scrollFlag: boolean}>`
width: 100%;
height:100vh;
background: rgb(2,0,36);
background: radial-gradient(circle, rgba(2,0,36,1) 0%, rgba(40,2,87,1) 0%, rgba(2,0,36,1) 100%);
// background-color: red;
position: absolute;
top: 0;
left: 0;
animation: slideIn .5s linear both;
${props => props.$displayTogle ? 'display: flex;':'display: none;'}
// ${props => props.$scrollFlag ? 'animation: slideOut .5s linear both;':'animation: slideIn .5s linear both;'}
align-items: center;
justify-content: center;

@keyframes slideIn {
    0%{
        transform: translateX(-100%);
    }
    100%{
        transform: translate(0%);
    }
}
@keyframes slideOut {
    0%{
        transform: translateX(0%);
    }
    100%{
        transform: translate(-100%);
    }
}

`

const Contact = () => {
    const display = useSelector((state : RootState) => state.display.value);
    const dispatch = useDispatch();
    const [scrollFlag, setScrollFlag] = useState<boolean>(false);

    useEffect( () => {
        if(display === 'contact'){
            const el = document.getElementById("contact");
            if(el){
                el.scrollIntoView({behavior: 'smooth'})
                console.log('jestem tu i scrolluje');
            }

        }
    }, [display]);

    useEffect(() => {

        if(scrollFlag){
            const el = document.getElementById('main');
            if(el){
                el.scrollIntoView({behavior: 'smooth'});
                setTimeout(() => {
                    dispatch(displayView('main'));
                }, 1000)
                setScrollFlag(false);
                console.log("scrolluje");
            }
        }

    }, [scrollFlag])

    return ( 
    <Wrapper $displayTogle= {display === 'contact' ? true:false} $scrollFlag={scrollFlag} id="contact">
        <ContactContainer />
        <GoBack rotate="90 stopni" setScrollFlag={setScrollFlag}/>
    </Wrapper>  );
}
 
export default Contact;