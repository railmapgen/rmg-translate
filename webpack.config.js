const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const InterpolateHtmlPlugin = require('interpolate-html-plugin');
const ForkTsChecker = require('fork-ts-checker-webpack-plugin');

module.exports = {
    entry: './ui/index.ts',
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: [
                    {
                        loader: 'ts-loader',
                        options: {
                            configFile: 'tsconfig.ui.json',
                        },
                    },
                ],
                exclude: /node_modules/,
            },
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'build'),
    },
    devServer: {
        static: {
            directory: path.join(__dirname, 'public'),
        },
        compress: true,
        port: 9000,
    },
    mode: 'development',
    plugins: [
        new HtmlWebpackPlugin({ inject: true, template: './public/index.html' }),
        new InterpolateHtmlPlugin({ PUBLIC_URL: '/rmg-translate' }),
        new ForkTsChecker(),
    ],
};
