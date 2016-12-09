const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const merge = require('webpack-merge')
const validate = require('webpack-validator')

const parts = require('./libs/parts')

const PATHS = {
  src: path.join(__dirname, 'src'),
  // style: path.join(__dirname, 'src', 'styles'),
  dist: path.join(__dirname, 'dist')
}

const common = {
  // Entry accepts a path or an object of entries.
  // We'll be using the latter form given it's
  // convenient with more complex configurations.
  entry: {
    // style: PATHS.style,
    src: PATHS.src
  },
  output: {
    path: PATHS.dist,
    filename: '[name].js',
    publicPath: '/'
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, '/index.ejs')
    })
  ]
}

var config

// Detect how npm is run and branch based on that
switch (process.env.npm_lifecycle_event) {
  //
  // BUILD (for Production)
  //
  case 'build':
    config = merge(
      common,
      {
        output: {
          path: PATHS.dist,
          filename: '[name].[chunkhash].js',
          chunkFilename: '[chunkhash].js'
        }
      },
      parts.clean(PATHS.dist),
      parts.setFreeVariable(
        'process.env.NODE_ENV',
        'production'
      ),
      parts.extractBundle({
        name: 'vendor',
        entries: ['axios', 'dateformat', 'lodash', 'react', 'react-dom', 'react-redux', 'react-router', 'react-select', 'react-stripe-checkout', 'redux', 'redux-form', 'redux-thunk']
      }),
      parts.minify(),
      parts.dedupe(),
      parts.setupJS(PATHS.src),
      parts.extractCSS(PATHS.src),
      parts.purifyCSS([PATHS.src])
    )
    break
  //
  // NON-BUILD (for Development)
  //
  default:
    config = merge(
      common,
      {
        devtool: 'eval-source-map'
      },
      parts.setFreeVariable('process.env.NODE_ENV', 'development'),
      parts.setFreeVariable('process.env.STRIPE_PUBLISHABLE_KEY', 'pk_test_ytV814lZralEMSiDXYjESlg1'),
      parts.setupJS(PATHS.src),
      parts.setupCSS(PATHS.src),
      parts.devServer({
        // Customize host/port here if needed
        host: process.env.HOST,
        port: process.env.PORT
      })
    )
}

module.exports = validate(config)
