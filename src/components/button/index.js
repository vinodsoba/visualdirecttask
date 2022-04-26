import React from 'react';
import styled from 'styled-components';
import { theme } from '../../theme';

const ButtonWrapper = styled.button `
    padding: ${({ small }) => small ? "5px 8px" : '7px 15px'};
    border-radius: 5px;
    background-color: ${theme.primaryColour};
    color: #fff;
    font-weight: bold;
    font-size: ${({ small }) => small ? "12px" : '16px'};
    outline: none;
    transition: all 250ms ease-in-out;
    margin-top: 20px;

    &:hover {
        background-color: transparent;
        border: 2px solid ${theme.primary};
    }
`;

export function Button(props) {
    return <ButtonWrapper {...props}>{props.children}</ButtonWrapper>;
}