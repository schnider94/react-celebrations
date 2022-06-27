const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: path.join(__dirname, "src", "index.js"),
    output: {
        path:path.resolve(__dirname, "dist"),
    },
    resolve: {
        modules: [path.resolve('./src'), path.resolve('./node_modules')],
        extensions: ['', '.js', '.lottie'],
    },
    module: {
        rules: [
            {
                test: /\.?js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react']
                    }
                }
            },{
                test: /\.css$/i,
                include: path.resolve(__dirname, 'src'),
                use: ['style-loader', 'css-loader', 'postcss-loader'],
            },{
                test: /\.lottie$/i,
                use: ['babel-loader', 'lottie-loader'],
            }
        ]
    },
    resolveLoader: {
        alias: {
            'lottie-loader': path.resolve(__dirname, 'webpack/lottie-loader.js'),
        }
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname, "src", "index.html"),
        }),
    ],
    devServer: {
        static: 'dist',
        watchFiles: ['src/**'],
    },
}