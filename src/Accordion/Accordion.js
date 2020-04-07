import React from 'react';
import AccordionItem from './AccordionItem';


const Accordion = ({ items, openItem = null }) => (
  <div>
    {items.map(({ id, title, content }) => (
      <AccordionItem key={id} {...{ id, title, content }} isOpen={id === openItem} />
    ))}
  </div>
);

export default Accordion;