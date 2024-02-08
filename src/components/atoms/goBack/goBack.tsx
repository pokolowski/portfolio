import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import styles from './goBack.module.css';

const Wrapper = styled.div`
position: absolute;
bottom: 50px;
right: 50px;
background-color: #DEEE22;
width: 70px;
height: 70px;
border-radius: 50%;
display: flex;
align-items: center;
justify-content: center;
overflow: hidden;
cursor: pointer;
box-shadow: rgba(0, 0, 0, 0.07) 0px 1px 2px, rgba(0, 0, 0, 0.07) 0px 2px 4px, rgba(0, 0, 0, 0.07) 0px 4px 8px, rgba(0, 0, 0, 0.07) 0px 8px 16px, rgba(0, 0, 0, 0.07) 0px 16px 32px, rgba(0, 0, 0, 0.07) 0px 32px 64px;
animation: show .5s 1s both;


@keyframes show {
    0%{ opacity: 0;}
    100% { opacity: 1;}
}
`


type PropsTypes = {
    setScrollFlag: React.Dispatch<React.SetStateAction<any>>,
    rotate?: string
}

const GoBack = ({setScrollFlag, rotate} : PropsTypes) => {
    return ( <Wrapper onClick={() => setScrollFlag(true)}> <FontAwesomeIcon icon={faArrowUp} className={`${styles.icon} ${rotate ? styles.rotateLeft:''}`} /> </Wrapper> );
}
 
export default GoBack;