const tailwindcss = require('tailwindcss');
module.exports = {
  plugins: {
    'postcss-import': {},
    'postcss-url': {},
    'postcss-custom-media':{},
   'postcss-custom-properties':{},
   'postcss-custom-selectors':{},
    'postcss-nesting':{},
    tailwindcss: './tailwind.js',
    'postcss-preset-env': {
      browsers: 'last 2 versions',
    },
  },
};
