import { configureAxe } from 'jest-axe';

const axe = configureAxe({
    runOnly: {
        type: "tag", 
        values: ['wcag2aa'],
        resultTypes: ['incomplete'],
    },
    "rules": {
        "color-contrast": { enabled: true },
        "button-name": { enabled: true }
      },
});

module.exports = axe;