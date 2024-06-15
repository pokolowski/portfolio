import * as React from 'react';
import styled from 'styled-components';
import NavItem from 'components/atoms/NavItem/navItem';
import { RootState } from 'components/Redux/store';
import { UseSelector, useDispatch, useSelector } from 'react-redux';
import { displayView } from 'components/Redux/features/displayView/displaySlice';

const Wrapper = styled.div`
width: 100%;
height: 30%;
display: flex;
align-items: center;
justify-content: space-around;
color: white;
font-family: Montserrat;
font-weight: 200;
@media only screen and (max-width:390px){
    flex-direction: column;
}`

 const Navigate = () => {
    const dispatch = useDispatch();

    return (<Wrapper>
        <NavItem text="About" onClick={() => dispatch(displayView('about'))} />
        <NavItem text="Projects" onClick={() => dispatch(displayView('projects'))}/>
        <NavItem text="Skills" onClick={() => dispatch(displayView('skills'))}/>
        <NavItem text="Contact" onClick={() => dispatch(displayView('contact'))}/>
        {/* <NavItem text="Experience" /> */}
    </Wrapper>  );
 }




 export default Navigate;