const merge = require('webpack-merge');
const parts = require('./webpack.parts');

exports.developmentConfig = merge([
    parts.generateSourceMaps({ type: 'cheap-module-eval-source-map' }),
    parts.devServer({
        host: process.env.HOST,
        port: process.env.PORT,
    }),
    parts.loadCSS(),
    parts.loadImages(),
]);