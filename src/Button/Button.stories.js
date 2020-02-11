import React from 'react';
import { Button } from './Button';
import { TestButton } from './TestButton';
import { storiesOf } from '@storybook/react';
import { color } from '@storybook/addon-knobs/react';

storiesOf('Button', module)
.addWithJSX('with background 1', () => (
    <Button bg={color('bg', '#4CAF50', 'group1')}>Success</Button>
))

.addWithJSX('test button', () => (
    <TestButton>Test</TestButton>
))

.addWithJSX('with background 2', () => (
    <Button bg={color('bg', '#2196f3', 'group1')}>Info</Button>
));