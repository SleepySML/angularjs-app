const path = require('path');

module.exports = {
    context: __dirname + '/',
    entry: './app.ts',
    output: {
        path: __dirname + '/',
        filename: 'bundle.js'
    },
    resolve: {
        extensions: ['.ts', ".tsx", '.js']
    },
    module: {
        rules: [
            { test: /\.tsx?$/, loader: "ts-loader" },
            { test: /\.css$/, use: 'css-loader' },
            { test: /\.ts$/, use: 'ts-loader' }
        ]
    },
    devServer: {
        compress: true,
        port: 9000
    }
}