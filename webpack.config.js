//var path = require('path');
//var webpack = require('webpack');

module.exports = {
    entry: './main.js',
    
    output: { path: './',
             filename: 'index.js'
            },
    
    devServer: {
        inline: true,
        port: 8080
    },
    
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets: ['es2015', 'react']
                }
            }
        ]
    },
};