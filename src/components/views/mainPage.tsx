import * as React from 'react';
import styled from 'styled-components'
import Menu from 'components/organisms/menu/menu';
import Bg from 'assets/background.png'

const Wrapper = styled.div`
width: 100%;
height: 100vh;
// background-color:#323133;
// background-image: url(${Bg});
// background-repeat: no-repeat;
background: rgb(2,0,36);
background: radial-gradient(circle, rgba(2,0,36,1) 0%, rgba(40,2,87,1) 0%, rgba(2,0,36,1) 100%);
display: flex;
justify-content: center;
align-items: center;`

const MainPage = () => {
    return ( <Wrapper id="main">
        <Menu />
    </Wrapper> );
}
 
export default MainPage;