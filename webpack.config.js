//require our dependencies
var path = require('path')
var webpack = require('webpack')
var BundleTracker = require('webpack-bundle-tracker')

module.exports = {
    context: __dirname,
    entry: './assets/js/index.jsx',

    output: {
        path: path.resolve('./assets/bundles/'),
        filename: 'bundle.js',
    },

    plugins: [
        new BundleTracker({filename: './webpack-stats.json'}),
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            'window.jQuery': 'jquery'
        })
    ],

    module: {
        loaders: [
            {
              test: /\.jsx?$/,
              exclude: /node_modules/,
              loader: 'babel-loader',
              query: {
                presets: ['es2015','react']
              }
            }
        ]
    },

    resolve: {
        extensions: ['.js', '.jsx']
    }
}
