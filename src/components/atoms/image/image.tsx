import * as React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div<{bg : string}>`
width: 250px;
height: 250px;
border-radius: 50%;
background-color: #AEA73F;
background-image: url(${props => props.bg});
background-size: cover;
background-repeat: no-repeat;
background-position: center;
animation: pulse 2s infinite;
// box-shadow: 0 0 0 15px red;

@keyframes pulse {
	0% {
		// transform: scale(1);
		box-shadow: 0 0 0 0 #020024;
	}

	100% {
		// transform: scale(.95);
		box-shadow: 0 0 10px 50px rgba(0, 0, 0, 0);
	}
}
`

type PropsType = {
    img: string,
}

const Image = ({img}:PropsType) => {
    return ( <Wrapper bg={img}></Wrapper> );
}
 
export default Image;