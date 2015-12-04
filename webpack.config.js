// https://christianalfoni.github.io/react-webpack-cookbook/index.html


var path = require('path');


var config = {
  entry : [
    'webpack/hot/dev-server',
    'webpack-dev-server/client?http://localhost:8080',
    path.resolve(__dirname, 'app/app.js')
  ],
  output : {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js',
  },
  module: {
    loaders: [{
      test: /\.jsx?$/, // js or jsx
      loader: 'babel',
      exclude: /node_modules/,
    },
    {
      test: /\.css$/, // css
      loader: 'style!css'
    },
    {
      test: /\.scss$/,  // sass
      loader: 'style!css!sass'
    },
    {
      test: /\.styl$/,  // stylus
      loader: 'style-loader!css-loader!stylus-loader'
    },
    {
      test: /\.(png|jpg)$/, // images
      loader: 'url?limit=25000'
    }]
  },
}



module.exports = config;
