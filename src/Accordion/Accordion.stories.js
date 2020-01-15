import React from 'react';
import Accordion from './Accordion';
import { storiesOf } from '@storybook/react';
// import { color } from '@storybook/addon-knobs/react';



storiesOf('Accordion', module)
.addWithJSX('with three items, second item open', () => (
    <Accordion items= {
    [
        {
            id: 'fakeid1',
            title: 'Panel 1',
            content: 'some content for panel 1'
        },
        {
            id: 'fakeid2',
            title: 'Panel 2',
            content: 'some content for panel 2'
        },
        {
            id: 'fakeid3',
            title: 'Panel 3',
            content: 'some content for panel 3'
        }
        ]} openItem='fakeid2'/>
))

.addWithJSX('with three items, all closed', () => (
    <Accordion items= {
    [
        {
            id: 'fakeid1',
            title: 'Panel 1',
            content: 'some content for panel 1'
        },
        {
            id: 'fakeid2',
            title: 'Panel 2',
            content: 'some content for panel 2'
        },
        {
            id: 'fakeid3',
            title: 'Panel 3',
            content: 'some content for panel 3'
        }
        ]}/>
));