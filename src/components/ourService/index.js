import React from 'react';
import styled from 'styled-components';


const ServiceContainer = styled.div`
    display: flex;
    align-items: center;
`;

const ServiceImg = styled.img`
    width: 21em;
    height: 15em;
`;

const DescriptionContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 60%;
`;

const Title = styled.h2`
    color: #000;
    font-size: 28px;
    font-weight: 700;
`;

const Details = styled.p`
    color: #7A7A7A;
    font-size: 19px;
    text-align: center;
    max-width: 70%;
`;

export function OurService(props) {
    const { imgUrl, title, description } = props;
    return <ServiceContainer>
        <DescriptionContainer>
            <Title>{ title }</Title>
            <Details>{ description }</Details>
        </DescriptionContainer>
        <ServiceImg src={ imgUrl } />
    </ServiceContainer>
}