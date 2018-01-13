exports.build = {
  webpack: {
    resolve: {
      alias: {
        react: require.resolve('nervjs'),
        'react-dom': require.resolve('nervjs'),
      },
    },
  },
};
