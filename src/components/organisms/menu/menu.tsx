import * as React from 'react';
import styled from 'styled-components';
import Image from 'components/atoms/image/image';
import Navigate from 'components/molecules/Navigate/navigate';
import Photo from 'assets/zdj2.png';

const Wrapper = styled.div`
width: 20vw;
height: 20vw;
// background-color: red;
display: flex;
flex-direction: column;
justify-content: space-between;
align-items: center;`

const Menu = () => {
    return ( <Wrapper>
        <Image img={Photo} />
        <Navigate />
    </Wrapper> );
}
 
export default Menu;