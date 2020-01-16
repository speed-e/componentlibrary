// module.exports = {
// //   stories: ['../stories/**/*.stories.js'],
//   addons: ['@storybook/addon-actions', '@storybook/addon-links'],
// };


module.exports = {
  stories: ['../src/**/*.stories.(js|mdx)'],
  addons: [
  '@storybook/addon-actions/register',
  '@storybook/addon-knobs/register',
  '@storybook/addon-notes/register',
  '@storybook/addon-docs',
  ],
  };