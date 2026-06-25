const path = require('path');
const { getDefaultConfig, mergeConfig } = require('@react-native/metro-config');
const { withNativeWind } = require('nativewind/metro');

const projectRoot = __dirname;
const nodeModules = path.resolve(projectRoot, 'node_modules');

// Only force hoisted resolution for packages that duplicate native views with pnpm.
const dedupePackages = [
  'react-native-safe-area-context',
  '@react-navigation/native',
  '@react-navigation/native-stack',
  '@react-navigation/core',
  '@react-navigation/elements',
];

const extraNodeModules = dedupePackages.reduce((accumulator, packageName) => {
  accumulator[packageName] = path.join(nodeModules, packageName);
  return accumulator;
}, {});

/**
 * Metro configuration
 * https://reactnative.dev/docs/metro
 *
 * @type {import('@react-native/metro-config').MetroConfig}
 */
const config = {
  resolver: {
    extraNodeModules,
    nodeModulesPaths: [nodeModules],
  },
};

module.exports = withNativeWind(mergeConfig(getDefaultConfig(projectRoot), config), {
  input: './global.css',
});
