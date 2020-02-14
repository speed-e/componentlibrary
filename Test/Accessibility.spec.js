import initStorypa11y from 'storybook-addon-storypa11y';
 
initStorypa11y({
    framework: 'react',
    configPath: './.storybook',
    storyKindRegex: /^((?!.*?Fail).)*$/,
    out: 'storybook-static',
    // test: pa11y,

});