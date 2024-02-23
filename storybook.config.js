// main.js or storybook.config.js

module.exports = {
    stories: ['../src/**/*.stories.@(js|jsx|ts|tsx)'],
    addons: ['@storybook/addon-actions', '@storybook/addon-links'],
    framework: '@storybook/react', // Specify the framework (React in this case)
  };
  