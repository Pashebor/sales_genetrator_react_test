var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var root = path.resolve(__dirname, 'app');

module.exports = {
    entry: {
        trophy_js: path.resolve(root, 'app.jsx'),
        trophy_style: path.resolve(root, 'assets/sass/style.scss'),
        trophy: path.resolve(root, 'assets/img/trophy.svg'),
        seo: path.resolve(root, 'assets/img/seo.png')
        /*flower: path.resolve(root, 'assets/img/flowers.png'),
        paint: path.resolve(root, 'assets/img/paint.png'),
        loading: path.resolve(root, 'assets/img/loading.png')*/
    },
    output:{
        path: __dirname + '/build',
        filename: '[name].js'
    },

    watch: true,

    module: {
        loaders: [
            {
             test: /\.jsx?$/,
             exclude: /(node_modules)/,
             loader: "babel-loader",
                query: {
                    presets: ['es2015', 'react']
                }
            },
            {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract("style-loader", "css-loader!autoprefixer-loader?safe=true!sass-loader")
            },
            {
                test: /\.(svg)|(png)$/,
                loader: 'file?name=images/[name].[ext]'
            }
        ]
    },
    //devtool: "eval-source-map",
    plugins: [
        new HtmlWebpackPlugin({
           template: path.resolve(root, './index.html')
        }),
        new ExtractTextPlugin("css/[name].css", {allChunk:true})
   ]
};
