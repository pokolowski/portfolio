import * as React from 'react';
import styled from 'styled-components'
import Menu from 'components/organisms/menu/menu';
import Bg from 'assets/background.png'

const Wrapper = styled.div`
width: 100%;
height: 100vh;
background: rgb(2,0,36);
background: radial-gradient(circle, rgba(2,0,36,1) 0%, rgba(40,2,87,1) 0%, rgba(2,0,36,1) 100%);
display: flex;
justify-content: center;
align-items: center;`

const CommingSoon = () => {
    return ( <Wrapper id="main">
    </Wrapper> );
}
 
export default CommingSoon;