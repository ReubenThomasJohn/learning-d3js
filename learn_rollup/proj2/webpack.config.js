const path = require("path");
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'awesome.js',
        path: path.resolve(__dirname, 'dist'),
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'css-loader',
                ],
            },
        ],
    },

    plugins: [
        new BundleAnalyzerPlugin()
    ],

    devServer: {
        static: path.join(__dirname, 'public'),
        port: 9000
    }
};