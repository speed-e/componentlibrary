import React from 'react';
import styled from 'styled-components/macro';

const StyledAccordionItemHeader = styled.h3`
background-color: #eee;
color: #444;
cursor: pointer;
padding: 18px;
width: 100%;
text-align: left;
border: none;
outline: none;
transition: 0.4s;
font-family: Arial;
font-size:12px;
`;

const StyledAccordionContent = styled.p`
color: #444;
font-family: Arial;
font-size: 10px;
cursor: pointer;
padding: 5px;
width: 100%;
transition: 0.4s;
text-align: left;
cursor: pointer;
`;

const AccordionItem = ({
  title, 
  content, 
  isOpen
})=>{
  return (
      
    <div>
      <StyledAccordionItemHeader>{title}</StyledAccordionItemHeader>
      {!!(isOpen) && <StyledAccordionContent>{content}</StyledAccordionContent>}
    </div>
  )
};

export default AccordionItem;
