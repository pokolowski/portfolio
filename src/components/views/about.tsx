import react, {useEffect, useState} from 'react';
import styled from 'styled-components';
import AboutContainer from 'components/organisms/AboutContainer/aboutContainer';
import TimeLine from 'components/organisms/TimeLine/timeLine';
import { useSelector } from 'react-redux';
import { RootState } from 'components/Redux/store';
import GoBack from 'components/atoms/goBack/goBack';
import { useDispatch } from 'react-redux';
import { displayView } from 'components/Redux/features/displayView/displaySlice';

const Wrapper = styled.div<{displayToggle: boolean}>`
width: 100%;
height: 100vh;
background: rgb(2,0,36);
background: radial-gradient(circle, rgba(2,0,36,1) 0%, rgba(40,2,87,1) 0%, rgba(2,0,36,1) 100%);
position: relative;
display: flex;
align-items: center;
justify-content: center;
${props => props.displayToggle ? '': 'display:none;'}
// display: none;`

const About = () => {
    const display = useSelector((state:RootState) => state.display.value);
    const dispatch = useDispatch();
    const [scrollFlag, setScrollFlag] = useState<boolean>(false);
    
    useEffect(() => {
        const scrollDown = () => {
            const el = document.getElementById('about');
            if(el){
                el.scrollIntoView({behavior: 'smooth'});
            }
        }
        if(display === 'about'){
            scrollDown();
        }
        return scrollDown
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

    }, [scrollFlag])


    return ( <Wrapper displayToggle={display === 'about' ? true:false} id='about'>
        <AboutContainer /><TimeLine /> <GoBack  setScrollFlag={setScrollFlag} />
    </Wrapper>  );
}
 
export default About;