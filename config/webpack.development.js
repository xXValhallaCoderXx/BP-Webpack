const merge = require('webpack-merge');
const parts = require('./webpack.parts');
const webpack = require('webpack');

const x = require('./paths');

exports.developmentConfig = merge([
    {
        entry: [
            'react-hot-loader/patch',
            'webpack-dev-server/client?http://localhost:8080',
            x.PATHS.app,
        ],
        plugins: [
            new webpack.DefinePlugin({
                'process.env': {
                    'NODE_ENV': '"development"',
                },
            }),
            new webpack.HotModuleReplacementPlugin(),
            new webpack.NamedModulesPlugin(),
        ],
    },
    parts.generateSourceMaps({ type: 'cheap-module-eval-source-map' }),
    parts.devServer({
        host: process.env.HOST,
        port: process.env.PORT,
    }),
    parts.loadCSS(),
    parts.loadImages(),
]);