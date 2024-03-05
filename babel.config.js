module.exports = function (api) {
  api.cache(true);

  const presets = ['module:metro-react-native-babel-preset'];
  const plugins = [
    [
      'module-resolver',
      {
        root: ['.'],
        alias: {
          '@components': './src/components',
          '@common': './src/components/common',
          '@screens': './src/screens',
          '@img': './src/img',
          '@config': './src/config',
          '@store': './src/store',
          '@dataType': './src/data',
          '@api': 'src/api',
          '@navigation': './src/navigation',
          '@utils': './src/utils',
          '@icons': './src/icons',
          types: 'types',
        },
        extensions: ['.ts', '.tsx', '.jsx', '.js', '.json', '.svg', '.jpg'],
      },
    ],
    'react-native-reanimated/plugin',
  ];

  return {
    presets,
    plugins,
  };
};
