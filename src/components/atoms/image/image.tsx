import * as React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div<{bg : string}>`
// position: absolute;
min-width: 50vw;
min-height: 50vw ;
max-width: 220px;
max-height: 220px;
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
@media only screen and (min-width: 700px){
	min-width: 20vw;
	min-height: 20vw;
	max-width: 220px;
	max-height: 220px;
}
@media only screen and (min-width: 1000px){
	min-width: 15vw;
	min-height: 15vw;
	max-width: 220px;
	max-height: 220px;
}
@media only screen and (min-width: 1200px){
	min-width: 12vw;
	min-height: 12vw;
	max-width: 220px;
	max-height: 220px;
}
`

type PropsType = {
    img: string,
}

const Image = ({img}:PropsType) => {
    return ( <Wrapper bg={img}></Wrapper> );
}
 
export default Image;