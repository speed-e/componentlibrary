import React from 'react';
import styled from 'styled-components/macro';


const StyledButton = styled.button`
border: none; 
color: white; 
padding: 14px 28px; 
cursor: pointer; 
font-size: 16px;
`;

export const Button =  ({ bg, children}) => (
    <StyledButton style={{backgroundColor: bg}}>{children}</StyledButton>
    );