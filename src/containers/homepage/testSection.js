import React from 'react';
import styled from 'styled-components';

import { SectionTitle } from '../../components/sectionTitle';


const testSection = styled.div`
    width: 100%;
    min-height: 1400px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10px 0;
`;

export function TestSection (props) {
    return <testSection>
            <SectionTitle>This is my test title</SectionTitle>
        </testSection>
}


