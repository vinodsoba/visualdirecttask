import React from 'react';
import styled, { css } from 'styled-components';
import VisualDirectLogo from './../../Assets/img/logo-gb.png';

import { theme } from '../../theme';



const LogoContainer = styled.div`
    display: flex;
    flex-direction: ${({ inline }) => (inline ? "row" : "column" )};
    align-items: ${({ inline }) => inline && "center"};

`;

const VisualDirectImg = styled.img`
    background-image: url(${VisualDirectLogo});
    width: 320px;
    height: 40px;
    background-position: left -63px;
    margin-top: ${({ inline }) => inline ? '10px' : '100px'};

        ${({ inline }) => inline && css`
        background-position: 226px -115px;
        background-size: cover;
        width: 226px;
        height: 30px;
        margin-right: 6px;
        `}
`;

const LogoImg = styled.img`
    width: 8em;
    height: 8em;

    ${({ inline }) => inline && css`
        width: 40px;
        height: 40px;
        margin-right: 6px;
    `}
  
`;

const LogoText = styled.div`
    font-size: ${({inline}) => (inline ? "14px" : "40px") };
    margin-top: ${({ inline}) => (inline ? 0 : "40px")};
    color: ${({ inline}) => inline ? "#fff" : theme.primaryColour };
    font-weight: 500;
`;

export function Logo(props) {
const { inline } = props;
   return (
       <LogoContainer inline={inline}>
           <VisualDirectImg inline={inline} />      
       </LogoContainer>  
   )
}
