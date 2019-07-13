const path = require('path')
const webpack = require('webpack')
const htmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: path.join(__dirname, '/src/app.js'),
    output: {
        path: path.join(__dirname, '/mui'),
        filename: 'bunder.js'
    },
    devServer: {
        open: true,
        port: 3000,
        contentBase: 'src',
        hot: true
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new htmlWebpackPlugin({
            template: path.join(__dirname,'src/index.html'),
            filename: 'index.html'
        })
    ],
    module: {
        rules: [
            {test: /\.css$/, use: ['style-loader','css-loader']},
            {test: /\.less$/, use: ['style-loader','css-loader','less-loader']},
            {test: /\.(jpg|jpeg|bmp|gif|png|Webp)$/, use: ['url-loader?limit=3000&name=[hash:8]-[name].[ext]']},
            {test: /\.vue$/, use: ['vue-loader']},
            {test: /\.(woff|woff2|svg|ttf|eot)$/, use: ['url-loader']}
        ]
    },
    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.js'
        }
    }
}