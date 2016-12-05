var webpack = require('webpack');

var isProd = (process.env.NODE_ENV === 'production');

module.exports = {
  entry: './src/index.js',
  output: {
    path: __dirname,
    publicPath: '/',
    filename: 'bundle.js'
  },
  module: {
      loaders: [
          { test: /\.js$/, loaders: ['babel'], exclude: /node_modules/ }
          {
            test: /\.scss$/,
            loaders: ['style', 'css', 'sass']
          }
      ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  devServer: {
    historyApiFallback: true,
    contentBase: './'
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env':{
        'NODE_ENV': JSON.stringify('production'),
        'STRIPE_PUBLISHABLE_KEY': JSON.stringify('pk_live_WMZQXK9Q5hrvzQdVqK3SB5DV'),
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress:{
        warnings: true
      }
    })
  ]
}