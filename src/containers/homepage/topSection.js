import React from 'react';
import styled from 'styled-components';
import { Button } from '../../components/button';
import { DownArrow } from '../../components/downArrow';
import { Logo } from '../../components/logo';
import { Navbar } from '../../components/navBar';
import { SearchBar } from './../../components/searchBar';

import BackgroundImg from './../../Assets/img/background.png';
import { Element, scroller } from 'react-scroll';



const MotivationalText = styled.h1`
    font-size: 2em;
    font-weight: 600;
    color: #fff;
    margin: 0;
    text-align: center;
    margin-top:2em;
    line-height: 1.2em;

`;

const TopContainer = styled.div`
    width: 100%;
    height: 100vh;
    padding: 0;
    background-image: url(${BackgroundImg});
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;
`;

const BackgoundFilter = styled.div`
    width: 100%;
    height: 100%;
    background-color: rgb(53 53 53 / 20%);
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const DownArrowContainer = styled.div`
    position: absolute;
    bottom: 20px;
    left: 50%;
    transform: translateX(-50%);
`;

export function TopSection(props) {
    const {products, onAdd} = props;
    const scrollToNextSection = () => {
        scroller.scrollTo("servicesSection", { smooth: true, duration: 1500 });
    }
    return (
    <Element name="topSection">
          <TopContainer>
           <BackgoundFilter>
               <Navbar />
                <Logo></Logo>
                <MotivationalText>
                    The UK’s most popular online contact lens store 
                </MotivationalText>
                <SearchBar  onAdd={onAdd} products={products}/>
                <Button>Start your Project</Button>
                <DownArrowContainer onClick={scrollToNextSection}>
                    <DownArrow/>
                </DownArrowContainer>   
           </BackgoundFilter>
        </TopContainer>

    </Element>
     
    )
}