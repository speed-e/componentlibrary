import React from 'react';
import AccordionItem from './AccordionItem';


const Accordion = ({ items, openItem = null }) => (
  <div>
    {items.map(({ id, title, content }) => (
      <AccordionItem {...{ id, title }} isOpen={id === openItem} />
    ))}
  </div>
);

export default Accordion;