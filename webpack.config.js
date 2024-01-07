const path = require('path');

module.exports = {
  entry: ["@babel/polyfill", './src/index.js'],
  output: {
    path: path.resolve(__dirname, 'bundles'),
    filename: 'bundle.js',
  },
  mode: "development",
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ["@babel/preset-env"]
          }
        }
      }
    ]
  },
  devServer: {
    port: 8090,
    static: {
      directory: path.join(__dirname, ''), // index.html'nin bulunduğu dizini belirtin. burayı boş bırakıldı çünkü burada index.html kök dizinde bulunuyordu. bi klasör altında bulunuyor olsaydı başka şekil yazacaktık.
    },
    open: true,
    hot: true,
  }
};