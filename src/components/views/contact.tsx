import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { RootState } from 'components/Redux/store';
import GoBack from 'components/atoms/goBack/goBack';
import { useDispatch } from 'react-redux'; 
import { displayView } from 'components/Redux/features/displayView/displaySlice';
import ContactContainer from 'components/organisms/ContactContainer/contactContainer';

const Wrapper = styled.div<{$displayTogle: boolean, $scrollFlag: boolean, $firstRun: boolean}>`
width: 100%;
min-width: 350px;
min-height:100vh;
background: rgb(2,0,36);
background: radial-gradient(circle, rgba(2,0,36,1) 0%, rgba(40,2,87,1) 0%, rgba(2,0,36,1) 100%);
position: relative;
top: 0;
left: 0;
display: flex;
${props => props.$firstRun ? 'display:none;':props.$scrollFlag ? 'animation: slideInContact .5s linear both;':'animation: slideOutContact .5s .5s linear both;'}
justify-content: center;
overflow:hidden;

@keyframes slideInContact {
    0%{
        transform: translateX(-100%);
    }
    100%{
        transform: translate(0%);
    }
}
@keyframes slideOutContact {
    0%{
        transform: translateX(0%);
    }
    100%{
        transform: translate(-100%);
        display:none;   //doesnt work on firefox
        position:absolute;
    }
}

`

const Contact = () => {
    const display = useSelector((state : RootState) => state.display.value);
    const dispatch = useDispatch();
    const [scrollFlag, setScrollFlag] = useState<boolean>(false);
    const [firstRun, setFirstRun] = useState<boolean>(true);

    useEffect( () => {
        if(display === 'contact' && scrollFlag===false){
            setScrollFlag(true);
            setFirstRun(false);
        }
        if(display != 'contact'){
            setScrollFlag(false);
        }
    }, [display]);
    const handleOnClick = () => {
        const top = document.getElementById("contact");
        if(top){
            top.scrollIntoView({behavior: 'smooth'});
        }
        else{
            console.log('Top is null');
        }
    }


    return ( 
    <Wrapper $displayTogle= {display === 'contact' ? true:false} $scrollFlag={scrollFlag} $firstRun={firstRun} id="contact">
        <ContactContainer />
        <GoBack rotate="90 stopni" setScrollFlag={setScrollFlag} handleOnClick={handleOnClick}/>
    </Wrapper>  );
}
 
export default Contact;