
import {  configure, setAddon, addDecorator } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs/react';
import JSXAddon from 'storybook-addon-jsx';
import { withA11y } from '@storybook/addon-a11y';

setAddon(JSXAddon);
addDecorator(withKnobs);
addDecorator(withA11y);

// configure(require.context('../src', true, /\.stories\.(js|mdx)$/), module);

const req = require.context('../src', true, /\.stories\.(js|mdx)$/)
// const req = require.context('../src', true, /.stories.js$/)


function loadStories() {
    require('./welcomeStory')
    req.keys().forEach(file => req(file))
}

configure(loadStories, module);