import * as React from 'react';
import styled from 'styled-components';
import Image from 'components/atoms/image/image';
import Navigate from 'components/molecules/Navigate/navigate';
import Photo from 'assets/zdj2.png';

const Wrapper = styled.div`
width: 80vw;
height: 80vw;
display: flex;
flex-direction: column;
justify-content: space-between;
align-items: center;
@media only screen and (min-width: 700px){
    width: 40vw;
    height: 40vw;
}
@media only screen and (min-width: 1000px){
    width: 30vw;
    height: 20vw;
}
`

const Menu = () => {
    return ( <Wrapper>
        <Image img={Photo} />
        <Navigate />
    </Wrapper> );
}
 
export default Menu;