var path = require('path');
var config = {
  entry: {
    javascript: __dirname + '/app/index',
    html: __dirname + '/app/index.html'
  },
  output: {
    path: __dirname + '/dist',
    filename: 'app.js',
  },
  module: {
    loaders: [
      {
        test: /\.ts(x?)$/,
        exclude: /node_modules/,
        loaders: [
          'react-hot',
          'babel?' + JSON.stringify({
            presets: ['react', 'es2015', 'stage-1'],
          }),
          'ts',
       ],
     },
     {
        test: /\.html$/,
        loader: 'file?name=[name].[ext]',
      }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.ts', '.tsx']
  },
};

module.exports = config;
