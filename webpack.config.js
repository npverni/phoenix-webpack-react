module.exports = {
  entry: "./web/static/js/app.js",
  output: {
    path: "./priv/static/js",
    filename: "bundle.js"
  },
  module: {
    loaders: [
      { test: /\.jsx?/, loaders: ['babel'], exclude: /node_modules/ }
    ]
  }
};
