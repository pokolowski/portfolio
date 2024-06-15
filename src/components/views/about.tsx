import react, {useEffect, useState} from 'react';
import styled from 'styled-components';
import AboutContainer from 'components/organisms/AboutContainer/aboutContainer';
import TimeLine from 'components/organisms/TimeLine/timeLine';
import { useSelector } from 'react-redux';
import { RootState } from 'components/Redux/store';
import GoBack from 'components/atoms/goBack/goBack';
import { useDispatch } from 'react-redux';
import { displayView } from 'components/Redux/features/displayView/displaySlice';

const Wrapper = styled.div<{$displaytoggle: boolean, $firstRunAbout: boolean, $displayNone: boolean}>`
width: 100%;
min-height: 200vh;
background: rgb(2,0,36);
background: radial-gradient(circle, rgba(2,0,36,1) 0%, rgba(40,2,87,1) 0%, rgba(2,0,36,1) 100%);
position: relative;
top:100vh;
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-around;
background-color: red;
// ${props => props.$displayNone ? 'display:none;': ''}
${props => props.$firstRunAbout ? 'display: none;': props.$displaytoggle ? '': 'animation: AboutOut .9s .6s linear both;'}
overflow:hidden;
flex-wrap:wrap;


@keyframes AboutOut {
    0%{
        display: block;
    }
    100%{
        display: none;
        position: absolute;
    }
}

@media only screen and (min-width: 700px){
    min-height: 100vh;
    flex-direction: row;
    align-items: center;
    justify-content: center;
}`

const About = () => {
    const display = useSelector((state:RootState) => state.display.value);
    const dispatch = useDispatch();
    const [scrollFlag, setScrollFlag] = useState<boolean>(false);
    const [firstRunAbout, setFirstRunAbout] = useState<boolean>(true);
    const [displayNone, setDisplayNone] = useState<boolean>(false);
    
    
    useEffect(() => {
        if(display === 'about'){
           setFirstRunAbout(false);
           setDisplayNone(false);
           console.log('wlaczam');
        }
    }, [display]);
    useEffect(() => {
        if(display === 'about' && !firstRunAbout){
            const el = document.getElementById('about');
            if(el){
                el.scrollIntoView({behavior: 'smooth'});
            }
        }
    }, [display, firstRunAbout]);
    useEffect(() => {
        const scrollUp = () => {
            const el = document.getElementById('main');
            if(el){
                el.scrollIntoView({behavior: 'smooth'});
            }
        }
        if(display === 'main'){
            
            scrollUp();
        }
        if(display != 'main' && display != 'about'){
            console.log('wylaczam');
            setDisplayNone(true);
        }
        return scrollUp
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
            }
        }

    }, [scrollFlag]);



    return ( <Wrapper $displaytoggle={display === 'about' ? true:false} id='about' $firstRunAbout={firstRunAbout} $displayNone={displayNone}>
        <AboutContainer />
        <TimeLine /> 
        <GoBack  setScrollFlag={setScrollFlag}  />
    </Wrapper>  );
}
 
export default About;