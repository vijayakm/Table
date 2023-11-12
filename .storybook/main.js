module.exports = {
  framework: {
    name: '@storybook/react-vite',
    options: {}
  },

  stories: ['../src/**/*.stories.tsx'],

  addons: [
    '@storybook/addon-actions',
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/preset-create-react-app',
    "@storybook/addon-coverage",
  ],

  docs: {
    autodocs: true
  }
};