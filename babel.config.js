module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          root: ['.'],
          alias: {
            '@screens': './screens',
            '@styles': './styles',
            '@constants': './constants',
            '@routes': "./routes",
            '@models': "./models",
            '@common': "./components/common",
            '@components': "./components/pages",
            '@api': "./api",
            '@store': "./store",
            '@svg': "./svg",
            '@fonts': './fonts'
          },
        },
      ],
    ],
  };
};
