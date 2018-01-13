module.exports = app => {
  // For the development version, we'll use React.
  // Because, it support react hot loading and so on.
  if (app.env !== 'local') {
    app.addAlias('react', require.resolve('nervjs'));
    app.addAlias('react-dom/server', require.resolve('nerv-server'));
  }
};
