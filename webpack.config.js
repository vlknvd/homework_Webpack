const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCSSExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
    },
    mode: 'development',
    devServer: {
        port: 8888,
    },
    module: {
        rules: [
            {
                test: /\.html$/,
                use: [
                    {
                        loader: 'html-loader',
                    },
                ],
            },
            {
                test: /\.css$/,
                use: [
                    MiniCSSExtractPlugin.loader, 'css-loader',
                ],
            },
        ],
    },
    plugins: [
            new HtmlWebpackPlugin({
                template: './src/index.html'
            }),
            new MiniCSSExtractPlugin()
        ]
}