const babelPolyfill = require('babel-polyfill');
const path = require('path');
const webpack = require('webpack');

module.exports = {
    entry: ['babel-polyfill', './app/index.js'],

    output: {
        path: path.resolve(__dirname, 'dist/build'),

        filename: 'bundle.js'
    },
    resilve: {
        extensions: ['', '.js', '.css', '.less']
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel'
            }, {
                test: /\.css$/,
                loader: 'style!css!postcss'
            }, {
                test: /\.less$/,
                loader: 'style!css!postcss!less'
            }
        ]
    },
    postcss: function() {
        return [
            require('autoprefixer')
        ];
    },
    devtool: 'cheap-source-map'
};