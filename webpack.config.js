const webpack = require('webpack'),
    path = require('path'),
    srcPath = path.join(__dirname, 'src'),
    HtmlWebpackPlugin = require('html-webpack-plugin');

const sassLoaders = [
  'style',
  'css',
  'sass'
];

module.exports = {
    target: 'web',
    entry: {
        module: path.join(srcPath, 'app.js'),
        common: ['react']
    },
    output: {
        path: path.join(__dirname, 'tmp'),
        publicPath: '',
        filename: '[name].js'
    },
    resolve: {
        root: srcPath,
        extensions: ['', '.js'],
        modulesDirectories: ['node_modules', 'src']
    },
    module: {
        loaders: [
            // Babel
            {
                test: /\.js?$/,
                exclude: /node_modules/,
                loader: 'babel',
                query: {
                    presets:[
                        'react',
                        'es2015'
                    ]
                }
            },
            // Sass
            {
               test: /\.scss$/,
               loaders: sassLoaders
            }
        ]
    },
    sassLoader: {
        inludePaths: [path.resolve(__dirname, 'src/styles-config/')]
    },
    plugins: [
        new HtmlWebpackPlugin({
            inject: true,
            template: 'src/index.html'
        })
    ],
    devServer: {
        contentBase: './tmp'
    }
};
