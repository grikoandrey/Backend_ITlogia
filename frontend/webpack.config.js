const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
    entry: './src/app.js',
    mode: 'development',
    devServer: {
        static: './dist',
        // static: path.resolve(__dirname, 'src'),
        // port: 8080,
    },
    output: {
        filename: 'app.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Development',
            template: './index.html',
        }),
        new CopyPlugin({
            patterns: [
                { from: './src/views', to: 'views' },
                { from: './src/css', to: 'css' },
            ]
        })
    ]
};