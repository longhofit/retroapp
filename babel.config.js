const path = require('path');

// FIXME: Resolve `transform[stderr]: Could not resolve` command-line warnings.
// FIXME: Reproducible when starting with clearing cache (npm start -- -c)
//
// TODO: Framework path aliasing even not needed here. Replace?
// TODO: Replace nested package.json-s with aliases

const KITTEN_PATH = path.resolve(__dirname, './node_modules/react-native-ui-kitten');
const MAPPING_PATH = path.resolve(__dirname, './node_modules/@eva-design/eva');
const PROCESSOR_PATH = path.resolve(__dirname, './node_modules/@eva-design/processor');

const moduleResolverConfig = {
  root: path.resolve('./'),
  alias: {
    '@kitten/theme': path.resolve(KITTEN_PATH, 'theme'),
    '@kitten/ui': path.resolve(KITTEN_PATH, 'ui'),
    '@eva-design/eva': path.resolve(MAPPING_PATH),
    '@eva-design/processor': path.resolve(PROCESSOR_PATH),
  },
};

module.exports = function (api) {
  api.cache(true);

  const presets = [
    'module:metro-react-native-babel-preset',
  ];

  const plugins = [
    ['module-resolver', moduleResolverConfig],
    [
      require('@babel/plugin-proposal-decorators').default,
      {
        legacy: true
      }
    ],
  ];

  return { presets, plugins };
};
