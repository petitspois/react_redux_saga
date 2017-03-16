var path = require('path');
var webpack = require('webpack');
module.exports = {
    devtool: 'cheap-module-eval-source-map',
    devServer: {
        host: "0.0.0.0",
        port: 7000,
        historyApiFallback:true
    },
    entry:{
        app:[
            'react-hot-loader/patch',
            'webpack-dev-server/client?http://0.0.0.0:7000',
            'webpack/hot/only-dev-server',
            './main'
        ]
    },
    output:{
        path: path.join(__dirname, 'dist'),
        filename: 'shared.js',
        publicPath: '/dist/'
    },
    module:{
        rules:[
            {
                test: /\.css$/,
                exclude: path.join(__dirname, 'src'),
                use: [
                    {
                        loader:'style-loader'
                    },
                    {
                        loader:'css-loader',
                    }
                ]
            },
            {
                test:/\.js$/,
                exclude:/node_modules/,
                use: "babel-loader"
            }
        ]
    }, 
   plugins: [
       new webpack.DefinePlugin({
          'process.env': { NODE_ENV: JSON.stringify('development') }
       }),
       new webpack.HotModuleReplacementPlugin(),
       new webpack.NamedModulesPlugin(),
    ],
      
}