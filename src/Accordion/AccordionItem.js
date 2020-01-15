import React from 'react';
import styled from 'styled-components/macro';

const AccordionItemHeader = styled.h3`
background-color: #eee;
color: #444;
cursor: pointer;
padding: 18px;
width: 100%;
text-align: left;
border: none;
outline: none;
transition: 0.4s;
`;

const AccordionItem = ({
  title, 
  content, 
  isOpen
})=>{
  return (
      
    <div>
      <AccordionItemHeader>{title}</AccordionItemHeader>
      {!!(isOpen) && <p>{content}</p>}
    </div>
  )
};

export default AccordionItem;
