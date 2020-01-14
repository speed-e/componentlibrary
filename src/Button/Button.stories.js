import React from 'react';
import { Button } from './Button';
import { storiesOf } from '@storybook/react';
import { color } from '@storybook/addon-knobs/react';

storiesOf('Button', module)
.addWithJSX('with background 1', () => (
    <Button bg={color('bg', 'grey', 'group1')}>Hello world1</Button>
))

    .addWithJSX('with background 2', () => (
    <Button bg={color('bg', 'green', 'group1')}>Hello world2</Button>
));