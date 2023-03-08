const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode:  "development",
    entry: path.join(__dirname, '../src/index.js'),
    output: {
        path: path.join(__dirname, '../dist'),
        filename: 'bundle.js'
    },
    performance: {
        hints: false,
        maxEntrypointSize: 512000,
        maxAssetSize: 512000
    },
    devtool: "inline-source-map",
    stats: {
        colors: true,
        modules: true,
        reasons: true,
        errorDetails: true,
        children: true
      },
      devServer: {
        static: {
          directory: path.join(__dirname, '../dist'),
        },
        hot: true,
        port: 8564
      },
    module: {
        rules: [
            {
                test:/\.(js|jsx)$/i,
                exclude:/node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(gif|png|jpe?g|svg)$/i,
                use: [
                    'file-loader',
                    {
                        loader: 'image-webpack-loader',
                        options: {
                            bypassOnDebug: true, // webpack@1.x
                            disable: true, // webpack@2.x and newer
                        },
                    },
                ],
            }
        ]
    },
    // plugins: [
    //     new HtmlWebpackPlugin({
    //         template: path.join(__dirname, '../src/index.html'),
    //         favicon: path.join(__dirname, '../src/assets/favicon.ico')
    //     })
    // ]
}