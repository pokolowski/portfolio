import * as React from 'react';
import styled from 'styled-components'
import Menu from 'components/organisms/menu/menu';
import Bg from 'assets/background.png'

const Wrapper = styled.div`
width: 100%;
min-height: 100vh;
min-width:350px;
background: rgb(2,0,36);
background: radial-gradient(circle, rgba(2,0,36,1) 0%, rgba(40,2,87,1) 0%, rgba(2,0,36,1) 100%);
display: flex;
overflow:hidden;
justify-content: center;
align-items: center;
position: absolute;
top:0;
left:0;

 `

const MainPage = () => {
    return ( <Wrapper id="main">
        <Menu />
    </Wrapper> );
}
 
export default MainPage;