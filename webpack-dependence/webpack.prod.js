const path = require('path');
const webpack = require('webpack');
require('babel-polyfill');
const ImageminPlugin = require('imagemin-webpack-plugin').default;

module.exports = {
    context: path.resolve(__dirname, '../app'),

    entry: {
        app: ['babel-polyfill', './index']
    },

    output: {
        path: path.resolve(__dirname, '../dist/build'),
        filename: '[name].bundle.js'
    },

    resolve: {
        extensions: ['', '.js', '.css', '.less']
    },

    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                loaders: ['babel']
            }, {
                test: /\.css$/,
                loader: ['style', 'css', 'postcss']
            }, {
                test: /\.less$/,
                loader: ['style', 'css', 'postcss', 'less']
            }
        ]
    },

    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            sourceMap: true,
            comments: false,
            compress: {
                warnings: false
            }
        }),
        new ImageminPlugin({
            pngquant: {
                quality: '95-100'
            }
        }),
        new webpack.DefinePlugin({
            isProduction: JSON.stringify(true)
        })
    ],

    debug: false,

    devtool: 'cheap-source-map'
};