import React from 'react';
import styled from 'styled-components';
import { Element } from 'react-scroll';
import { SectionTitle } from '../../components/sectionTitle';
import { OurService } from '../../components/ourService';
import Service1Img from './../../Assets/img/eyecare_img1.png';
import { Button } from '../../components/button';


const ServicesContainer = styled(Element)`
    width: 100%;
    min-height: 1400px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10px 0;
`; 

export function ServicesSection(props) {
    return <ServicesContainer name="servicesSection" className='mb2'>
                <SectionTitle>How to put in eye drops</SectionTitle>
                    <OurService 
                        title="Step-by-step instructions" 
                        description="Using eye drops, or artificial tears as they're also called, becomes quick and easy once you’ve practised a few times." imgUrl={ Service1Img }
                        >
                            
                    </OurService>
                <div><Button>Read More</Button></div>
            </ServicesContainer>
}
