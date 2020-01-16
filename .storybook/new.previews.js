


import { configure } from '@storybook/react';

configure(require.context('../src', true, /\.stories\.(js|mdx)$/), module);



// import { configure, addDecorator } from '@storybook/react';

// const req = require.context('../src', true, /.stories.js$/)

// function loadStories() {
//     require('./welcomeStory')
//     req.keys().forEach(file => req(file))
// }

// configure(loadStories, module);

// import { configure } from '@storybook/react';
// import withA11y from  '@storybook/addon-a11y';

// addDecorator(withA11y);

// configure(require.context('../src', true, /.stories.js$/), module);
// configure(require.context('../src', true, /\.stories\.(js|mdx)$/), module);