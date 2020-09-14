const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/App.js',
    output: {
        path: path.resolve(__dirname, './dist')
    },
    module: {
        rules: [
            {
                test: /\.js|\.jsx/,
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-react'],
                    plugins: ['zent'],
                },
            },
            {
                test: /\.css$/,
                loader: ['style-loader','css-loader'],

            },
            {
                test: /\.scss$/,
                loader: ['style-loader','css-loader','sass-loader']
            }
        ]
    },
    devServer: {
        port: 3000,
        hot: true,
    },
    plugins: [
        new HtmlWebpackPlugin({
          template: 'index.html',
        }),
    ],
}