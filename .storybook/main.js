const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

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
    '@storybook/preset-scss',
    '@storybook/preset-typescript',
  ],

  docs: {
    autodocs: true
  },
  webpackFinal: async (config, { configType }) => {
    // `configType` has a value of 'DEVELOPMENT' or 'PRODUCTION'
    // You can change the configuration based on that.
    // 'PRODUCTION' is used when building the static version of storybook.

    config.module.rules.map((rule) => {
      if (rule.oneOf) {
        rule.oneOf = rule.oneOf.slice().map((subRule) => {
          if (subRule.test instanceof RegExp && subRule.test.test('.scss')) {
            return {
              ...subRule,
              use: [
                ...subRule.use,
                {
                  loader: require.resolve('sass-resources-loader'),
                  options: {
                    resources: [
                      path.resolve(__dirname, '../src/styles/_common.scss')
                    ]
                  }
                }
              ],
            }
          }
          return subRule;
        });
      }
      return rule;
    });
    return config;
  },
};