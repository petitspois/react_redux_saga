const path = require('path');
const webpack = require('webpack');
const autoprefixer = require('autoprefixer');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
var node_modules = path.resolve(__dirname, 'node_modules');
var extractCSS = new ExtractTextPlugin('styles.css');
var extractSASS = new ExtractTextPlugin('coverage.css');

module.exports = {
    devtool: false,
    entry: {
        vendor: [
            'react',
            'redux',
            'react-dom',
            'redux-saga',
            'react-redux',
            'react-router',
        ],
        shared: './main',
    },
    output: {
        path:path.join(__dirname, 'dist'),
        filename: '[name].js',
        chunkFilename: '[id].[chunkhash].js',
        publicPath: '/dist/'
    },
    plugins: [
        new webpack.DefinePlugin({
          'process.env': {
            NODE_ENV: JSON.stringify('production')
          }
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor',
            minChunks: Infinity,
            filename: 'vendor.js'
        }),
        new webpack.LoaderOptionsPlugin({
            minimize: true,
            debug: false
        }),
        new webpack.optimize.UglifyJsPlugin(),
        extractCSS,
        extractSASS,
    ],
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            use: "babel-loader"
        },
        {
            test: /\.scss$/,
            use: extractSASS.extract({
                fallback: 'style-loader',
                use: ['css-loader', 'postcss-loader','sass-loader']
            })
        },
        {
            test: /\.css$/,
            use: extractCSS.extract(["css-loader"])
        },
        ],
    },
};
