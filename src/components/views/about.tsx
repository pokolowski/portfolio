import react, {useEffect, useState} from 'react';
import styled from 'styled-components';
import AboutContainer from 'components/organisms/AboutContainer/aboutContainer';
import TimeLine from 'components/organisms/TimeLine/timeLine';
import { useSelector } from 'react-redux';
import { RootState } from 'components/Redux/store';
import GoBack from 'components/atoms/goBack/goBack';
import { useDispatch } from 'react-redux';
import { displayView } from 'components/Redux/features/displayView/displaySlice';

const Wrapper = styled.div<{$displaytoggle: boolean, $firstRunAbout: boolean}>`
width: 100%;
// height:120vh;
min-height: 200vh;
background: rgb(2,0,36);
background: radial-gradient(circle, rgba(2,0,36,1) 0%, rgba(40,2,87,1) 0%, rgba(2,0,36,1) 100%);
position: relative;
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-around;
background-color: red;
// ${props => props.$displaytoggle ? '': 'display:none;'}
${props => props.$firstRunAbout ? 'display: none;': props.$displaytoggle ? '': 'animation: AboutOut .5s .6s linear both;'}
// display: none;
overflow:hidden;
// box-sizing:border-box;
flex-wrap:wrap;


@keyframes AboutOut {
    0%{
        display: block;
    }
    100%{
        display: none;
    }
}

@media only screen and (min-width: 700px){
    // height:100vh;
    min-height: 100vh;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    // box-sizing:border-box;
}`

const About = () => {
    const display = useSelector((state:RootState) => state.display.value);
    const dispatch = useDispatch();
    const [scrollFlag, setScrollFlag] = useState<boolean>(false);
    const [firstRunAbout, setFirstRunAbout] = useState<boolean>(true);
    
    
    useEffect(() => {
        if(display === 'about'){
           setFirstRunAbout(false);
        }
    }, [display]);
    useEffect(() => {
        const scrollDown = () => {
            const el = document.getElementById('about');
            if(el){
                el.scrollIntoView({behavior: 'smooth'});
            }
        }
        if(display === 'about' && !firstRunAbout){
            scrollDown();
        }
        return scrollDown
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

    console.log(firstRunAbout);


    return ( <Wrapper $displaytoggle={display === 'about' ? true:false} id='about' $firstRunAbout={firstRunAbout}>
        <AboutContainer />
        <TimeLine /> 
        <GoBack  setScrollFlag={setScrollFlag}  />
    </Wrapper>  );
}
 
export default About;