import React from 'react';
import styled from 'styled-components';
import { Element } from 'react-scroll';
import { SectionTitle } from '../../components/sectionTitle';
import { OurService } from '../../components/ourService';
import Service1Img from './../../Assets/img/web_development.png';


const ServicesContainer = styled(Element)`
    width: 100%;
    min-height: 1400px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10px 0;
`; 

export function ServicesSection(props) {
    return <ServicesContainer name="servicesSection">
        <SectionTitle>Best Quality Software</SectionTitle>
        <OurService 
            title="Fully integrated services" 
            description="We build and deliver fully integrated webapps
 with customized control panels that fit your 
compnay needs" imgUrl={ Service1Img } />
    </ServicesContainer>
}
