import React from 'react';
import AccordionItem from './AccordionItem';
// import styled from 'styled-components/macro';


const Accordion = ({ items, openItem = null }) => (
  <div>
    {items.map(({ id, title, content }) => (
      <AccordionItem key={id} {...{ id, title, content }} isOpen={id === openItem} />
    ))}
  </div>
);

export default Accordion;